import MapVisualizerLoader from "./loaders/mapVisualizer";

import {
  MAP_META,
  MAP_OPTIONS,
  MODES_OF_TRANSPORT,
  DISTRICT_STATISTICS_TOTAL,
  DISTRICT_STATISTICS_WORK,
  DISTRICT_STATISTICS_EDUCATION,
  DISTRICT_SUMMARY,
  COMMUTE_PURPOSE_COLOUR,
  CENTROID_SUMMARY,
  MAP_TYPES,
  CITY_NAMES,
  UNKNOWN_DISTRICT_KEY,
  DISTRICT_POPULATIONS_MIL,
} from "../constants";
import {
  capitalize,
  formatNumber,
  formatDate,
  formatLastUpdated,
  getStatistic,
} from "../utils/commonFunctions";

import { PinIcon } from "@primer/octicons-v2-react";
import classnames from "classnames";
import equal from "fast-deep-equal";
import produce from "immer";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Suspense,
  lazy,
} from "react";
import ReactDOM from "react-dom";
import * as Icon from "react-feather";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useSprings, animated } from "react-spring";
import LeftPanel from "./leftPanel";
import { differenceInSeconds } from "date-fns/esm";

const MapVisualizer = lazy(() =>
  import("./mapVisualizer" /* webpackChunkName: "MapVisualizer" */)
);

const CommuteTab = lazy(() => 
  import("./commuteTab" /* webpackChunkName: "CommuteTab" */)
)

function MapExplorer({
  districtCode,
  educationData,
  workData,
  regionalEducationData,
  regionalWorkData,
  regionalTotalData,
  centroidData,
  allCentroidDestinations,
  regionHighlighted,
  setRegionHighlighted,
  anchor,
  setAnchor,
  mapStatistic,
  setMapStatistic,
  isCountryLoaded = true,
}) {
  const { t } = useTranslation();
  const history = useHistory();

  const mapExplorerRef = useRef();
  const leafletMapRef = useRef();

  const mapRef = useRef(null);

  const [currentMap, setCurrentMap] = useState({
    code: districtCode,
    view: MAP_TYPES.COUNTRY,
    option: MAP_OPTIONS.TOTAL
  });

  // District vs Country view
  const [currentView, setCurrentView] = useState({
    view: MAP_TYPES.COUNTRY
  }); 
  
  const [regionalData, setRegionalData] = useState(
    undefined
  )

  const [highlightedData, setHighlightedData] = useState({});

  const [clickedData, setClickedData] = useState({});

  const [currentDestinationData, setCurrentDestinationData] = useState({
    from: "",
    to: "",
  })

  // useEffect(()=>{
  //   console.log('destination data changed: ', destinationData);
  // },[destinationData])

  // What to display at the top
  const [currentMapStatistics, setCurrentMapStatistics] = useState(MODES_OF_TRANSPORT);
// console.log(currentMapStatistics)
  const [hoveredData, setHoveredData] = useState({
    hoveredData: {},
    hoveredDestination: "",
  })

  const [currentCommuteTypes, setCurrentCommuteTypes] = useState(
    Object.values(MODES_OF_TRANSPORT) // Select all
    // [
    //   //"Drive own vehicle"
    //   "Stay home"
    // ]
  )

  // const setCurrentCommuteTypes = (e) => {
    // console.log('setCurrentCommuteTypes: ', currentCommuteTypes);
    // console.log(leafletMapRef);
    // leafletMapRef.current.updateData();
  // }

  // useEffect(()=>{
  //   console.log('current commute types changed: ', currentCommuteTypes)
  // })

  const updateCurrentData = () => {
    // console.log(currentMap.option);
    return {
      educationMapData: 
        currentMap.option !== MAP_OPTIONS.WORK
        ? educationData
        : [],
      workMapData: 
        currentMap.option !== MAP_OPTIONS.EDUCATION
        ? workData
        : []
    }
  }
  // Define data based on the current tab.
  const [data, setCurrentData] = useState(updateCurrentData);

  const currentMapMeta = MAP_META[currentMap.code];

  // Executes after a state update
  useEffect(() => {
    setCurrentData(updateCurrentData);
    // console.log("currentMap.option: ", currentMap.option);
    setCurrentMap({
      code: regionHighlighted.districtCode,
      view: MAP_TYPES.COUNTRY,
      option: currentMap.option,
    });
    // if (regionHighlighted.cityName) {
    //   if (
    //     currentMap.code !== regionHighlighted.districtCode &&
    //     !(
    //       currentMapMeta.mapType === MAP_TYPES.COUNTRY &&
    //       currentMap.view === MAP_TYPES.COUNTRY
    //     )
    //   ) {
    //     const newMapMeta = MAP_META[regionHighlighted.districtCode];
    //     if (!newMapMeta) {
    //       return;
    //     }
    //     // setCurrentMap({
    //     //   code: regionHighlighted.districtCode,
    //     //   view: MAP_TYPES.COUNTRY,
    //     //   option: currentMap.option,
    //     // });
    //   }
    // } else if (isCountryLoaded && currentMapMeta.mapType === MAP_TYPES.COUNTRY) {
    //   // setCurrentMap({
    //   //   code: "NZ",
    //   //   view: MAP_TYPES.COUNTRY,
    //   //   option: currentMap.option,
    //   // });
    // }
  }, [
    isCountryLoaded,
    regionHighlighted.districtCode,
    regionHighlighted.districtName,
    currentMap.code,
    currentMap.option,
    currentMap.view,
    // currentMapMeta.mapType,
  ]);

  const switchMap = useCallback(
    (districtCode) => {
      const newMapMeta = MAP_META[districtCode];
      if (!newMapMeta) {
        return;
      }
      if (newMapMeta.mapType === MAP_TYPES.STATE) {
        const districts = educationData[districtCode].districts || {};
        const topDistrict = Object.keys(districts).sort(
          (a, b) =>
            getStatistic(districts[b], "total", mapStatistic) -
            getStatistic(districts[a], "total", mapStatistic)
        )[0];
        ReactDOM.unstable_batchedUpdates(() => {
          setRegionHighlighted({
            districtCode: districtCode,
            cityName: topDistrict,
          });
          setCurrentMap({
            code: districtCode,
            view: MAP_TYPES.COUNTRY,
            option: currentMap.option,
          });
        });
      } else {
        ReactDOM.unstable_batchedUpdates(() => {
          setCurrentMap({
            code: "NZ",
            view: MAP_TYPES.COUNTRY,
            option: currentMap.option,
          });
          setRegionHighlighted({
            districtCode: "NZ",
            cityName: null,
          });
        });
      }
    },
    [educationData, workData, currentMap.option, mapStatistic, setRegionHighlighted]
  );

  useEffect(() => {
    switchMap(districtCode);
  }, [districtCode, switchMap]);

  // Set the values to be used at the top.
  // const panelState = useState({
  //   data: hoveredData.hoveredData
  // },[data]);
  /*() => {
    return produce(data, (draft) => {
      draft.district = regionHighlighted.districtCode;
    });
  }, [
    data,
    regionHighlighted.districtCode,
    currentMap.view,
    currentMap.code,
  ]);
  */
  // console.log(panelState);

  const hoveredRegion = useMemo(() => {
    // console.log(hoveredData);
    const hovered =
      (regionHighlighted.districtCode
        ? educationData[regionHighlighted.districtCode]?.districts?.[
            regionHighlighted.cityName
          ]
        : educationData[regionHighlighted.districtCode]) || {};
    return produce(hovered, (draft) => {
      draft.name =
        regionHighlighted.districtCode ||
        CITY_NAMES[regionHighlighted.districtCode];
      if (!regionHighlighted.districtCode)
        draft.population_millions =
          DISTRICT_POPULATIONS_MIL[regionHighlighted.districtCode];
    });
  }, [
    educationData,
    workData,
    regionHighlighted.districtCode,
    regionHighlighted.cityName,
  ]);

  const handleTabClick = (option) => {
    // console.log('moving to tab: ', option);
    setCurrentMap({
      code: currentMap.code,
      view: MAP_TYPES.COUNTRY,
      option: option,
    });
    if (currentView.view === MAP_TYPES.COUNTRY)
      setRegionHighlighted({
        districtCode: regionHighlighted.districtCode,
        cityName: null,
      });
    return;
  };

  return (
    <div
      className={classnames(
        "MapExplorer",
        { stickied: anchor === "mapexplorer" },
        { hidden: anchor && anchor !== "mapexplorer" }
      )}
    >
      {window.innerWidth > 769 && (
        <div
          className={classnames("anchor", {
            stickied: anchor === "mapexplorer",
          })}
          onClick={() => {
            setAnchor(anchor === "mapexplorer" ? null : "mapexplorer");
          }}
        >
          {/* <PinIcon /> */}
        </div>
      )}

      {/* <div className="header">
        { currentView.view === MAP_TYPES.COUNTRY 
          ? <h6>
            {t("{{action}} over a {{mapType}} for more details", {
              action: t(window.innerWidth <= 769 ? "Tap" : "Hover"),
              mapType: t("Regional District"),
            })}
          </h6>
          : ""
        }
      </div> */}

      {/* <LeftPanel 
        hoveredRegion={hoveredRegion}
        hoveredData={hoveredData}
        highlightedData={highlightedData}
      /> */}
      
      {/* <div className="details-container-wrapper">
        <div className="details-container">
          <div className="meta">
            <h2
              className={classnames(mapStatistic, {
                [hoveredRegion?.zone]: currentMap.option === MAP_OPTIONS.HOTSPOTS,
              })}
            >
              <div>
                {t("From ")}
                {t(hoveredRegion.name)}
                {hoveredData.hoveredData.departure_SA22018_V1_NAME && hoveredData.hoveredData.departure_SA22018_V1_NAME.length ? ", " : ""}
                {t(hoveredData.hoveredData.departure_SA22018_V1_NAME)}
                <div>
                  {t("To ")}
                  {hoveredData.hoveredDestination}
                  {hoveredData.hoveredDestination.length 
                    ? ", "
                    : ""  
                  }
                  {hoveredData.hoveredData.destination_SA22018_V1_NAME}
                </div>
              </div>
              
              <div style={{alignSelf: "center"}}>
                {!isNaN(Number(hoveredData.hoveredData.HAVERSINE_DISTANCE))
                  ? Number(hoveredData.hoveredData.HAVERSINE_DISTANCE).toFixed(2) + "km"
                  : ""
                }
              </div>
            </h2>
          </div>
          <div className="map-stats">
            <div>
              {Object.keys(highlightedData || {}).map((statistic, index) => (
                <div key={index}>
                  {statistic}
                  ,
                  {highlightedData[statistic]}
                </div>
                )
              )
              }
            </div>
            : <div>{currentMapStatistics.map((statistic, index) => (
                <div
                  key={statistic}
                  className={classnames("stats", statistic, {
                    focused: statistic === mapStatistic,
                  })}
                  onClick={() => setMapStatistic(statistic)}
                >
                  <h5>{t(capitalize(statistic))}</h5>
                  <div className="stats-bottom">
                    <animated.h1>
                      {springs[index].total.interpolate((total) =>
                        formatNumber(Math.floor(total))
                      )}
                    </animated.h1>
                  </div>
                </div>
              ))}
            </div>
            }
            
          </div>
        </div>
      </div> */}

      <div ref={mapExplorerRef}>
        {mapStatistic && (
          <Suspense
            fallback={
              <MapVisualizerLoader
                className="map-loader"
                {...{
                  width: mapExplorerRef.current?.clientWidth,
                  statistic: mapStatistic, // the color to set for the loader
                }}
              />
            }
          >
            <div className="main-wrapper">
              <LeftPanel 
                hoveredRegion={hoveredRegion}
                hoveredData={hoveredData}
                highlightedData={highlightedData}
                centroidData={centroidData}
                // allCentroidDestinations={allCentroidDestinations}
                currentDestinationData={currentDestinationData}
                clickedData={clickedData}
                setClickedData={setClickedData}
                mapRef={mapRef}
              />

              <div className="map-wrapper">

                <MapVisualizer
                  currentMap={currentMap}
                  data={data}
                  regionalEducationData={regionalEducationData}
                  regionalWorkData={regionalWorkData}
                  regionalTotalData={regionalTotalData}
                  centroidData={centroidData}
                  setRegionalData={setRegionalData}
                  currentView={currentView}
                  setCurrentView={setCurrentView}
                  changeMap={switchMap}
                  regionHighlighted={regionHighlighted}
                  setRegionHighlighted={setRegionHighlighted}
                  setHighlightedData={setHighlightedData}
                  setHoveredData={setHoveredData}
                  statistic={mapStatistic}
                  isCountryLoaded={isCountryLoaded}
                  currentCommuteTypes={currentCommuteTypes}
                  leafletMapRef={leafletMapRef}
                  setCurrentDestinationData={setCurrentDestinationData}
                  setClickedData={setClickedData}
                  mapRef={mapRef}
                />

                <div className="tabs-container">
                  <div className="tabs-map">
                    {Object.values(MAP_OPTIONS).map((option) => (
                      <div
                        key={option}
                        className={classnames("tab", {
                          focused: currentMap.option === option,
                        })}
                        onClick={() => handleTabClick(option)}
                      >
                        <h4 className={option}
                          style={{
                            color: COMMUTE_PURPOSE_COLOUR[option.toUpperCase()],
                          }}
                        >
                          {t(option)}
                          {/* {option === MAP_OPTIONS.EDUCATION && <sup>&dagger;</sup>} */}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="info legend">
                {
                  Object.keys(COMMUTE_PURPOSE_COLOUR).map((commutePurpose, index) => (
                    <div key={index}>
                      <i style={{"background": COMMUTE_PURPOSE_COLOUR[commutePurpose]}}></i>
                      <span>{ commutePurpose }</span>
                    </div>
                  ))
                }
                </div> */}

              </div>

              <div className="commutes-wrapper">
                {Object.values(MODES_OF_TRANSPORT).map((commuteType, i)=>(
                    <CommuteTab 
                      commuteType={commuteType} 
                      currentCommuteTypes={currentCommuteTypes}
                      setCurrentCommuteTypes={setCurrentCommuteTypes}
                      key={i} 
                    />
                  ))
                }
              </div>

            </div>

          </Suspense>
        )}
      </div>
    </div>
  );
}

const isEqual = (prevProps, currProps) => {
  if (!equal(prevProps.stateCode, currProps.stateCode)) {
    return false;
  } else if (!equal(prevProps.regionHighlighted, currProps.regionHighlighted)) {
    return false;
  } else if (!equal(prevProps.mapStatistic, currProps.mapStatistic)) {
    return false;
  } else if (!equal(prevProps.anchor, currProps.anchor)) {
    return false;
  } else if (
    !equal(
      prevProps.educationData?.NZ?.meta?.["last_updated"],
      currProps.educationData?.NZ?.meta?.["last_updated"]
    )
  ) {
    return false;
  } else if (
    !equal(
      prevProps.educationData?.NZ?.total,
      currProps.educationData?.NZ?.total
    )
  ) {
    return false;
  }
  return true;
};

export default React.memo(MapExplorer, isEqual);
