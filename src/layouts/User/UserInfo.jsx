import { useEffect, useState } from "react";
import User from "../../components/User/User";
import axiosInstance from "../../api";
function UserInfo() {
  const handeleColExpense = (event) => {
    event.preventDefault();
    const item = document.querySelector(`.expense__categories`);
    item.classList.toggle("active");
    const colappse = item.parentNode.querySelector(".collaps__categories");
    colappse.classList.toggle("active");
  };
  const handeleColIncome = (event) => {
    event.preventDefault();
    const item = document.querySelector(`.income__categories`);
    item.classList.toggle("active");
    const colappse = item.parentNode.querySelector(".collaps__categories");
    colappse.classList.toggle("active");
  };
  const handeleAdd = (event) => {
    console.log(event.target.id);
    const item = document.querySelector(`.${event.target.id}`);
    item.classList.toggle("active");
  };

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

  const propsHandele = {
    handeleAdd: handeleAdd,
    handeleColExpense: handeleColExpense,
    handeleColIncome: handeleColIncome,
    listExpense: listExpense,
    listIncome: listIncome,
  };
  return (
    <div className="user">
      <User propsHandele={propsHandele} setReset={setReset}></User>
    </div>
  );
}

export default UserInfo;
