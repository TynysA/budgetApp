import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Balance from "../components/Balance/Balance";
import ActionLayout from "../layouts/Main/ActionLayout";
import ListLayout from "../layouts/Main/ListLayout";
import axiosInstance from "../api";

function TestPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const balance = useSelector((state) => state.balance);
  const [isLoggedFalse, setIsLoggedFalse] = useState(false);

  const [amount, setAmount] = useState(0);
  const [list, setList] = useState([]);
  const [reset, setReset] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target);
    let type = event.target.type.value;
    let title = event.target.title.value;
    let amount = event.target.amount.value;
    amount = Number(amount);
    let category = event.target.category.value;
    let description = event.target.description.value;
    const res = await axiosInstance.post(`/${type}/add`, {
      title: title,
      amount: amount,
      category: category,
      description: description,
    });
    console.log(res);
    if (type === "expense") {
      amount = -amount;
    }
    dispatch({ type: "AddBalance", payload: amount });
    event.target.title.value = "";
    event.target.amount.value = "";
    event.target.category.value = "";
    event.target.description.value = "";

    setReset((current) => ++current);
  };
  const handeleDeleteAction = async (event) => {
    event.preventDefault();
    let parent = event.target.parentNode.parentNode;
    parent.classList.add("none");
    const type = event.target.name;
    const id = event.target.id;
    const res = await axiosInstance.delete(`/${type}/${id}`);
    console.log(res);
    setReset((current) => ++current);
  };
  async function start(params) {
    if (reset === 0) {
      const res = await axiosInstance.get("/budget");
      if (balance === 0) {
        dispatch({ type: "AddBalance", payload: res.data.amount });
      }
    }
    const list = await axiosInstance.get("/budget/actions");
    setList(list.data.combinedData);
  }
  useEffect(() => {
    start();
  }, [reset]);
  return (
    <div className="test__page">
      <MainLayout>
        <Balance amount={balance}></Balance>
        <main className="main">
          <ActionLayout handleSubmit={handleSubmit}></ActionLayout>
          <ListLayout
            deleteAction={handeleDeleteAction}
            list={list}
          ></ListLayout>
        </main>
      </MainLayout>
    </div>
  );
}

export { TestPage };
