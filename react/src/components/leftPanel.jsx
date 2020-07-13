import React, {useState, lazy, Suspense} from 'react';
import {Link} from 'react-router-dom';
import './leftPanel.scss';
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { useSprings, useSpring, animated } from "react-spring";
import help from '../assets/help_white.svg';
import Destination from './destination.js';

import {
    MAP_OPTIONS,
    MODES_OF_TRANSPORT,
} from '../constants'
import {
    formatNumber, 
    capitalize,
    getStatistic,
} from '../utils/commonFunctions'
import { useEffect } from 'react';

const SearchBar = lazy(() => import('./searchbar'));

function LeftPanel({
    hoveredRegion,
    hoveredData,
    highlightedData,
    centroidData,
    destinationData,
    currentDestinationData
}){
    // console.log(destinationData)
    const { t } = useTranslation();

    const [currentMapStatistics, setCurrentMapStatistics] = useState(MODES_OF_TRANSPORT);

    const [currentCommuteType, setCurrentCommuteType] = useState("Total");
    
    const spring = useSpring({
      // This is the default to: value
      // count: Math.floor(Math.random() * 100),
      count: Math.floor(hoveredData.hoveredData.COUNT) || 0,
      from: {
          count: Math.floor(hoveredData.hoveredData.COUNT) || 0,
      },
      config: {
        tension: 500,
        clamp: true,
        duration: 350,
      }
    })

    // console.log(Math.floor(hoveredData.hoveredData.HAVERSINE_DISTANCE))
    const km = useSpring({
      distance: Math.floor(hoveredData.hoveredData.HAVERSINE_DISTANCE) || 0,
      from: {
        distance: Math.floor(hoveredData.hoveredData.HAVERSINE_DISTANCE) || 0,
      },
      config: {
        tension: 500,
        clamp: true,
        duration: 350,
      }
    })

    useEffect(()=>{
      // console.log('currentDestinationData updated: ', currentDestinationData);
      // console.log(destinationData);
    }, [currentDestinationData])
    
    return(
        <div className="LeftPanel">
            <div className="title"> 
                <Link to="/">
                    Commute
                    <span> New Zealand</span>
                </Link>
            </div>

            <Suspense fallback={<div></div>}>
                <SearchBar 
                  centroidData={centroidData}
                />
            </Suspense>

            <div className="meta">
            <h2 className={classnames("total")}>

              <div>
                {t("From ")}
                {/* {t(hoveredRegion.name)} */}
                {hoveredData.hoveredData.DEPARTURE_NAME_1}
                {hoveredData.hoveredData.departure_SA22018_V1_NAME && hoveredData.hoveredData.departure_SA22018_V1_NAME.length ? ", " : ""}
                {t(hoveredData.hoveredData.departure_SA22018_V1_NAME)}
                <div>
                  {t("To ")}
                  {hoveredData.hoveredData.DESTINATION_NAME_1}
                  {/* {hoveredData.hoveredDestination} */}
                  { hoveredData.hoveredData.DESTINATION_NAME_1 //Or, use DESTINATION_NAME_2
                  //hoveredData.hoveredDestination.length 
                    ? ", "
                    : ""  
                  }
                  {hoveredData.hoveredData.destination_SA22018_V1_NAME}
                </div>

                <Destination 
                  obj={destinationData[currentDestinationData.from]}
                  type="from"
                />
                <Destination 
                  obj={destinationData[currentDestinationData.to]}
                  type="to"
                />
              </div>
              
              <div style={{alignSelf: "center"}}>
                {/* {!isNaN(Number(hoveredData.hoveredData.HAVERSINE_DISTANCE))
                  ? Number(hoveredData.hoveredData.HAVERSINE_DISTANCE).toFixed(2) + "km"
                  : ""
                } */}
                <animated.h1>
                  {km.distance.interpolate((distance) => 
                        // !isNaN(distance) ? distance.toFixed(2) + "km" : ""
                        distance.toFixed(2).toString() + "km"
                  )}
                </animated.h1>
              </div>
            </h2>
          </div>
          <div className="map-stats">
            <div
                  // key={statistic}
                  // className={classnames("stats", statistic, {
                  //   focused: statistic === currentCommuteType,
                  // })}
                  // onClick={() => clickedCommuteType(statistic)}
                >
              {/* <h5>{t(capitalize(statistic))}</h5> */}
              <div className="stats-bottom">
                {(hoveredData.hoveredData.COMMUTE_TYPE || "")
                  .replace(/[_]/g,' ')
                  .toLowerCase()
                  .charAt(0)
                  .toUpperCase()
                  + 
                  (hoveredData.hoveredData.COMMUTE_TYPE || "")
                    .replace(/[_]/g,' ')
                    .substring(1)
                    .toLowerCase()
                }
                <animated.h1>
                  {/* {spring.count.interpolate((count) => 
                    formatNumber(Math.floor(count))
                  )} */}
                  {spring.count.interpolate((count) => 
                      count > 0
                      ? Math.floor(count).toFixed() + " people"//" commutes"
                      : ""
                  )
                  // {spring.count 
                  // ? spring.count + " Commute"
                  // : ""
                  }
                </animated.h1>
                <h2>
                  {
                    hoveredData.hoveredData.TYPE 
                    ? "Commuting for "
                    : ""
                  }
                  {(hoveredData.hoveredData.TYPE || "")
                    .charAt(0)
                  + (hoveredData.hoveredData.TYPE || "")
                    .substring(1)
                    .toLowerCase()
                  }
                </h2>
              </div>
            </div>
          </div>

          <div className="about-wrapper">
            <Link to="/about">
              <img src={help} alt="" />
            </Link>
          
            <h6 className={classnames("footnote")}>
              &dagger; {`${t("Based on 2018 Census by NZ Statistics, see ")}`}
              <a
                  href="https://datafinder.stats.govt.nz/data/category/census/2018/commuter-view/?_ga=2.217129552.794612537.1592401476-705599149.1592401476"
                  target="_noblank"
                  style={{ color: "#6c757d" }}
              >
                  {t("source")}
              </a>
              <br/>
              {t("Locations have been approximated to protect user privacy")}
            </h6>
          </div>
        </div>
    )
}

export default LeftPanel;

/*
<div>{currentMapStatistics.map((statistic, index) => (
  <div
    key={statistic}
    className={classnames("stats", statistic, {
      focused: statistic === currentCommuteType,
    })}
    onClick={() => clickedCommuteType(statistic)}
  >
    <h5>{t(capitalize(statistic))}</h5>
    <div className="stats-bottom">
      {hoveredData.hoveredData.COMMUTE_TYPE}
      <animated.h1>
        {springs[index].total.interpolate((total) =>
          formatNumber(Math.floor(total))
        )}
        {spring.count.interpolate((count) => 
          formatNumber(Math.floor(count))
        )}
      </animated.h1>
    </div>
  </div>
))}
</div>
*/