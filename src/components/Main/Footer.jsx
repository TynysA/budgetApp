import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../../style/components/Blocks.css";
import { CgProfile } from "react-icons/cg";
import { TbMoneybag } from "react-icons/tb";
function Footer() {
  const [close, setClose] = useState(false);
  const handeleAddAction = (event) => {
    const actions = document.querySelector(".actions");
    if (actions === null) {
      return;
    }
    const footer__plus = document.querySelector(".footer__plus");
    console.log(footer__plus);
    if (!actions.classList.contains("active")) {
      footer__plus.classList.add("close");
      setClose(true);
    } else {
      footer__plus.classList.remove("close");
      setClose(false);
    }
    actions.classList.toggle("active");
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
            <span>{close ? "Close" : "Add"}</span>
            <AiOutlinePlusCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
