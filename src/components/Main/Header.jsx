import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/components/Blocks.css";
function Header() {
  const navigate = useNavigate();
  const handeleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <div className="header">
      <Link to={"/"} className="header__logo">
        CasheFlow Composs
      </Link>
      <div className="header__actions">
        <Link to={"/home"} className="header__action">
          My profile
        </Link>
        <div className="header__action" onClick={handeleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
}

export default Header;
