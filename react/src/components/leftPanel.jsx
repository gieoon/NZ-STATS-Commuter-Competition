import React, {useState, lazy, Suspense} from 'react';
import {Link} from 'react-router-dom';
import './leftPanel.scss';
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { useSprings, useSpring, animated } from "react-spring";
import useStickySWR from "../hooks/useStickySwr";
import help from '../assets/help_white.svg';
import Destination from './destination.js';
import DestinationPopup from './destinationPopup.js';
import { fetcherJSON } from "../utils/commonFunctions";
import {
    MAP_OPTIONS,
    MODES_OF_TRANSPORT,
    DATA_URL_ROOT,
    COMMUTE_METHOD_2_DISPLAY,
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
    allCentroidDestinations,
    currentDestinationData,
    clickedData,
}){
    const { t } = useTranslation();

    const [currentMapStatistics, setCurrentMapStatistics] = useState(MODES_OF_TRANSPORT);

    const [currentCommuteType, setCurrentCommuteType] = useState("Total");
    
    const [destinationPopupData, setDestinationPopupData] = useState({
      name1: "",
      name: "",
      data: [],
    })

    const [showDestinationPopup, setShowDestinationPopup] = useState(false);

    const { data: destinationData } = useStickySWR(
      DATA_URL_ROOT + '/destinations',
      fetcherJSON,
      {
        revalidateOnMount: true,
        revalidateOnFocus: true
      }
    )
    // console.log('destinationData: ', destinationData)

    const spring = useSpring({
      // This is the default to: value
      // count: Math.floor(Math.random() * 100),
      count: Math.floor(clickedData.COUNT) || 0,
      from: {
          count: Math.floor(clickedData.COUNT) || 0,
      },
      config: {
        tension: 500,
        clamp: true,
        duration: 350,
      }
    })

    // console.log(Math.floor(hoveredData.hoveredData.HAVERSINE_DISTANCE))
    const km = useSpring({
      distance: Math.floor(clickedData.HAVERSINE_DISTANCE) || 0,
      from: {
        distance: Math.floor(clickedData.HAVERSINE_DISTANCE) || 0,
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

    // useEffect(()=>{
    //   console.log('destination data changed: ', destinationData);
    // }, [destinationData])

    const updateDestinationPopup = (destination1, destination) => {
      // console.log('showing destination: ', destination, destinationData[destination])
      if(!destinationData || !destinationData[destination]) 
        return;
      // global.destinationData = destinationData;
      var d = Object.keys(destinationData[destination])
        .filter(f => {
          return (
            (Number(destinationData[destination][f]) > 0 
            || (f.includes('common') && destinationData[destination][f] !== "-990")
            ) 
            && (!f.includes('home') && !f.includes('total')))
        })
        .map((key) => [key, destinationData[destination][key]])
      // console.log(d)
      setDestinationPopupData({
        name1: destination1,
        name: destination,
        //data: Object.entries(destinationData[destination]),
        data: d,
      })
      setShowDestinationPopup(true);
    }
    // console.log("clickedData: ", clickedData);
    
    return(
        <div className="LeftPanel">
          <div className="inner">
            <div className="title"> 
              <div className="stats-link">
                <Link to="/stats">
                  View more stats
                </Link>
              </div>
              <Link to="/">
                <span>New Zealand </span>
                Commute  
              </Link>
            </div>

            <Suspense fallback={<div></div>}>
                <SearchBar 
                  allCentroidDestinations={allCentroidDestinations}
                />
            </Suspense>

            <div className="map-stats">
              <div
                    // key={statistic}
                    // className={classnames("stats", statistic, {
                    //   focused: statistic === currentCommuteType,
                    // })}
                    // onClick={() => clickedCommuteType(statistic)}
                  >
                {/* <h5>{t(capitalize(statistic))}</h5> */}
                
              </div>
            </div>

            {/* <div style={{height:"16px"}}></div> */}
            <Suspense fallback={<div></div>}>
              <div className="meta">
                {
                  clickedData.departure_SA22018_V1_NAME && clickedData.departure_SA22018_V1_NAME.length
                  ? <h2 className={classnames("total",clickedData.COMMUTE_TYPE)}>
                      <div>
                        {t("From ")}
                        {clickedData.DEPARTURE_NAME_1}
                        {clickedData.departure_SA22018_V1_NAME && clickedData.departure_SA22018_V1_NAME.length ? ", " : ""}
                        <div className="destination-link"
                          onClick={()=>{updateDestinationPopup(clickedData.DEPARTURE_NAME_1, clickedData.departure_SA22018_V1_NAME)}}
                        >{t(clickedData.departure_SA22018_V1_NAME)}</div>
                        <div style={{marginTop:"8px"}}>
                          {t("To ")}
                          {clickedData.DESTINATION_NAME_1}
                          { clickedData.DESTINATION_NAME_1 //Or, use DESTINATION_NAME_2
                          //hoveredData.hoveredDestination.length 
                            ? ", "
                            : ""  
                          }
                          <div className="destination-link"
                            onClick={()=>{updateDestinationPopup(clickedData.DESTINATION_NAME_1, clickedData.destination_SA22018_V1_NAME)}}
                          >{clickedData.destination_SA22018_V1_NAME}</div>
                        </div>

                        {/* { destinationData
                          ? <div>
                            <Destination 
                              obj={destinationData[currentDestinationData.from]}
                              type="from"
                            />
                            <Destination 
                              obj={destinationData[currentDestinationData.to]}
                              type="to"
                            />
                          </div>
                          : ""
                        } */}
                      </div>
                    
                      
                      <div style={{alignSelf: "center"}}>
                        <animated.h1>
                          {km.distance.interpolate((distance) => 
                                // !isNaN(distance) ? distance.toFixed(2) + "km" : ""
                                Number(distance).toFixed(2).toString() + "km"
                          )}
                        </animated.h1>
                      </div>
                    </h2>
                  : ""
                }
                
              </div>
            </Suspense>

            <div className="stats-bottom">
              
              <animated.h1 className={classnames(clickedData.COMMUTE_TYPE)}>
                {spring.count.interpolate((count) => 
                  count > 0
                  ? Math.floor(count).toFixed() + " people"//" commutes"
                  : ""
                )}
              </animated.h1>
              <h2 className={classnames(clickedData.COMMUTE_TYPE)}>
                {
                  clickedData.TYPE 
                  ? "Commuting for "
                  : ""
                }
                {(clickedData.TYPE || "")
                  .charAt(0)
                + (clickedData.TYPE || "")
                  .substring(1)
                  .toLowerCase()
                }
                <br/>
                {COMMUTE_METHOD_2_DISPLAY[clickedData.COMMUTE_TYPE]}
              </h2>
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

          <DestinationPopup
            open={showDestinationPopup}
            setOpen={setShowDestinationPopup}
            name1={destinationPopupData.name1}
            name={destinationPopupData.name}
            data={destinationPopupData.data}
          />
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

/*


          <Suspense fallback={<div></div>}>
            <div className="meta">
              <h2 className={classnames("total")}>
                <div>
                  {t("From ")}
                  {hoveredData.hoveredData.DEPARTURE_NAME_1}
                  {hoveredData.hoveredData.departure_SA22018_V1_NAME && hoveredData.hoveredData.departure_SA22018_V1_NAME.length ? ", " : ""}
                  {t(hoveredData.hoveredData.departure_SA22018_V1_NAME)}
                  <div>
                    {t("To ")}
                    {hoveredData.hoveredData.DESTINATION_NAME_1}
                    { hoveredData.hoveredData.DESTINATION_NAME_1 //Or, use DESTINATION_NAME_2
                    //hoveredData.hoveredDestination.length 
                      ? ", "
                      : ""  
                    }
                    {hoveredData.hoveredData.destination_SA22018_V1_NAME}
                  </div>

                  { destinationData
                    ? <div>
                      <Destination 
                        obj={destinationData[currentDestinationData.from]}
                        type="from"
                      />
                      <Destination 
                        obj={destinationData[currentDestinationData.to]}
                        type="to"
                      />
                    </div>
                    : ""
                  }
                </div>
              
                
                <div style={{alignSelf: "center"}}>
                  {!isNaN(Number(hoveredData.hoveredData.HAVERSINE_DISTANCE))
                    ? Number(hoveredData.hoveredData.HAVERSINE_DISTANCE).toFixed(2) + "km"
                    : ""
                  }
                  <animated.h1>
                    {km.distance.interpolate((distance) => 
                          // !isNaN(distance) ? distance.toFixed(2) + "km" : ""
                          distance.toFixed(2).toString() + "km"
                    )}
                  </animated.h1>
                </div>
              </h2>
            </div>
          </Suspense>
*/

/*
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
                    {spring.count.interpolate((count) => 
                      count > 0
                      ? Math.floor(count).toFixed() + " people"//" commutes"
                      : ""
                  )
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

*/