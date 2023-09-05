import { useEffect, useState } from "react";
import "./style.css";
import axiosInstance from "../../api";

function AddExpense({ type, handleSubmit }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
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
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(event.target.title.value);
  //   const res = await axiosInstance.post(`/${type}/add`, {
  //     title: title,
  //     amount: amount,
  //     category: category,
  //     description: description,
  //   });
  //   console.log(res);
  // };
  return (
    <div className={`add__inner ${type}`}>
      <form className={`add__form ${type}`} onSubmit={handleSubmit}>
        <input name="type" type="text" hidden value={type} />
        <input name="title" type="text" placeholder="Title" />
        <input placeholder="Amount: 0$" type="number" name="amount" />
        <div className="form__select">
          <select className="add__category" name="category">
            <option value="">Chose Category</option>
            {arrCategories.map((row) => (
              <option value={row.value}>{row.value}</option>
            ))}
          </select>
        </div>
        <input
          placeholder="Description"
          className="add__description"
          type="text"
          name="description"
        />
        <div className="add__submit">
          <button className="add__btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
