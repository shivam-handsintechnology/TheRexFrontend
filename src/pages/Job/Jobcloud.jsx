import { jobPortalApi } from '@/redux/apiSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactWordcloud from 'react-wordcloud';

const Jobcloud = () => {
  const dispatch = useDispatch()
  const [words, setWord] = useState([])
  // Fetch all industry data
  const fetchAllIndustries = async () => {
    let currentPage = 1;
    let allIndustryData = [];

    while (true) {
      const data = await dispatch(
        jobPortalApi.endpoints.getIndustryFilters.initiate({ page: currentPage, limit: 10 })
      ).unwrap();
      let arr = Array.isArray(data.data) ? data.data.map((item) => {
        return { text: item.label, value: item.totalJobs }
      }) : []
      allIndustryData = Array.from(new Set([...allIndustryData, ...arr]))

      if (!data.hasMore) break;

      currentPage = currentPage + 1
    }

    setWord(allIndustryData);
  };
  useEffect(() => {
    fetchAllIndustries()
  }, [])
  return (
    <div className='react-wordss'>
      {words.length > 0 && <ReactWordcloud words={words} />}
    </div>
  )
}

export default Jobcloud
