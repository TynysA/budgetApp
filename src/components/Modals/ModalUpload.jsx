import { useDispatch } from "react-redux";
import axiosInstance from "../../api";
import { FaTrashAlt } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";
import { useEffect, useState } from "react";

function ModalUpload({ params, setModalUpload, setIsLoading }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(params?.title);
  const [amount, setAmount] = useState(params?.amount);
  const [category, setCategory] = useState(params?.category[0]);
  const [description, setDescription] = useState(params?.description);
  const [date, setDate] = useState(params?.date?.slice(0, 10));
  const [type, setType] = useState(params?.type);
  const [arrCategories, setArrCategories] = useState([]);
  const handeleCategory = async () => {
    const res = await axiosInstance.get(`/${type}/category/all`);
    setArrCategories(res.data);
  };
  useEffect(() => {
    handeleCategory();
  }, []);
  const closeModal = () => {
    setModalUpload(false);
  };
  const handeleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await axiosInstance.post(`/${type}/edit`, {
      title: title,
      amount: Number(amount),
      category: category,
      date: date,
      description: description,
      actionId: params?._id,
    });
    dispatch({ type: "ResetBalance" });
    setModalUpload(false);
    setIsLoading(false);
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
          <form className="params__form" action="" onSubmit={handeleSubmit}>
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
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="params__block param__category">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="upload__select"
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
              <button className="standard" type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalUpload;
