import React from "react";
import Note from "../shere/Note";
import addImg from "../../assets/img/Clip path group (1).png";
import addbg from "../../assets/img/Vector (2).png";
const Ads = () => {
  return (
    <div className="container">
      <div className="max-w-[1270px] pt-16 grid lg:grid-cols-2 grid-cols-1 gap-20 items-center">
        <div>
          <p className="text-[#F4A72D] text-base font-inter font-medium uppercase">
            SAFE START
          </p>
          <h1 className="lg:text-4xl md:text-[24px] text-[27px]    font-evolventa font-bold tracking-[0.01em] mt-4">
            Running ads by all the rules <br /> and without blocking
          </h1>
          <button className=" bg-[#EEE8FE] h-[51px] w-full text-base font-arial text-[#6446B0] font-semibold my-6">
            Blocks are 70% less likely with AdHand
          </button>
          <Note text="We'll check your ads before you run them" />
          <Note text="We'll tell you how to fix the ads for fast unlocking" />
          <Note text="Real-time advice in English" />
          <Note text="We'll explain in simple words Meta's requirements for the advertiser" />
        </div>
        <div className="relative">
          <div className="absolute top0 right-40 ">
            <img src={addbg} alt="" />
          </div>
          <img src={addImg} alt="" />
        </div>
      </div>
      <div className="flex justify-center my-24 gap-5">
        <button className="w-[177px] bg-[#F4A72D] h-12 rounded-[7px] text-base font-arial font-bold text-white">
          I want to connect
        </button>
        <button className="w-[177px] text-[#F4A72D] h-12 rounded-[7px] text-base font-arial font-bold  border border-[#F4A72D]">
          Need a consultation
        </button>
      </div>
    </div>
  );
};

export default Ads;
