import React from "react";
import star from "../../assets/img/star.png";
import fbicon from "../../assets/img/icon/Clip path group.png";
import alert from "../../assets/img/icon/alert.png";
import { CiDollar } from "react-icons/ci";
import { TfiAngleDown } from "react-icons/tfi";
import file from "../../assets/img/icon/Group.png";
import fbround from "../../assets/img/icon/fbround.png";
import instagram from "../../assets/img/icon/insta.png";
const Hero = () => {
  return (
    <div className="container flex gap-24">
      <div className="max-w-[550px] w-full ">
        <h1 className="text-black text-[53px] font-bold  font-evolventa not-italic leading-[70px] tracking-normal">
          Profitable
          <br /> payment for
          <br /> advertising in social
          <br /> networks
        </h1>
      </div>
      <div
        className=""
        style={{
          // background: `url(${star})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex gap-16">
          <div>
            <div className="flex justify-end mt-2">
              <img src={fbicon} className="" alt="" />
            </div>
            <div className="flex items-center justify-center relative top-3 z-50  ">
              <div className="w-9 h-9 bg-[#F54C5A] rounded-full flex items-center justify-center">
                <img src={alert} alt="" />
              </div>
              <div className="bg-[#F99098] w-24 h-6 rounded-full flex  justify-center   -ml-3 -z-50">
                <p className="text-white">Safe Start</p>
              </div>
            </div>
            <div className="bg-white w-[320px] shadow-lg px-7 py-9 ">
              <h1 className="text-xl font-evolventa font-extrabold">
                By complete task, you increse the protection level
              </h1>
              <div className="flex justify-between mt-5">
                <p>Tasks complete</p>
                <p>22/30</p>
              </div>
              <div className=" h-3 w-full bg-gray-300 rounded-full mt-[6px]">
                <p className="bg-[#F4A72D] w-5/6 h-full rounded-full"></p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center relative top-3 z-50 ">
              <div className="w-9 h-9 bg-[#603AC7] rounded-full flex items-center justify-center">
                <img src={file} alt="" />
              </div>
              <div className="bg-[#603AC7] w-24 h-6 rounded-full   -ml-3 -z-50">
                <p className="text-white flex justify-center -mt-[2px]">
                  Payment
                </p>
              </div>
            </div>
            <div className="bg-white w-[400px] shadow-lg pt-9 pb-3 px-4">
              <div>
                <div className=" grid grid-cols-2 justify-between gap-3">
                  <div>
                    <p className="mb-1 text-[#555D67]">Source</p>
                    <div className="flex px-2  justify-between  shadow border items-center">
                      <CiDollar size={25} />
                      <div>
                        <p className="text-[#2E2E2E]">20,150.00 $</p>
                        <p className="text-[#87909B] -mt-2 ">balance</p>
                      </div>
                      <div className="h-5 w-5 bg-[#F5F6F7] rounded flex justify-center items-center">
                        <TfiAngleDown />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-[#555D67]">Destination</p>
                    <div className="flex px-2 justify-between  shadow border items-center">
                      <img src={fbround} className="h-[22px] w-[22px]" alt="" />
                      <div>
                        <p className="text-[#2E2E2E]">20,150.00 $</p>
                        <p className="text-[#87909B] -mt-2">ID 1414444</p>
                      </div>
                      <div className="h-5 w-5 bg-[#F5F6F7] rounded flex justify-center items-center">
                        <TfiAngleDown />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-[#555D67] text-sm font-arial">
                    Amaount to transfer
                  </label>
                  <input
                    type="text"
                    className="w-full h-12 px-3 mt-1 rounded focus:outline-none bg-[#F5F6F7]"
                    placeholder="Enter Amaount"
                    id=""
                  />
                  <button
                    type="submit"
                    className=" w-full bg-[#F5F6F7] h-12 text-center mt-6 mb-2"
                  >
                    Transfer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={instagram} alt="" />
          <div className="h-16 w-16 ring rounded-full ring-[#E1E5EA] ">
            <div className=" border border-[#9E4FF1]  w-4 rounded-full">
              <h1>87%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
