import { useEffect, useState } from "react";
import "./style.css";
import axiosInstance from "../../api";
import { useDispatch } from "react-redux";

function AddExpense({ type }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [arrCategories, setArrCategories] = useState([]);
  const handeleCategory = async () => {
    const res = await axiosInstance.get(`/${type}/category/all`);
    setArrCategories(res.data);
  };
  useEffect(() => {
    handeleCategory();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axiosInstance.post(`/${type}/add`, {
      title: title,
      amount: Number(amount),
      category: category,
      description: description,
    });
    console.log(res);
    let tempAmount = amount;
    if (type === "expense") {
      tempAmount = -tempAmount;
    }
    dispatch({ type: "AddBalance", payload: Number(tempAmount) });
    setAmount(0);
    setDescription("");
    setTitle("");
    setCategory("");
  };
  return (
    <div className={`add__inner ${type}`}>
      <form className={`add__form ${type}`} onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          type="text"
          placeholder="Title"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount: 0$"
          type="number"
          name="amount"
        />
        <div className="form__select">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="add__category"
            name="category"
          >
            <option value="">Chose Category</option>
            {arrCategories.map((row,index) => (
              <option key={index} value={row.value}>
                {row.value}
              </option>
            ))}
          </select>
        </div>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
