import MapVisualizerLoader from "./loaders/mapVisualizer";

import {
  MAP_META,
  MAP_OPTIONS,
  MODES_OF_TRANSPORT,
  DISTRICT_STATISTICS_TOTAL,
  DISTRICT_STATISTICS_WORK,
  DISTRICT_STATISTICS_EDUCATION,
  DISTRICT_SUMMARY,
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

const MapVisualizer = lazy(() =>
  import("./mapVisualizer" /* webpackChunkName: "MapVisualizer" */)
);

function MapExplorer({
  districtCode,
  educationData,
  workData,
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

  const [currentMap, setCurrentMap] = useState({
    code: districtCode,
    view: MAP_TYPES.COUNTRY,
    option:
      MAP_META[districtCode].mapType === MAP_TYPES.COUNTRY
        ? MAP_OPTIONS.TOTAL
        : MAP_OPTIONS.HOTSPOTS,
  });

  // What to display at the top
  const [currentMapStatistics, setCurrentMapStatistics] = useState(() => MODES_OF_TRANSPORT
  );

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
    if (regionHighlighted.cityName) {
      if (
        currentMap.code !== regionHighlighted.districtCode &&
        !(
          currentMapMeta.mapType === MAP_TYPES.COUNTRY &&
          currentMap.view === MAP_TYPES.COUNTRY
        )
      ) {
        const newMapMeta = MAP_META[regionHighlighted.districtCode];
        if (!newMapMeta) {
          return;
        }
        setCurrentMap({
          code: regionHighlighted.districtCode,
          view: MAP_TYPES.COUNTRY,
          option:
            currentMap.option === MAP_OPTIONS.PER_MILLION
              ? MAP_OPTIONS.TOTAL
              : currentMap.option,
        });
      }
    } else if (isCountryLoaded && currentMapMeta.mapType === MAP_TYPES.COUNTRY) {
      setCurrentMap({
        code: "NZ",
        view: MAP_TYPES.COUNTRY,
        option: currentMap.option,
      });
    }
  }, [
    isCountryLoaded,
    regionHighlighted.stateCode,
    regionHighlighted.districtName,
    currentMap.code,
    currentMap.option,
    currentMap.view,
    currentMapMeta.mapType,
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
  const panelState = useMemo(() => {
    const districtCode = regionHighlighted.districtCode
    const districtData = educationData[districtCode] || {};
    return produce(districtData, (draft) => {
      draft.state = CITY_NAMES[districtCode];
    });
  }, [
    educationData,
    regionHighlighted.districtCode,
    currentMap.view,
    currentMap.code,
  ]);

  const hoveredRegion = useMemo(() => {
    const hoveredData =
      (regionHighlighted.districtCode
        ? educationData[regionHighlighted.districtCode]?.districts?.[
            regionHighlighted.cityName
          ]
        : educationData[regionHighlighted.districtCode]) || {};
    return produce(hoveredData, (draft) => {
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
    switch (option) {
      case MAP_OPTIONS.TOTAL:
        setCurrentMap({
          code: currentMap.code,
          view: MAP_TYPES.COUNTRY,
          option: MAP_OPTIONS.TOTAL,
        });
        if (currentMapMeta.mapType === MAP_TYPES.COUNTRY)
          setRegionHighlighted({
            districtCode: regionHighlighted.districtCode,
            cityName: null,
          });
        return;
      case MAP_OPTIONS.WORK:
        // if (currentMapMeta.mapType === MAP_TYPES.COUNTRY) return;
        setCurrentMap({
          code: currentMap.code,
          view: MAP_TYPES.COUNTRY,
          option: MAP_OPTIONS.WORK,
        });
        setRegionHighlighted({
          districtCode: regionHighlighted.districtCode,
          cityName: null,
        });
        return;
      case MAP_OPTIONS.EDUCATION:
        setCurrentMap({
          code: currentMap.code,
          view: MAP_TYPES.COUNTRY,
          option: MAP_OPTIONS.EDUCATION,
        });
        return;
      default:
        return;
    }
  };

  const springs = useSprings(
    currentMapStatistics.length,
    currentMapStatistics.map((statistic) => ({
      total: getStatistic(panelState, "total", statistic),
      delta: getStatistic(panelState, "delta", statistic),
      from: {
        total: getStatistic(panelState, "total", statistic),
        delta: getStatistic(panelState, "delta", statistic),
      },
      config: {
        tension: 500,
        clamp: true,
      },
    }))
  );

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
          <PinIcon />
        </div>
      )}

      {/* <div className="header">
        <h1>
          {currentMap.code === "NZ"
            ? t("Commuting in ")
            : t(CITY_NAMES[currentMap.code])}{" "}
          {t("New Zealand")}
        </h1>
        <h6>
          {t("{{action}} over a {{mapType}} for more details", {
            action: t(window.innerWidth <= 769 ? "Tap" : "Hover"),
            mapType: t(
              currentMapMeta.mapType === MAP_TYPES.COUNTRY
                ? "Regional District"
                : "Regional District"
            ),
          })}
        </h6>
      </div> */}

      {/* The numbers at the top */}
      <div className="map-stats">
        {currentMapStatistics.map((statistic, index) => (
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
              {statistic !== "tested" && statistic !== "active" && (
                <animated.h6>
                  {springs[index].delta.interpolate((delta) =>
                    delta > 0 ? `+${formatNumber(Math.floor(delta))}` : "\u00A0"
                  )}
                </animated.h6>
              )}
              {statistic === "tested" && (
                <h6>
                  {panelState?.total?.tested &&
                    t("As of {{date}}", {
                      date: formatDate(
                        panelState.meta.tested["last_updated"],
                        "dd MMM"
                      ),
                    })}
                </h6>
              )}
            </div>
            {statistic === "tested" && panelState?.total?.tested && (
              <a href={panelState.meta.tested.source} target="_noblank">
                <Icon.Link />
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="meta">
        {currentMapMeta.mapType === MAP_TYPES.DISTRICT && (
          <div
            className="map-button"
            onClick={() => history.push(`district/${currentMap.code}`)}
          >
            {t("Visit state page")}
            <Icon.ArrowRightCircle />
          </div>
        )}

        {currentMapMeta.mapType !== MAP_TYPES.DISTRICT &&
          panelState?.meta?.["last_updated"] && (
            <div className="last-update">
              <h6>{t("Last updated")}</h6>
              <h3>
                {`${formatLastUpdated(panelState.meta["last_updated"])} ${t(
                  "ago"
                )}`}
              </h3>
            </div>
          )}

        <h2
          className={classnames(mapStatistic, {
            [hoveredRegion?.zone]: currentMap.option === MAP_OPTIONS.HOTSPOTS,
          })}
        >
          {t(hoveredRegion.name)}
          {hoveredRegion.name === UNKNOWN_DISTRICT_KEY &&
            ` (${t(CITY_NAMES[regionHighlighted.districtCode])})`}
        </h2>

        {currentMapMeta.mapType === MAP_TYPES.DISTRICT && (
          <div className="map-button" onClick={() => switchMap("NZ")}>
            {t("Back")}
          </div>
        )}

        {currentMap.option !== MAP_OPTIONS.ZONES &&
          ((currentMap.view === MAP_TYPES.COUNTRY &&
            regionHighlighted.cityName) ||
            (currentMap.view === MAP_TYPES.DISTRICT &&
              currentMap.option !== MAP_OPTIONS.TOTAL)) && (
            <h1 className={classnames("district", mapStatistic)}>
              {formatNumber(
                getStatistic(
                  hoveredRegion,
                  "total",
                  mapStatistic,
                  currentMap.option === MAP_OPTIONS.PER_MILLION
                    ? hoveredRegion.population_millions
                    : 1
                )
              )}
              <br />
              <span>
                {t(mapStatistic)}
                {currentMap.option === MAP_OPTIONS.PER_MILLION &&
                  ` ${t("per million")}`}
              </span>
            </h1>
          )}
      </div>

      <div ref={mapExplorerRef}>
        {/* {console.log(workMapData)} */}
        {mapStatistic && (
          <Suspense
            fallback={
              <MapVisualizerLoader
                className="map-loader"
                {...{
                  width: mapExplorerRef.current?.clientWidth,
                  statistic: mapStatistic,
                }}
              />
            }
          >
            <MapVisualizer
              currentMap={currentMap}
              data={data}
              // workMapData={workMapData}
              // educationMapData={educationMapData}
              changeMap={switchMap}
              regionHighlighted={regionHighlighted}
              setRegionHighlighted={setRegionHighlighted}
              statistic={mapStatistic}
              isCountryLoaded={isCountryLoaded}
            />
          </Suspense>
        )}
      </div>

      <div className="tabs-map">
        {Object.values(MAP_OPTIONS).map((option) => (
          <div
            key={option}
            className={classnames("tab", {
              focused: currentMap.option === option,
            })}
            onClick={() => handleTabClick(option)}
          >
            <h4>
              {t(option)}
              {/* {option === MAP_OPTIONS.EDUCATION && <sup>&dagger;</sup>} */}
            </h4>
          </div>
        ))}
      </div>

      <h6 className={classnames("footnote")}>
        &dagger; {`${t("Based on 2018 Census by NZ Statistics, see ")}`}
        <a
          href="https://datafinder.stats.govt.nz/data/category/census/2018/commuter-view/?_ga=2.217129552.794612537.1592401476-705599149.1592401476"
          target="_noblank"
          style={{ color: "#6c757d" }}
        >
          {t("source")}
        </a>
      </h6>
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
