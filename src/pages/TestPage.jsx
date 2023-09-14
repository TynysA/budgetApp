import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Balance from "../components/Balance/Balance";
import ActionLayout from "../layouts/Main/ActionLayout";
import ListLayout from "../layouts/Main/ListLayout";
import axiosInstance from "../api";
import Footer from "../components/Main/Footer";

function TestPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const balance = useSelector((state) => state.balance);
  const [isLoggedFalse, setIsLoggedFalse] = useState(false);
  const [list, setList] = useState([]);
  const [params, setParams] = useState({});
  const [modalUpload, setModalUpload] = useState(false);
  async function handeleUploadItem(param) {
    //console.log(param);
    setParams(param);
    setModalUpload(true);
    // const modal__layout = document.querySelector(".modal__layout");
    // modal__layout.classList.add("active");
  }

  async function start(params) {
    const res = await axiosInstance.get("/budget");
    if (balance === 0) {
      dispatch({ type: "AddBalance", payload: res.data.amount });
    }

    const list = await axiosInstance.get("/budget/actions");
    setList(list.data.combinedData);
  }
  useEffect(() => {
    start();
  }, [balance]);
  return (
    <div className="test__page">
      <MainLayout
        params={params}
        modalUpload={modalUpload}
        setModalUpload={setModalUpload}
      >
        <Balance amount={balance}></Balance>
        <main className="main">
          <ActionLayout></ActionLayout>
          <ListLayout
            list={list}
            handeleUploadItem={handeleUploadItem}
          ></ListLayout>
        </main>
      </MainLayout>
    </div>
  );
}

export { TestPage };
