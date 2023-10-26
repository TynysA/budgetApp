import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import "./style.css";
import axiosInstance from "../../api";
function UserCategory({ row, type }) {
  const [deleted, setDeleted] = useState(false);
  const handeleDelete = async (event) => {
    event.preventDefault();
    const bodyformData = new FormData();
    bodyformData.append("categoryname", row.value);
    const res = await axiosInstance.post(`/${type}/category/delete`, {
      categoryname: row.value,
    });
    setDeleted(true);
  };
  return (
    <div className={`list__item ${type} ${deleted ? "none" : ""}`}>
      <div className="list__left">
        <div className="list__category">{row.value}</div>
      </div>
      <div className="list__actions">
        <button className="list__delete" onClick={handeleDelete}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default UserCategory;
