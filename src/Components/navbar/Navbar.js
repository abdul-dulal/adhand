import React from "react";
import logo from "../../assets/img/Group 1.png";
const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center mt-[26px] mb-16 sticky top-0 z-50">
      <div className="flex justify-center items-center gap-[51px]">
        <img src={logo} alt="" />
        <ul className="flex gap-8 text-black font-arial font-normal text-sm">
          <li>Tools</li>
          <li>Platforms</li>
          <li>Client cases</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-[10px]">
          <button className="bg-[#F2F3F5] w-[102px] h-10 rounded-[7px] font-arial">
            Log in
          </button>
          <button className="bg-[#F4A72D] w-28 h-10 rounded-[7px] text-white font-bold">
            Sign up
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
