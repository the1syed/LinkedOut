// JobCard.jsx
import React from "react";
import { PiSuitcaseSimple } from "react-icons/pi";
import { GoLocation } from "react-icons/go";
import { CiWallet } from "react-icons/ci";
import salaryIcon from '../assets/Salary.png'
import location from '../assets/Location.png'
import experience from '../assets/Experience.png'
import amazonLogo from '../assets/Amazon.png';
import teslaLogo from '../assets/Tesla.png';
import swiggyLogo from '../assets/Swiggy.png';

// Example company logos (replace with your own image imports or URLs)
const companyLogos = {
  amazon: amazonLogo,
  tesla: teslaLogo,
  swiggy: swiggyLogo,
};

const jobs = [
  {
    id: 1,
    company: "amazon",
    title: "Full Stack Developer",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
  },
  {
    id: 2,
    company: "tesla",
    title: "Node Js Developer",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
  },
  {
    id: 3,
    company: "swiggy",
    title: "UX/UI Designer",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
  },
  {
    id: 4,
    company: "amazon",
    title: "Full Stack Developer",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
  },
  {
    id: 5,
    company: "tesla",
    title: "Node Js Developer",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
  },
  {
    id: 6,
    company: "swiggy",
    title: "UX/UI Designer",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
  },
  {
    id: 7,
    company: "amazon",
    title: "Full Stack Developer",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
  },
  {
    id: 8,
    company: "tesla",
    title: "Node Js Developer",
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
  },
];

const JobCard = ({
  logo,
  title,
  exp,
  type,
  salary,
  posted,
}) => (
  <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3 border border-gray-100">
    <div className="flex items-center justify-between">
      <img src={logo} alt="Company Logo" 
      className="w-20 h-20" 
      />
      <span className="posted text-xs px-3 py-2 rounded-lg font-medium"> {posted}</span>
    </div>
    <div className="font-semibold text-lg mt-2">{title}</div>
    <div className="flex items-center text-gray-500 text-sm gap-6 mt-1">
      <span className="flex items-center text-nowrap font-semibold">
        <img src={experience}/> &nbsp;{exp}
      </span>
      <span className="flex items-center font-semibold">
        <img src={location}/> &nbsp;{type}
      </span>
      <span className="flex items-center font-semibold text-nowrap">
        <img src={salaryIcon}/> &nbsp; {salary} 
      </span>
    </div>
    <ul className="text-gray-600 text-sm list-disc pl-5 mt-2">
      <li>A user-friendly interface lets you browse stunning photos and videos</li>
      <li>Filter destinations based on interests and travel style, and create personalized</li>
    </ul>
    <button  className="mt-4 applynow hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">Apply Now</button>
  </div>
);

const JobGrid = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          logo={companyLogos[job.company]}
          title={job.title}
          exp={job.exp}
          type={job.type}
          salary={job.salary}
          posted={job.posted}
        />
      ))}
    </div>
  </div>
);

export default JobGrid;
