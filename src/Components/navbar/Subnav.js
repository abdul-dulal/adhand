import React, { useState } from "react";
import Modalmenu from "./Modalmenu";
import { TbMenu2 } from "react-icons/tb";
import logo from "../../assets/img/icon/logo2.png";
const Subnav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="container md:hidden  flex justify-between pt-8">
      <div>
        {" "}
        <img src={logo} alt="" />
      </div>
      <div className="">
        {menu ? (
          ""
        ) : (
          <TbMenu2
            className="cursor-pointer text-3xl"
            onClick={() => setMenu(true)}
          />
        )}
        {menu ? <Modalmenu setMenu={setMenu} /> : ""}
      </div>
    </div>
  );
};

export default Subnav;
