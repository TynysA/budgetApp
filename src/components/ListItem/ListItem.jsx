import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../api";
import { FaTrashAlt } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import "./style.css";
import { useEffect, useState } from "react";

function ListItem({ item, handeleUploadItem }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const handeleDelete = async (event) => {
    event.preventDefault();
    const type = item.type;
    const id = item._id;

    const res = await axiosInstance.delete(`/${type}/${id}`);
    let amount = item.amount;
    amount = Number(amount);
    if (type === "income") {
      amount = -amount;
    }
    dispatch({ type: "AddBalance", payload: amount });
  };
  const handeleOpen = (event) => {
    handeleUploadItem(item);
  };
  useEffect(() => {
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const datetemp = new Date(item.date);
    const date = datetemp.toLocaleDateString("en-US", options);
    setDate(date);
  }, [item.date]);
  return (
    <div id={item._id} className={`list__item ${item.type}`}>
      <div className="list__left">
        <div className="list__category">{item.category[0]}</div>
        <div className="list__date">{date}</div>
      </div>
      <div className="list__right">
        <div className="list__amount">{item.amount}$</div>
        <div className="list__actions">
          <button className="list__open" onClick={handeleOpen}>
            <BsPencilFill />
          </button>
          <button className="list__delete" onClick={handeleDelete}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
