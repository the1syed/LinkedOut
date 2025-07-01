import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { assets, menuLinks } from "../assets/assets";

const Navbar = (setShowCreateJobs) => {
  

  const [salary, setSalary] = useState(50); // One slider value

  return (
    <div className="bg-white w-screen flex flex-col items-center shadow-2xl shadow-gray-200 py-8">
      {/* Top Navigation Bar */}
      <div className="w-[890px] h-[75px] px-6 rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)] flex items-center justify-between">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="h-[60px] w-auto" />
        </Link>

        <div className="flex gap-x-11 text-[16px] font-medium text-gray-800 whitespace-nowrap">
          {menuLinks.map((link, index) => (
            <Link key={index} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          to="/createJobs"
          className="bg-gradient-to-b from-purple-500 to-purple-900 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition whitespace-nowrap"
        >
          Create Jobs
        </Link>
      </div>

      {/* Filter Row */}
      <div className="w-[890px] mt-8 flex items-center justify-between gap-4 text-sm text-gray-500 font-medium">
        {/* Search Input */}
        <div className="flex items-center gap-2 bg-transparent !border-none">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="outline-none !border-none bg-transparent placeholder-gray-400"
          />
        </div>

        <span className="text-gray-100 text-[40px]">|</span>

        {/* Preferred Location */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-400" />
          <select className=" bg-transparent text-gray-500 !border-none">
            <option className="text-black">Preferred Location</option>
            <option>Noida</option>
            <option>Bangalore</option>
            <option>Remote</option>
          </select>
        </div>

        <span className="text-gray-100 text-[40px]">|</span>

        {/* Job Type */}
        <div className="flex items-center gap-2">
          <FaUser className="text-gray-400" />
          <select className="outline-none bg-transparent text-gray-500 !border-none">
            <option className="text-black">Job type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
          </select>
        </div>

        <span className="text-gray-100 text-[40px]">|</span>

        {/* Salary (Single Slider) */}
        <div className="flex flex-col text-gray-500">
          <span className="mb-1 text-xs font-black">Salary Per Month</span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="100"
              value={salary}
              onChange={(e) => setSalary(+e.target.value)}
              className="w-40 accent-black"
            />
            <span>₹{salary}k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
