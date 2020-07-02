import React, {useState, lazy, Suspense} from 'react';
import {Link} from 'react-router-dom';
import './leftPanel.scss';
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { useSprings, animated } from "react-spring";
import help from '../assets/help_white.svg';

import {
    MAP_OPTIONS,
    MODES_OF_TRANSPORT,
} from '../constants'
import {
    formatNumber, 
    capitalize,
    getStatistic,
} from '../utils/commonFunctions'

const SearchBar = lazy(() => import('./searchbar'));

function LeftPanel({
    hoveredRegion,
    hoveredData,
    highlightedData,
}){
    const { t } = useTranslation();

    const [currentMapStatistics, setCurrentMapStatistics] = useState(MODES_OF_TRANSPORT);

    const [currentCommuteType, setCurrentCommuteType] = useState("Total");

    const springs = useSprings(
        currentMapStatistics.length,
        currentMapStatistics.map((statistic) => ({
          total: getStatistic(hoveredData.hoveredData, statistic),
          delta: 64,
          from: {
            total: 128,
            delta: 23,
          },
          config: {
            tension: 500,
            clamp: true,
          },
        }))
    );

    const clickedCommuteType = (commuteType) => {
        console.log(commuteType);
    }
    
    return(
        <div className="LeftPanel">
            <div className="title"> 
                <Link to="/">
                    Commuting in
                    <span> New Zealand</span>
                </Link>
            </div>

            <Suspense fallback={<div></div>}>
                <SearchBar />
            </Suspense>

            <div className="meta">
            <h2 className={classnames("total")}>

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
            {/* <div>
              {Object.keys(highlightedData || {}).map((statistic, index) => (
                <div key={index}>
                  {statistic}
                  ,
                  {highlightedData[statistic]}
                </div>
                )
              )
              }
            </div> */}
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
                    <animated.h1>
                      {springs[index].total.interpolate((total) =>
                        formatNumber(Math.floor(total))
                      )}
                    </animated.h1>
                  </div>
                </div>
              ))}
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

export default LeftPanel