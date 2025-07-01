import React, { useEffect, useState } from 'react';
import { JobGrid } from '../components/JobCard';
import amazonLogo from '../assets/Amazon.png';
import teslaLogo from '../assets/Tesla.png';
import swiggyLogo from '../assets/Swiggy.png';

const companyLogos = {
  amazon: amazonLogo,
  tesla: teslaLogo,
  swiggy: swiggyLogo,
};

function getJobsFromLocalStorage() {
  const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');
  return jobs.map(job => {
    const companyKey = job.company?.toLowerCase() || 'amazon';
    return {
      ...job,
      logo: companyLogos[companyKey] || amazonLogo,
      exp: job.exp || '1-3 yr Exp',
      type: job.jobType || 'Onsite',
      salary: job.salary || `${job.minSalary || ''} - ${job.maxSalary || ''}`,
      posted: job.posted || 'Just now',
    };
  });
}

const Home = ({ refreshFlag }) => {
  const [jobs, setJobs] = useState(getJobsFromLocalStorage());

  useEffect(() => {
    setJobs(getJobsFromLocalStorage());
  }, [refreshFlag]);

  return <JobGrid jobs={jobs} />;
};

export default Home;
