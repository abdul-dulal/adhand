import React, { useState } from "react";
import logo from "../../assets/img/Group 1.png";
import Subnav from "./Subnav";
const Navbar = () => {
  const [showNav, setShownav] = useState(false);
  const change = () => {
    if (window.scrollY >= 50) {
      setShownav(true);
    } else {
      setShownav(false);
    }
  };
  window.addEventListener("scroll", change);
  return (
    <div className="sticky top-0">
      <nav
        className={`bg-white h-20  py-4 md:block hidden  ${
          showNav ? "border-b-2" : ""
        }`}
      >
        <div className="container">
          <div className=" max-w-[1100px] flex justify-between items-center   z-50">
            <div className="flex justify-center items-center gap-[51px]">
              <img src={logo} alt="" />

              <ul className="flex gap-8 text-black font-arial font-normal text-sm cursor-pointer">
                <li>Tools</li>
                <li>Platforms</li>
                <li>Client cases</li>
              </ul>
            </div>
            <div className="">
              <ul className="flex gap-[10px] ">
                <button className="bg-[#F2F3F5] w-[102px] h-10 rounded-[7px] font-arial">
                  Log in
                </button>
                <button className="bg-[#F4A72D] w-28 h-10 rounded-[7px] text-white font-bold">
                  Sign up
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Subnav />
    </div>
  );
};

export default Navbar;
