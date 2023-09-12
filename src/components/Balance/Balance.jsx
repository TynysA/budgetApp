import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/components/Blocks.css";
import axiosInstance from "../../api";
import { useSelector } from "react-redux";
function Balance({amount}) {
  // const username = useSelector((state) => state.username);
  const username = localStorage.getItem("username");
  return (
    <div className="balance">
      <div className="username">
        Welcome, <span>{username}</span>
      </div>
      <div className="balance__title">BALANCE</div>
      <div className="budget">{amount} $</div>
    </div>
  );
}

export default Balance;
