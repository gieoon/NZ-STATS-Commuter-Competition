import React, { lazy, useState, useRef, Suspense } from "react";
import { MAP_META, DATA_URL_ROOT } from "../constants";
// import axios from 'axios';
import { fetcher, fetcherJSON, fetcherDICT } from "../utils/commonFunctions";
import useStickySWR from "../hooks/useStickySwr";
import { useIsVisible } from "react-is-visible";
import { Helmet } from "react-helmet";

const MapExplorer = lazy(() =>
  import("./mapExplorer" /* webpackChunkName: "MapExplorer" */)
);

function Home(props) {
  const [mapStatistic, setMapStatistic] = useState("active");

  const [anchor, setAnchor] = useState(null);

  const [regionHighlighted, setRegionHighlighted] = useState({
    id: "NZ",
    regionalData: {},
    districtCode: "NZ", // Based on NAME_1
    cityName: null,
  });

  
  const { data: workData } = useStickySWR(
    DATA_URL_ROOT + "/work_csv",
    fetcher,
    {
      revalidateOnMount: true,
      // refreshInterval: 100000,
      revalidateOnFocus: false,
    }
  );

  const { data: educationData } = useStickySWR(
    DATA_URL_ROOT + "/education_csv",
    // 'https://api.covid19india.org/v3/min/timeseries.min.json',
    fetcher,
    {
      revalidateOnMount: true,
      // refreshInterval: 100000,
      revalidateOnFocus: false,
    }
  );
  

  const { data: regionalWorkData } = useStickySWR(
    DATA_URL_ROOT + '/work_regional_data',
    fetcherJSON,
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
    }
  )

  const { data: regionalEducationData } = useStickySWR(
    DATA_URL_ROOT + '/education_regional_data',
    fetcherJSON,
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
    }
  )

  const { data: regionalTotalData } = useStickySWR(
    DATA_URL_ROOT + '/total_regional_data',
    fetcherJSON,
    {
      revalidateOnMount: true,
      revalidateOnFocus: false
    }
  )

  const { data: centroidData } = useStickySWR(
    DATA_URL_ROOT + '/centroidData',
    fetcherDICT,
    {
      revalidateOnMount: true,
      revalidateOnFocus: false
    }
  )

  const { data: destinationData } = useStickySWR(
    DATA_URL_ROOT + '/destinations',
    fetcherJSON,
    {
      revalidateOnMount: true,
      revalidateOnFocus: false
    }
  )

  const nzMap = useRef();
  const isVisible = useIsVisible(nzMap, { once: true });

  // const stateCodes = [
  //   "NZ",
  //   ...[
  //     ...new Set([
  //       ...Object.keys(MAP_META).filter((districtCode) => districtCode !== "NZ"),
  //       ...Object.keys(educationData || {}).filter(
  //         (districtCode) => districtCode !== "NZ"
  //       ),
  //     ]),
  //   ].sort(),
  // ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Visualization of Commuter Data - NZ Stats</title>
        <meta
          name="title"
          content="Visualization of Commuter Data - New Zealand Statistics"
        />
      </Helmet>
      <div className="Home">
        {/* {console.log(regionalEducationData)} */}
        {/* {console.log("centroidData: ", centroidData)} */}
        {/* <LeftPanel /> */}
        <div className="home-right" ref={nzMap}>
          {isVisible && (
            <React.Fragment>
              {educationData && workData && (
                <Suspense fallback={<div />}>
                  <MapExplorer
                    districtCode="NZ"
                    {...{ educationData }}
                    {...{ workData }}
                    {...{ regionalWorkData }}
                    {...{ regionalEducationData }}
                    {...{ regionalTotalData }}
                    {...{ centroidData }}
                    {...{ destinationData }}
                    {...{ mapStatistic, setMapStatistic }}
                    {...{ regionHighlighted, setRegionHighlighted }}
                    {...{ anchor, setAnchor }}
                  />
                </Suspense>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

// // WORK = 50870 rows
// // EDUCATION = 22430 rows
// axios.get(DATA_URL_ROOT + '/work_csv')
//     .then((res) => {
//         const csv = this.getCSVFromText(res.data);
//         // console.log('WORK DATA: ', csv);
//         console.log('WORK DATA: ', csv.length);
//     });

//     axios.get(DATA_URL_ROOT + '/education_csv')
//     .then((res) => {
//         const csv = this.getCSVFromText(res.data);
//         // console.log('EDUCATION DATA: ', csv);
//         console.log('EDUCATION DATA: ', csv.length);
//         console.log(csv[1]);
//     });
// }
