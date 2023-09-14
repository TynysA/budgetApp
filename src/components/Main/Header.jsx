import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/components/Blocks.css";
import { useDispatch } from "react-redux";
import { GrLogout } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handeleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    dispatch({ type: "ResetBalance" });
    navigate("/login");
  };
  return (
    <div className="header">
      <Link to={"/"} className="header__logo">
        CasheFlow <span>Composs</span>
      </Link>
      <div className="header__actions">
        <Link to={"/home"} className="header__action ">
          My profile
          <CgProfile />
        </Link>
        <div className="header__action" onClick={handeleLogout}>
          <span>Logout</span>
          <GrLogout />
        </div>
      </div>
    </div>
  );
}

export default Header;
