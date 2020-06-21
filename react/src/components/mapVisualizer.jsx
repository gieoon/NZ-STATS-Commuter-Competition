import React, {useEffect, useMemo, useRef} from 'react';
import useSWR from 'swr';
import {json} from 'd3-fetch';
import {scaleOrdinal, scaleSqrt, scaleSequential} from 'd3-scale';
import {
    interpolateReds,
    interpolateBlues,
    interpolateGreens,
    interpolateGreys,
    interpolatePurples,
} from 'd3-scale-chromatic';
import {max} from 'd3-array';
import {select, event} from 'd3-selection';
import {geoMercator, geoPath} from 'd3-geo';
import {transition} from 'd3-transition';
import {useTranslation} from 'react-i18next';
import * as topojson from 'topojson';
import * as Icon from 'react-feather';
import {
    MAP_META,
    D3_TRANSITION_DURATION,
    MAP_TYPES,
    MAP_OPTIONS,
    ZONE_COLORS,
    DISTRICT_POPULATIONS_MIL,
    DISTRICT_CODES,
    COLORS,
    UNKNOWN_DISTRICT_KEY,
} from '../constants';
import {
    capitalizeAll,
    formatNumber,
    getStatistic,
} from '../utils/commonFunctions';

const [width, height] = [432, 488];

const getTotalStatistic = (data, statistic, normalizer = 1) => {
    return getStatistic(data, 'total', statistic, normalizer);
};

const colorInterpolator = {
    confirmed: (t) => interpolateReds(t * 0.85),
    active: (t) => interpolateBlues(t * 0.85),
    recovered: (t) => interpolateGreens(t * 0.85),
    deceased: (t) => interpolateGreys(t * 0.85),
    tested: (t) => interpolatePurples(t * 0.85),
};

function MapVisualizer({
    currentMap,
    data,
    changeMap,
    regionHighlighted,
    setRegionHighlighted,
    statistic,
    isCountryLoaded,
}){
    const {t} = useTranslation();
    const svgRef = useRef(null);

    const mapMeta = MAP_META[currentMap.code];

    const {data: geoData} = useSWR(
        mapMeta.geoDataFile,
        async (file) => {
            // const f = await json(file);
            // console.log(f);
            return await json(file);
        },
        {revalidateOnFocus: false, suspense: true}
    );

    const statisticMax = useMemo(() => {
        const stateCodes = Object.keys(data).filter(
          (districtCode) =>
          districtCode !== 'NZ' && Object.keys(MAP_META).includes(districtCode)
        );
        return currentMap.view === MAP_TYPES.COUNTRY
          ? max(stateCodes, (districtCode) =>
              getTotalStatistic(
                data[districtCode],
                statistic,
                currentMap.option === MAP_OPTIONS.PER_MILLION
                  ? DISTRICT_POPULATIONS_MIL[districtCode]
                  : 1
              )
            )
          : max(stateCodes, (districtCode) =>
              data[districtCode]?.districts
                ? max(Object.values(data[districtCode].districts), (districtData) =>
                    getTotalStatistic(districtData, statistic)
                  )
                : 0
            );
    }, [data, currentMap.option, currentMap.view, statistic]);
    
    const statisticTotal = useMemo(() => {
        return getTotalStatistic(
          data[currentMap.code],
          statistic,
          currentMap.option === MAP_OPTIONS.PER_MILLION
            ? DISTRICT_POPULATIONS_MIL[currentMap.code]
            : 1
        );
    }, [data, currentMap.code, currentMap.option, statistic]);
    
    const mapScale = useMemo(() => {
      // console.log(currentMap.option);
        if (currentMap.option === MAP_OPTIONS.ZONES) {
          return scaleOrdinal(Object.keys(ZONE_COLORS), Object.values(ZONE_COLORS));
        } else if (currentMap.option === MAP_OPTIONS.HOTSPOTS) {
          return scaleSqrt([0, Math.max(statisticMax, 1)], [0, 40])
            .clamp(true)
            .nice(3);
        } else {
          return scaleSequential(
            [0, Math.max(1, statisticMax)],
            colorInterpolator[statistic]
          ).clamp(true);
        }
    }, [currentMap.option, statistic, statisticMax]);
    
    useEffect(() => {
        const topology = topojson.feature(
          geoData,
          geoData.objects[mapMeta.graphObjectStates || mapMeta.graphObjectDistricts]
        );
    
        const svg = select(svgRef.current);
        // console.log(svg.select('.regions'));
    
        // TODO change this to make it scrollable and update the projection
        // Click on a region to zoom into it and load data for it.
        // Set the longitude & latitude for y = 0; 
        const projection = geoMercator().fitSize([width, height], topology);
        const path = geoPath(projection);
    
        let features =
          currentMap.view === MAP_TYPES.DISTRICT
            ? topojson.feature(geoData, geoData.objects[mapMeta.graphObjectStates])
                .features
            : mapMeta.mapType === MAP_TYPES.COUNTRY &&
              currentMap.option === MAP_OPTIONS.HOTSPOTS
            ? [
                ...topojson.feature(
                  geoData,
                  geoData.objects[mapMeta.graphObjectStates]
                ).features,
                ...topojson.feature(
                  geoData,
                  geoData.objects[mapMeta.graphObjectDistricts]
                ).features,
              ]
            : topojson.feature(
                geoData,
                geoData.objects[mapMeta.graphObjectDistricts]
              ).features;
    
        // Add id to each feature
        features = features.map((f) => {
          // console.log(f);
          const district = f.properties.NAME_1;
          const state = f.properties.HASC_2;
          const obj = Object.assign({}, f);
          obj.id = `${currentMap.code}-${state}${district ? '-' + district : ''}`;
          return obj;
        });
    
        const fillColor = (d) => {
          // console.log(d.id);
          const stateCode = DISTRICT_CODES[d.properties.HASC_2];
          const district = d.properties.NAME_1;
          const stateData = data[stateCode];
          const districtData = stateData?.districts?.[district];
          let n;
          if (currentMap.option === MAP_OPTIONS.HOTSPOTS) {
            n = districtData?.zone || 0;
          } else {
            if (district) n = getTotalStatistic(districtData, statistic);
            else
              n = getTotalStatistic(
                stateData,
                statistic,
                currentMap.option === MAP_OPTIONS.PER_MILLION
                  ? DISTRICT_POPULATIONS_MIL[stateCode]
                  : 1
              );
          }
          const color = n === 0 ? '#ffff00' : mapScale(n);
          // return '#ffffff'; //TODO remove this

          return color;
        };
    
        const strokeColor = (d) => {
          // return '#c3c9c8' //'#d2d6d5'; //'#6c757d91'; //'#000000'; //TODO remove this;
          return currentMap.option === MAP_OPTIONS.ZONES
            ? '#343a40'
            : COLORS[statistic];
        };

        const initialFillColor = (d) => {
          return '#c3c9c8';
        }
    
        // console.log(currentMap.option, features);
        /* Draw map */
        const t = transition().duration(D3_TRANSITION_DURATION);
        let onceTouchedRegion = null;
        const regionSelection = svg
          .select('.regions')
          .selectAll('path')
          .data(
            currentMap.option !== MAP_OPTIONS.HOTSPOTS ? features : [],
            (d) => d.id
          )
          .join(
            (enter) => {
              const sel = enter
                .append('path')
                .attr('d', path)
                .attr('stroke-width', 1.8) //1.8 //1
                .attr('stroke-opacity', 0) //0 //1
                .style('cursor', 'pointer')
                .on('mouseenter', (d) => {
                  console.log('region entered: ', d);
                  setRegionHighlighted({
                    stateCode: DISTRICT_CODES[d.properties.HASC_2],
                    districtName: d.properties.NAME_1,
                  });
                  // svg.select(this).style('fill', '#ff0000');
                })
                .on('mouseleave', (d) => {
                  if (onceTouchedRegion === d) onceTouchedRegion = null;
                })
                .on('touchstart', (d) => {
                  if (onceTouchedRegion === d) onceTouchedRegion = null;
                  else onceTouchedRegion = d;
                })
                .attr('fill', initialFillColor)
                // .attr('fill', fillColor)
                .attr('stroke', strokeColor);
              sel.append('title');
              return sel;
            },
            (update) =>
              update.call((update) =>
                // console.log('updating!!: '),
                update
                  .transition(t)
                  .attr('fill', fillColor)
                  .attr('stroke', strokeColor)
              )
          )
          .attr('pointer-events', 'all')
          .on('click', (d) => {
            event.stopPropagation();
            const stateCode = DISTRICT_CODES[d.id];
            if (
              onceTouchedRegion ||
              mapMeta.mapType === MAP_TYPES.COUNTRY ||
              !data[stateCode]?.NAME_1
            )
              return;
            // Disable pointer events till the new map is rendered
            svg.attr('pointer-events', 'none');
            svg.select('.regions').selectAll('path').attr('pointer-events', 'none');
            // Switch map
            changeMap(DISTRICT_CODES[d.id]);
          });
    
        regionSelection.select('title').text((d) => {
            if (currentMap.option === MAP_OPTIONS.TOTAL) {
                const state = d.id;
                const stateCode = DISTRICT_CODES[state];
                const district = d.properties.NAME_1;
        
                const stateData = data[stateCode];
                const districtData = stateData?.districts?.[district];
                let n;
                if (district) n = getTotalStatistic(districtData, statistic);
                else n = getTotalStatistic(stateData, statistic);
                return (
                formatNumber(100 * (n / (statisticTotal || 0.001))) +
                '% from ' +
                capitalizeAll(district ? district : state)
                );
            }
        });
    
        svg
          .transition()
          .duration(mapMeta.mapType === MAP_TYPES.DISTRICT ? t.duration() / 2 : 0)
          .on('end', () =>
            svg.attr('class', currentMap.option === MAP_OPTIONS.HOTSPOTS ? 'zone' : '')
          );


          let meshStates = [];
          if (mapMeta.mapType === MAP_TYPES.COUNTRY) {
            meshStates = [
              topojson.mesh(geoData, geoData.objects[mapMeta.graphObjectStates]),
            ];
            meshStates[0].id = mapMeta.graphObjectStates;
          }
          let meshDistricts = [];
          if (currentMap.view === MAP_TYPES.DISTRICT) {
            // Add id to mesh
            meshDistricts = [
              topojson.mesh(geoData, geoData.objects[mapMeta.graphObjectDistricts]),
            ];
            meshDistricts[0].id = mapMeta.graphObjectDistricts;
          }
      
          svg
            .select(
              currentMap.view === MAP_TYPES.COUNTRY
                ? '.state-borders'
                : '.district-borders'
            )
            .attr('fill', 'none')
            .attr('stroke-width', function () {
              return mapMeta.mapType === MAP_TYPES.COUNTRY &&
                currentMap.view === MAP_TYPES.DISTRICT
                ? 0
                : 1.5;
            })
            .selectAll('path')
            .data(
              currentMap.view === MAP_TYPES.COUNTRY ? meshStates : meshDistricts,
              (d) => d.id
            )
            .join((enter) => enter.append('path').attr('d', path))
            .transition(t)
            .attr('stroke', () => {
              if (currentMap.option === MAP_OPTIONS.ZONES) {
                return '#00000060';
              } else {
                return COLORS[statistic] + '30';
              }
            });
      
          svg
            .select(
              currentMap.view === MAP_TYPES.COUNTRY
                ? '.district-borders'
                : '.state-borders'
            )
            .selectAll('path')
            .data(
              currentMap.view === MAP_TYPES.COUNTRY ? meshDistricts : meshStates,
              (d) => d.id
            )
            .join((enter) =>
              enter
                .append('path')
                .attr('d', path)
                .attr('fill', 'none')
                .attr('stroke-width', 1.5)
            )
            .transition(t)
            .attr('stroke', '#343a4050');
      
          // Reset on tapping outside map
          svg.attr('pointer-events', 'auto').on('click', () => {
            if (mapMeta.mapType !== MAP_TYPES.COUNTRY) {
              setRegionHighlighted({
                stateCode: 'NZ',
                districtName: null,
              });
            }
          });
    });     

    return (
        <React.Fragment>
            {/* {console.log(data)} */}
            {console.log("currentMap: ", currentMap)}
            {/* {console.log(data[currentMap.code])} */}
            <div className="svg-parent">
            <svg
                id="chart"
                viewBox={`0 0 ${width} ${height}`}
                preserveAspectRatio="xMidYMid meet"
                ref={svgRef}
            >
                <g className="regions" />
                <g className="state-borders" />
                {currentMap.view === MAP_TYPES.COUNTRY && (
                  <g className="district-borders" />
                )}
                {currentMap.option === MAP_OPTIONS.HOTSPOTS && (
                <g className="circles" />
                )}
            </svg>
            {mapMeta.mapType === MAP_TYPES.DISTRICT &&
                !!getTotalStatistic(
                data[currentMap.code]?.districts?.[UNKNOWN_DISTRICT_KEY],
                statistic
                ) && (
                <div className="disclaimer">
                    <Icon.AlertCircle />
                    {t('District-wise {{statistic}} numbers need reconciliation', {
                    statistic: t(statistic),
                    })}
                </div>
                )}
            </div>
    
            {/* {mapScale && (
            <MapLegend
                data={data}
                mapScale={mapScale}
                mapOption={currentMap.option}
                statistic={statistic}
            />
            )} */}
    
            <svg style={{position: 'absolute', height: 0}}>
            <defs>
                <filter id="balance-color" colorInterpolationFilters="sRGB">
                <feColorMatrix
                    type="matrix"
                    values="0.91372549  0           0            0  0.08627451
                            0           0.91372549  0            0  0.08627451
                            0           0           0.854901961  0  0.145098039
                            0           0           0            1  0"
                />
                </filter>
            </defs>
            </svg>
        </React.Fragment>
    );
}

export default MapVisualizer;