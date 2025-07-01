import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white w-screen h-[300px] flex justify-center items-center shadow-2xl shadow-gray-200">
      <div className="w-[890px] h-[75px] px-6 rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)] flex items-center justify-between mb-40">
        
        {/* Left: Logo */}
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="h-[60px] w-auto" />
        </Link>

        {/* Center: Menu */}
        <div className="flex gap-x-8 text-[16px] font-semibold text-gray-800 whitespace-nowrap gap-x-12">
          <Link to="/">Home</Link>
          <Link to="/find-jobs">Find Jobs</Link>
          <Link to="/find-talents">Find Talents</Link>
          <Link to="/about">About us</Link>
          <Link to="/testimonials">Testimonials</Link>
        </div>

        {/* Right: Button */}
        <Link
          to="/createjob"
          className="bg-gradient-to-b from-purple-500 to-purple-900 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition whitespace-nowrap"
        >
          Create Jobs
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
