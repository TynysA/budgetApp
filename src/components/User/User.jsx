import { useEffect, useRef, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { FaDollarSign, FaTrashAlt } from "react-icons/fa";
import { FaRubleSign } from "react-icons/fa";
import { FaTenge } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import axiosInstance from "../../api";
import UserCategory from "./UserCategory";
function User({ setReset, propsHandele }) {
  const username = localStorage.getItem("username");
  const [avatar, setAvatar] = useState("");
  const [user, setUser] = useState([]);
  const fileInputRef = useRef(null);
  const handleImageChange = (event) => {
    const selectedImage = event.target.files && event.target.files[0];
    console.log(selectedImage);
    const bodyformData = new FormData();
    bodyformData.append("avatar", selectedImage);
    axiosInstance
      .post("/auth/upload", bodyformData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data.avatar);
        setAvatar(response.data.avatar);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const addUserCategory = async (event) => {
    event.preventDefault();
    const category = event.target.__category.value;
    console.log(category);
    if (!category) {
      alert("Please write Category.");
      return;
    }
    const formType = event.target.hidden.value;
    const res = await axiosInstance.post(`/${formType}/category/edit/add `, {
      categoryname: category,
    });
    const id = `add__${formType}-category`;
    event.target.__category.value = "";
    const item = document.querySelector(`.${id}`);
    item.classList.toggle("active");
    setReset((current) => current + 1);
  };
  async function start(params) {
    const user = await axiosInstance.get("/auth/user");
    setUser(user.data);
    const avatar = user.data.avatar;
    setAvatar(avatar);
    const change = document.querySelector(".change__logo");
    if (avatar === undefined) {
      change.classList.add("active");
    } else {
      change.classList.remove("active");
    }
  }
  const handeleChangeList = (event) => {
    let some = event.target.parentNode.parentNode.parentNode;
    some.classList.add("none");
    some.classList.remove("active");
    let type = event.target.id;
    const ele = document.querySelector(`.category__block-${type}`);
    ele.classList.remove("none");
    ele.classList.add("active");
  };
  useEffect(() => {
    start();
  }, [avatar]);
  return (
    <div className="user__base">
      <div className="user__logo">
        <img src={`http://localhost:8000/${avatar}`} alt="" />
        <div className="change__logo" onClick={handleButtonClick}>
          <BsFillImageFill />
          <input
            type="file"
            ref={fileInputRef}
            className="logo__input"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
      </div>
      <div className="user__info">
        <div className="user__username">Username: {username}</div>
        <div className="user__currency">
          Currency:
          <select
            className="chose__currency"
            name="category"
            defaultValue="dollar"
          >
            {/* <option value="">Chose Currency</option> */}
            <option value="dollar">Dollar</option>
            <option value="euro">Euro</option>
            <option value="tenge">Tenge</option>
            <option value="ruble">Ruble</option>
          </select>
          <FaDollarSign className="currency__icon" />
        </div>
        <div className="user__category">List of user category</div>
        <div className="category__list">
          <div className="category__block category__block-income">
            <div className="user__category-title">
              <div className="title__actions">
                <div>Incomes</div>
                <div
                  id="expense"
                  className="title__action expense"
                  onClick={handeleChangeList}
                >
                  Expenses
                </div>
              </div>
              <div className="user__category-action">
                <div
                  id="add__income-category"
                  className="category__add"
                  onClick={propsHandele.handeleAdd}
                >
                  Add
                </div>
                <div
                  className="collaps__categories"
                  onClick={propsHandele.handeleColIncome}
                >
                  <AiOutlineArrowUp className="collaps__icon" />
                </div>
              </div>
            </div>
            <div className="add-category add__income-category">
              <form
                className="income__ category-form"
                onSubmit={addUserCategory}
              >
                <input type="hidden" value="income" name="hidden" />
                <input
                  className="income__ input__category"
                  type="text"
                  placeholder="Type income category"
                  name="__category"
                />
                <button className="standard" type="submit">
                  Save
                </button>
              </form>
            </div>
            <div className="list__categories income__categories">
              {propsHandele?.listIncome.map((row, index) => (
                <UserCategory key={index} row={row} type="income" />
              ))}
            </div>
          </div>
          <div className="category__border"></div>
          <div className="category__block category__block-expense">
            <div className="user__category-title">
              <div className="title__actions">
                <div>Expenses</div>
                <div
                  id="income"
                  className="title__action income"
                  onClick={handeleChangeList}
                >
                  Incomes
                </div>
              </div>
              <div className="user__category-action">
                <div
                  id="add__expense-category"
                  className="category__add"
                  onClick={propsHandele.handeleAdd}
                >
                  Add
                </div>
                <div
                  className="collaps__categories"
                  onClick={propsHandele.handeleColExpense}
                >
                  <AiOutlineArrowUp className="collaps__icon" />
                </div>
              </div>
            </div>
            <div className="add-category add__expense-category">
              <form
                className="expense__ category-form"
                onSubmit={addUserCategory}
              >
                {" "}
                <input type="hidden" value="expense" name="hidden" />
                <input
                  className="expense__category input__category"
                  type="text"
                  placeholder="Type expense category"
                  name="__category"
                />
                <button className="standard" type="submit">
                  Save
                </button>
              </form>
            </div>
            <div className="list__categories expense__categories">
              {propsHandele?.listExpense.map((row, index) => (
                <UserCategory key={index} row={row} type="expense" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
