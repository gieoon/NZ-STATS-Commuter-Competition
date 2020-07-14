import React, { useEffect } from "react";
import useStickySWR from '../hooks/useStickySwr';
import { fetcherJSON } from '../utils/commonFunctions';
import {
  DATA_URL_ROOT
} from '../constants'
import { Link } from 'react-router-dom';

export default function Statistics(props) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

  console.log(regionalWorkData);
  console.log(regionalEducationData);
  console.log(regionalTotalData);


  return (
    <div>
      <Link to="/">
        <span>New Zealand </span>
        Commute  
      </Link>
    </div>
  );
}
