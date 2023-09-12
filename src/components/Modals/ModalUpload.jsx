import { useDispatch } from "react-redux";
import axiosInstance from "../../api";
import { FaTrashAlt } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";
import { useEffect, useState } from "react";

function ModalUpload({ params, setModalUpload }) {
  const dispatch = useDispatch();
  console.log(params);
  const [title, setTitle] = useState(params?.title);
  const [amount, setAmount] = useState(params?.amount);
  const [category, setCategory] = useState(params?.category);
  const [description, setDescription] = useState(params?.description);
  const [date, setDate] = useState(params?.date?.slice(0, 10));
  const [type, setType] = useState(params?.type);
  const [arrCategories, setArrCategories] = useState([]);
  const handeleCategory = async () => {
    const res = await axiosInstance.get(`/${type}/category/all`);
    console.log("All categories");
    console.log(res.data);
    setArrCategories(res.data);
  };
  useEffect(() => {
    handeleCategory();
  }, []);
  console.log(params);
  const closeModal = () => {
    console.log("Close");
    setModalUpload(false);
  };
  useEffect(() => {}, []);
  return (
    <div className="modal__layout active">
      <div className="modal__upload">
        <div className="modal__close" onClick={closeModal}>
          <AiOutlineClose />
        </div>
        <div className="modal__title">Info</div>
        <div className="modal__item">
          <form className="params__form" action="">
            <div className="params__block">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="params__block">
              <input
                type="number"
                value={amount}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="params__block param__category">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="add__category"
                name="category"
              >
                <option value="">Chose Category</option>
                {arrCategories.map((row, index) => (
                  <option key={index} value={row.value}>
                    {row.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="params__block">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="params__block">
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="params__block params__submit">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalUpload;
