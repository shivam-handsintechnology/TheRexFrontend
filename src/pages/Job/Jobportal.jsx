import React from 'react'
import Jobbanner from './Jobbanner'
import "./Job.css";
import Jobcounter from './Jobcounter';
import Latestcompanies from './Latestcompanies';
import Jobsteps from './Jobsteps';
import Jobcloud from './Jobcloud';
import { useGetUserMenuQuery } from '@/redux/apiSlice';

const Jobportal = () => {
  const { data } = useGetUserMenuQuery()
  return (
    <div>
      <Jobbanner />
      <Jobcloud />
      <Jobcounter />
      <Jobsteps />
      <Latestcompanies />
    </div>
  )
}

export default Jobportal
