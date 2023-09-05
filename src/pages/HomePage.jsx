import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UserInfo from "../layouts/User/UserInfo";
import axiosInstance from "../api";

function HomePage({ setIsLoggedIn }) {
  const [listIncome, setListIncome] = useState([]);
  const [listExpense, setListExpense] = useState([]);
  const [reset, setReset] = useState(0);

  async function start(params) {
    const resIncome = await axiosInstance.get("/income/category/user/get");
    const resExpense = await axiosInstance.get("/expense/category/user/get");
    setListIncome(resIncome.data);
    setListExpense(resExpense.data);
  }
  useEffect(() => {
    start();
  }, [reset]);
  return (
    <div className="home__page">
      <MainLayout>
        <UserInfo listExpense={listExpense} listIncome={listIncome}></UserInfo>
      </MainLayout>
    </div>
  );
}

export default HomePage;
