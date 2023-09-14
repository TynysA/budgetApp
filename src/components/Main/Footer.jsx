import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../../style/components/Blocks.css";
import { CgProfile } from "react-icons/cg";
import { TbMoneybag } from "react-icons/tb";
function Footer() {
  const handeleAddAction = (event) => {
    console.log("add action");
  };
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__inner">
          <Link to={"/home"} className="footer__profile ">
            <CgProfile />
            <span>My Profile</span>
          </Link>
          <Link to={"/"} className="footer__profile ">
            <TbMoneybag />
            <span>Budget</span>
          </Link>
          <div onClick={handeleAddAction} className="footer__plus">
            <span>Add</span>
            <AiOutlinePlusCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
