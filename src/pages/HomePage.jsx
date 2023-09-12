import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UserInfo from "../layouts/User/UserInfo";
import axiosInstance from "../api";

function HomePage({ setIsLoggedIn }) {
  return (
    <div className="home__page">
      <MainLayout>
        <UserInfo></UserInfo>
      </MainLayout>
    </div>
  );
}

export default HomePage;
