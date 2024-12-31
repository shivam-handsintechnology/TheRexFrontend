import React from 'react'
import Jobbanner from './Jobbanner'
import "./Job.css";
import Jobcounter from './Jobcounter';
import Latestcompanies from './Latestcompanies';
import Jobsteps from './Jobsteps';
import Jobcloud from './Jobcloud';

const Jobportal = () => {

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
