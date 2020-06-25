import React, { useEffect, useState, useMemo, useRef } from "react";
import useSWR from "swr";
import { json } from "d3-fetch";
import { scaleOrdinal, scaleSqrt, scaleSequential } from "d3-scale";
import {
  interpolateReds,
  interpolateBlues,
  interpolateGreens,
  interpolateGreys,
  interpolatePurples,
} from "d3-scale-chromatic";
import { max } from "d3-array";
import { select, event, selectAll } from "d3-selection";
import { geoMercator, geoPath, geoContains } from "d3-geo";
import { transition } from "d3-transition";
import { useTranslation } from "react-i18next";
import * as topojson from "topojson";
import * as Icon from "react-feather";
import {
  DATA_URL_ROOT,
  MAP_META,
  D3_TRANSITION_DURATION,
  MAP_TYPES,
  MAP_STROKE_WIDTH,
  MAP_STROKE_WIDTH_HIGHLIGHTED,
  MAP_CIRCLE_RADIUS,
  REGION_STROKE_WIDTH,
  MAP_OPTIONS,
  ZONE_COLORS,
  DISTRICT_POPULATIONS_MIL,
  CITY_CODES,
  CITY_NAMES,
  COLORS,
  UNKNOWN_DISTRICT_KEY,
} from "../constants";
import {
  capitalizeAll,
  formatNumber,
  getStatistic,
} from "../utils/commonFunctions";
import { CodeSquareIcon } from "@primer/octicons-v2-react";

const [width, height] = [432, 488];

//TODO create a separate value for this (district value)
const getTotalStatistic = (data, statistic, normalizer = 1) => {
  return "0";//getStatistic(data, "total", statistic, normalizer);
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
  // workMapData,
  // educationMapData,
  currentView,
  setCurrentView,
  changeMap,
  regionHighlighted,
  setRegionHighlighted,
  setHoveredData,
  statistic,
  isCountryLoaded,
}) {
  const { t } = useTranslation();
  const svgRef = useRef(null);

  const mapMeta = MAP_META[currentMap.code];

  // Load topoJSON file
  const { data: geoData } = useSWR(
    mapMeta.geoDataFile,
    async (file) => {
      return await json(file);
    },
    { revalidateOnFocus: false, suspense: true }
  );

  // console.log("currentMap.option: ", currentMap.option);

  // console.log(data);

  //TODO this needs to be dependent on the tab that is currently showing.
  const statisticMax = useMemo(() => {
    const districtCodes = Object.keys(data).filter(
      (districtCode) =>
        districtCode !== "NZ" && Object.keys(MAP_META).includes(districtCode)
    );
    return currentMap.view === MAP_TYPES.COUNTRY
      ? max(districtCodes, (districtCode) =>
          getTotalStatistic(
            data[districtCode],
            statistic,
            //TODO get the number of entries and total of all combined for this district.
            // This can be hardcoded as an API endpoint.
            currentMap.option === MAP_OPTIONS.PER_MILLION
              ? DISTRICT_POPULATIONS_MIL[districtCode]
              : 1
          )
        )
      : max(districtCodes, (districtCode) =>
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
    // var str = ""; // This is used to create the CITY_NAMES dictionary under ../constants
    features = features.map((f) => {
      // str += `${f.properties.NAME_2}: "${f.properties.NAME_2}",\n`
      const obj = Object.assign({}, f);
      obj.id = `${currentMap.code}-${f.properties.HASC_2}`; //`${currentMap.code}-${state}${district ? "-" + district : ""}`;
      return obj;
    });

    // console.log(str)

    const fillColor = (d) => {
      const districtCode = CITY_CODES[d.properties.NAME_1];
      const city = d.properties.NAME_2;
      const districtData = data[districtCode];
      const cityData = districtData?.districts?.[city];
      let n;
      if (currentMap.option === MAP_OPTIONS.HOTSPOTS) {
        n = cityData?.zone || 0;
      } else {
        if (city) n = getTotalStatistic(cityData, statistic);
        else
          n = getTotalStatistic(
            districtData,
            statistic,
            currentMap.option === MAP_OPTIONS.PER_MILLION
              ? DISTRICT_POPULATIONS_MIL[districtCode]
              : 1
          );
      }
      const color = n === 0 ? "#ffffff00" : mapScale(n);

      return color;
    };

    const strokeColor = (d) => {
      return '#000000'; //'#c3c9c8' //'#d2d6d5'; //'#6c757d91'; //'#000000'; //TODO remove this;
      return currentMap.option === MAP_OPTIONS.ZONES
        ? "#343a40"
        : COLORS[statistic];
    };

    const initialFillColor = (d) => {
      return "#ffffff00"; //'#c3c9c8';
    };

    const districtClicked = (d) => {
      var x, y, k;
      var centered = null;
      
      // console.log('district clicked: ', width, height, path.centroid(d));

      if(d && centered !== d){
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 9; //4 //12
        centered = d;
      } else {
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;
      }
      // console.log('x: ', x, "y: ", y, centroid);
  
      svg.selectAll('path')
        .classed("active", centered && function(d) { return d === centered; });
      
      svg.transition()
        .duration(D3_TRANSITION_DURATION)
        .attr("transform", "translate(" + width * (k/2) + "," + height * (k/2.15) + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
        // .style("stroke-width", 1.5 / k + "px");
        // .style("stroke-width", 0.125 + "rem");

    }

    /* Draw map */
    const t = transition().duration(D3_TRANSITION_DURATION);
    let onceTouchedRegion = null;
    const regionSelection = svg
      .select(".regions")
      .selectAll("path")
      .data(
        currentMap.option !== MAP_OPTIONS.HOTSPOTS ? features : [],
        (d) => d.id
      )
      .join(
        (enter) => {
          const sel = enter
            .append("path")
            .attr("d", path)
            .attr("stroke-width", REGION_STROKE_WIDTH) //1.8 //1
            .attr("stroke-opacity", 0) //0 //1
            // .attr('fill', "#ff0000")
            // .attr('fill-opacity', 1)
            .style("cursor", "pointer")
            .on("mouseenter", (d) => {
              setRegionHighlighted({
                districtCode: CITY_CODES[d.properties.NAME_2], // Unique on city names
                cityName: d.properties.NAME_2,
              });
            })
            .on("mouseleave", (d) => {
              if (onceTouchedRegion === d) onceTouchedRegion = null;
            })
            .on("touchstart", (d) => {
              if (onceTouchedRegion === d) onceTouchedRegion = null;
              else onceTouchedRegion = d;
            })
            .attr("fill", initialFillColor)
            // .attr('fill', fillColor)
            .attr("stroke", strokeColor);
          sel.append("title");
          return sel;
        },
        (update) =>
          update.call((update) =>
            // console.log('updating!!: '),
            update
              .transition(t)
              .attr("fill", fillColor)
              .attr("stroke", strokeColor)
          )
      )
      .attr("pointer-events", "all")
      .on("click", (d) => {
        // Setting state here causes interpolation to pause.
        setCurrentView({
          view: MAP_TYPES.DISTRICT
        });

        event.stopPropagation();
        const districtCode = CITY_CODES[d.properties.NAME_2];
        // Zoom in on the map
        districtClicked(d);
        // setupDataframe();
        if (
          onceTouchedRegion ||
          mapMeta.mapType === MAP_TYPES.COUNTRY ||
          !data[districtCode]?.NAME_2
        )
          return;
        // Disable pointer events till the new map is rendered
        svg.attr("pointer-events", "none");
        svg.select(".regions").selectAll("path").attr("pointer-events", "none");
        // Switch map
        // changeMap(CITY_CODES[d.properties.NAME_1]);

      });

    regionSelection.select("title").text((d) => {
      if (currentMap.option === MAP_OPTIONS.TOTAL) {
        const district = d.properties.NAME_1;
        const districtCode = CITY_CODES[district];
        const city = d.properties.NAME_2;
        const districtData = data[districtCode];
        const cityData = districtData?.city?.[city];
        let n;
        if (city) n = getTotalStatistic(cityData, statistic);
        else n = getTotalStatistic(districtData, statistic);
        return (
          // formatNumber(100 * (n / (statisticTotal || 0.001))) +
          // "% from " +
          capitalizeAll(city ? city : district)
        );
      }
    });

    svg
      .transition()
      .duration(mapMeta.mapType === MAP_TYPES.DISTRICT ? t.duration() / 2 : 0)
      .on("end", () =>
        svg.attr(
          "class",
          currentMap.option === MAP_OPTIONS.HOTSPOTS ? "zone" : ""
        )
      );

    /* ------- START OF Commute Lines -------- */

    // CLear existing data
    svg.selectAll('path.route').remove();
    svg.selectAll("circle.pin").remove();

    //For each key
    Object.keys(data).forEach((key) => {
      // console.log(key);
      const color = 
        key === "workMapData" 
        ? ZONE_COLORS.Red
        : COLORS.active;

      svg.selectAll('.routes')
        .data(data[key]) // [] // to debug // data
        .enter()
        .append('path')
          .attr('class', 'route')
          .attr('cursor', 'pointer')
          .attr('fill-opacity', 0.5)
          .attr("stroke", color) //TODO get stroke Color, which sets based on work or education
          .attr("stroke-width", MAP_STROKE_WIDTH) //.15
          .attr("fill", color)
          .attr('d', function (d) {
            var coordDepart = [d.departure_LONGITUDE, d.departure_LATITUDE];
            var coordArrivee = [d.destination_LONGITUDE, d.destination_LATITUDE];
            return path({
              type: 'LineString',
              coordinates: [
                coordDepart,
                coordArrivee
              ]
            });
          })
          // .attr("pointer-events", "all")
          // .on("click", (d) => {
          .on("mouseenter", (d) => {
            // console.log('path hovered: ', d);
            
            const features = topojson.feature(
              geoData,
              geoData.objects[mapMeta.graphObjectDistricts]
            ).features;
            // console.log(features);
            // features.some() <= this function is good, but only returns boolean.
            for(var f of features){
              if(geoContains(
                f, 
                [d.destination_LONGITUDE, d.destination_LATITUDE]
              )){
                // console.log(f)
                setHoveredData({
                  hoveredData: d,
                  hoveredDestination: f.properties.NAME_1
                });
                break;
              }
            }
            //TODO highlighted change stroke width
            // console.log("Make this highlighting work!!! ", d);
            // const highlighted = true; //d.id === select(this).id;
            // if (highlighted) this.parentNode.appendChild(this);
            // select(this).style('stroke-width', highlighted ? MAP_STROKE_WIDTH_HIGHLIGHTED : REGION_STROKE_WIDTH);
          });
    });

      // Add circles to each end
    Object.keys(data).forEach((key) => { 
      const color = 
        key === "workMapData" 
        ? ZONE_COLORS.Red
        : COLORS.active;

      svg
        .selectAll(".pin")
        .data(data[key])
        .enter()
        .append("circle", ".pin")
          .on("mouseenter", (d) => {
            console.log('circle hovered: ', d);
            setHoveredData({
              hoveredData: d,
              hoveredDestination: "",
            })
          })
          .attr('class', 'pin')
          .attr('cursor', 'pointer')
          .attr("r", MAP_CIRCLE_RADIUS) //.35 //.15
          .attr("fill", color)
          .attr("transform", function (d) {
            return (
              "translate(" +
              projection([d.departure_LONGITUDE, d.departure_LATITUDE]) +
              ")"
            );
          })
      
    })


    /* ------ END OF Commute Lines ------- */

    let meshCountry = [];
    if (mapMeta.mapType === MAP_TYPES.COUNTRY) {
      meshCountry = [
        topojson.mesh(geoData, geoData.objects[mapMeta.graphObjectStates]),
      ];
      meshCountry[0].id = mapMeta.graphObjectStates;
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
        // currentMap.view === MAP_TYPES.COUNTRY
        //   ? '.state-borders'
        //   : '.district-borders'
        ".state-borders"
        // '.district-borders'
      )
      .attr("fill", 'none') //"none"
      .attr("stroke-width", function () {
        return (
          // mapMeta.mapType === MAP_TYPES.COUNTRY
          // console.log(currentView.view),
          // currentView.view === MAP_TYPES.COUNTRY
          // currentMap.view === MAP_TYPES.DISTRICT
          // ? 0
          // : 1.5;
          // Make this thinner when zoomed in.
          // ? 1
          // : .1
          currentView.view === MAP_TYPES.COUNTRY
          ? .25 
          : .15
        );
      })
      .selectAll("path")
      .data(
        //currentMap.view === MAP_TYPES.COUNTRY ? meshStates : meshDistricts,
        meshCountry,
        // meshDistricts,
        (d) => d.id
      )
      .join((enter) => enter.append("path").attr("d", path))
      .transition(t)
      .attr("stroke", () => {
        if (currentMap.option === MAP_OPTIONS.ZONES) {
          return "#00000060";
        } else {
          return COLORS[statistic] + "30";
        }
      });

    // console.log(currentMap.view === MAP_TYPES.COUNTRY);
    svg
      .select(
        //currentMap.view === MAP_TYPES.COUNTRY
        //  ? '.district-borders'
        //  : '.state-borders'
        ".state-borders"
        // '.district-borders'
      )
      .selectAll("path")
      .data(
        //currentMap.view === MAP_TYPES.COUNTRY ? meshDistricts : meshStates,
        meshCountry,
        // meshDistricts,
        (d) => d.id
      )
      .join((enter) =>
        enter
          .append("path")
          .attr("d", path)
          .attr("fill", "none") //"none"
          .attr("stroke-width", .05/* .15 // 1.5*/)
      )
      .transition(t)
      .attr("stroke", "#343a4050");

    // Reset on tapping outside map
    svg.attr("pointer-events", "auto").on("click", () => {
      if (mapMeta.mapType !== MAP_TYPES.COUNTRY) {
        setRegionHighlighted({
          districtCode: "NZ",
          cityName: null,
        });
      }
    });
  }, [
    geoData,
    data,
    mapMeta,
    currentMap,
    setRegionHighlighted,
    changeMap,
    isCountryLoaded,
    mapScale,
    statistic,
    statisticTotal,
  ]);

  useEffect(() => {
    // console.log(regionHighlighted);
    const district = CITY_NAMES[regionHighlighted.districtCode];
    const city = regionHighlighted.cityName;

    const svg = select(svgRef.current);
    // if (currentMap.option === MAP_OPTIONS.HOTSPOTS) {
    //   svg
    //     .select('.circles')
    //     .selectAll('circle')
    //     .attr('fill-opacity', (d) => {
    //       const highlighted =
    //         state === d.properties.st_nm &&
    //         (!district ||
    //           district === d.properties?.district ||
    //           (district === UNKNOWN_DISTRICT_KEY && !d.properties.district));
    //       return highlighted ? 1 : 0.5;
    //     });
    // } else {
      svg
        .select('.regions')
        .selectAll('path')
        .each(function (d) {
          // console.log('highlighting: ', d);
          /*
          const highlighted =
            district === d.properties.NAME_1 &&
            (currentMap.view === MAP_TYPES.COUNTRY ||
              city === d.properties?.NAME_2);
          */
          const highlighted =
            city === d.properties.NAME_2;
          /*
          console.log(
            'highlighted: ', highlighted, 
            // "currentMap.view: ", currentMap.view,
            // "currentMap.view === MAP_TYPES.COUNTRY: ", 
            // currentMap.view === MAP_TYPES.COUNTRY,
            "district: ", district,
            "d.properties.NAME_1: ", d.properties.NAME_1,
            "city: ", city,
            "d.properties?.NAME_2: ", d.properties?.NAME_2
          );
          */
          if (highlighted) this.parentNode.appendChild(this);
          select(this).attr('stroke-opacity', highlighted ? 1 : 0);
          select(this).attr('fill-opacity', highlighted ? .95 : 0);
          select(this).attr('fill', highlighted ? '#000000' : 0);
        });
    // }
  }, [
    geoData,
    data,
    currentMap.option,
    currentMap.view,
    regionHighlighted.districtCode,
    regionHighlighted.cityName,
    statistic,
  ]);

  // Add NAME_1 to each departure and destination
  const setupDataframe = () => {
    // TODO remove this after running once
    // POST request to /setup to create the dataframe
    // 1. Create the data first
    const work_departures= [];
    const work_destinations= [];
    const education_departures= [];
    const education_destinations= [];

    const features = topojson.feature(
      geoData,
      geoData.objects[mapMeta.graphObjectDistricts]
    ).features;

    var b = false;

    console.log(data.educationMapData.length);
    console.log(data.workMapData.length);
    for(var r of data.educationMapData){
      b = false;
      for(var f of features){
        if(geoContains(f, [r.departure_LONGITUDE, r.departure_LATITUDE])){
          education_departures.push(f.properties.NAME_2) //NAME_1
          console.log("found feature education_departures");
          b = true;
          break;
        }
      }
      if(!b) education_departures.push("");
    }

    for(var r of data.educationMapData){
      b = false;
      for(var f of features){
        if(geoContains(f, [r.destination_LONGITUDE, r.destination_LATITUDE])){
          education_destinations.push(f.properties.NAME_2) //NAME_1
          console.log('found feature education_destinations')
          b = true;
          break;
        }
      }
      if(!b) education_destinations.push("");
    }

    for(var r of data.workMapData){
      b = false;
      for(var f of features){
        if(geoContains(f, [r.departure_LONGITUDE, r.departure_LATITUDE])){
          work_departures.push(f.properties.NAME_2) //NAME_1
          console.log('found feature work_departures')
          b = true;
          break;
        }
      }
      if(!b) work_departures.push("");
    }

    for(var r of data.workMapData){
      b = false;
      for(var f of features){
        if(geoContains(f, [r.destination_LONGITUDE, r.destination_LATITUDE])){
          work_destinations.push(f.properties.NAME_2) //NAME_1
          console.log("found feature work_destinations")
          b = true;
          break;
        }
      }
      if(!b) work_destinations.push("");
    }
    console.log(work_departures.length, work_destinations.length, education_departures.length, education_destinations.length)
  
    fetch(DATA_URL_ROOT + "/setup", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // credentials: 'same-origin',
      body: JSON.stringify({
        work_departures: work_departures,
        work_destinations: work_destinations,
        education_departures: education_departures,
        education_destinations: education_destinations,
      })
    }).then(()=>{console.log('sent /setup SUCCESS')})
    .catch((err) =>{console.error("Error sending request: ", err)})
    
  }

  return (
    <React.Fragment>
      {/* {console.log(data)} */}
      {/* {console.log("currentMap: ", currentMap)} */}
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
              {t("District-wise {{statistic}} numbers need reconciliation", {
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

      <svg style={{ position: "absolute", height: 0 }}>
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

// Top of map is probably Three Kings Islands
    // const top = -34.154944; // Latitude
    // const topLongitude = 172.138113;
    // Bottom of map is bottom of Stewart Island
    // const bottom = -47.285522; // Latitude
    // const bottomLongitude = 167.490438;
    // const right = 179.794907;
    // const left = 164.138842;

    /*
    const circlesData = [
      {
        name: "Auckland",
        location: {
          latitude: -36.89981,
          longitude: 174.537433,
        },
      },
      {
        name: "Canterbury",
        location: {
          latitude: -43.57914,
          longitude: 172.355433,
        },
      },
    ];
    */

    // console.log(data);

    /*
        const linesData = [
          {
            type: "LineString",
            coordinates: [
              [174.537433, -36.899810],
              [172.355433, -43.579140]
            ]
          }
        ]
        */
    
    // const linesData = [
    //   {
    //     departure: [174.537433 /* Longitude */, -36.89981 /* Latitude */],
    //     destination: [172.355433, -43.57914],
    //   },
    // ];
    
    /*
        var arcs = svg.append("g")
          .attr("class","arcs");

        // http://bl.ocks.org/mhkeller/f41cceac3e7ed969eaeb
        const lngLatToArc = (d, bend) => {
          bend = bend || 1;
          const from = d['departure'];
          const to = d['destination'];

          var sourceXY = projection(from),
					targetXY = projection(to);

          var sourceX = sourceXY[0],
              sourceY = sourceXY[1];

          var targetX = targetXY[0],
              targetY = targetXY[1];

          var dx = targetX - sourceX,
              dy = targetY - sourceY,
              dr = Math.sqrt(dx * dx + dy * dy)*bend;

          console.log(dx, dy, dr);

          // To avoid a whirlpool effect, make the bend direction consistent regardless of whether the source is east or west of the target
          var west_of_source = (targetX - sourceX) < 0;
          if (west_of_source) return "M" + targetX + "," + targetY + "A" + dr + "," + dr + " 0 0,1 " + sourceX + "," + sourceY;
          return "M" + sourceX + "," + sourceY + "A" + dr + "," + dr + " 0 0,1 " + targetX + "," + targetY;
        }
        
        svg.selectAll("path")
          .data(linesData)
          .enter()
          .append("path")
          .attr('d', (d) => lngLatToArc(d, 5));
*/

    /*
        svg.selectAll("line")
          .data(linesData)
          .enter()
          .append("line")
          .attr('fill-opacity', 0.5)
          .attr("stroke", "#ff0000")
          .attr("stroke-width", 5)
          .attr("fill", "#ff0000")
          .attr("x1", d=>projection(d.departure)[0])
          .attr("y1", d=>projection(d.departure)[1])
          .attr("x2", d=>projection(d.destination)[0])
          .attr("y2", d=>projection(d.destination)[1])
*/
/*
        svg.selectAll('.route')
          .data(linesData)
          .enter()
          .append('path')
            .attr('fill-opacity', 0.5)
            .attr("stroke", "#007bff")
            .attr("stroke-width", 3)
            .attr("fill", "#007bff")
            .attr('d', function (d) {
              var coordDepart = d.departure;
              var coordArrivee = d.destination;
              return path({
                type: 'LineString',
                coordinates: [
                  coordDepart,
                  coordArrivee
                ]
              });
            })
*/
/*
    // 1. Get the longitude & latitude
    // 2. Find the midpoint
    // 3. Add 20 to x, and reduce y by 20, this creates a slightly off-center point.
    // 4. Draw a d3.curve on these three points.
    // var lineGenerator = d3.line().curve(d3.curveCardinal);

    const linesData2 = [
      {
        departure: [174.537433, -36.89981],
        intermediate: [173, -40],
        destination: [172.355433, -43.57914],
      },
    ];

    svg
      .selectAll("curve")
      // .attr('d', curve(linesData))
      .data(linesData2)
      .enter()
      .append("path")
      // .append('curve')
      .attr("fill-opacity", 0.5)
      .attr("stroke", "#007bff")
      .attr("stroke-width", 3)
      .attr("fill", "#007bff")
      .attr("x1", (d) => projection(d.departure)[0])
      .attr("y1", (d) => projection(d.departure)[1])
      // .attr("x2", d=>projection(d.intermediate)[0])
      // .attr("y2", d=>projection(d.intermediate)[1])
      .attr("x2", (d) => projection(d.destination)[0])
      .attr("y2", (d) => projection(d.destination)[1]);
*/

    // Plot an example point
    /*
    svg
      .selectAll(".pin")
      .data(circlesData)
      .enter()
      .append("circle", ".pin")
      .attr("r", 4)
      .attr("fill", "#007bff")
      .attr("transform", function (d) {
        return (
          "translate(" +
          projection([d.location.longitude, d.location.latitude]) +
          ")"
        );
      });
    */
    /*
        svg
          .select('.circles')
          .selectAll('circle')
          .data(circlesData, (d) => d.id)
          .join((enter) => 
              enter
                .append('circle')
                .attr('transform', (d) => `translate(${path.centroid(d)})`)
                .attr('fill-opacity', 0.5)
            .style('cursor', 'pointer')
            .attr('pointer-events', 'all')
            .on('mouseenter', (d) => {
              setRegionHighlighted({
                stateCode: CITY_CODES[d.id],
                districtName: d.properties.NAME_1 || UNKNOWN_DISTRICT_KEY,
              });
            })
            .on('click', () => {
              event.stopPropagation();
            })
          )
          .transition(t)
          .attr('fill', COLORS[statistic] + '70')
          .attr('stroke', COLORS[statistic] + '70')
          .attr('r', (d) => mapScale(d.value)
        );
        */