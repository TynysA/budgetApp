import { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { FaDollarSign } from "react-icons/fa";
import { FaRubleSign } from "react-icons/fa";
import { FaTenge } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";

function User({ listExpense, listIncome }) {
  const username = useSelector((state) => state.username);
  const handeleDelete = (event) => {
    event.preventDefault();
    console.log("Dele");
  };
  const handeleCol = (event) => {
    const item = document.querySelector(`.${event.target.id}`);
    item.classList.toggle("active");
  };
  const handeleAdd = (event) => {
    console.log(event.target);
  };
  return (
    <div className="user__base">
      <div className="user__logo">Some logo</div>
      <div className="user__info">
        <div className="user__username">{username}</div>
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
          <div className="category__block">
            <div className="user__category-title">
              Income
              <div className="user__category-action">
                <div className="category__add" onClick={handeleAdd}>
                  Add
                </div>
                <div
                  className="collaps__categories"
                  id="income__categories"
                  onClick={handeleCol}
                >
                  Col
                </div>
              </div>
            </div>
            <div className="list__categories income__categories">
              {listIncome.map((row, index) => (
                <div className={`list__item income`}>
                  <div className="list__left">
                    <div className="list__category">{row.value}</div>
                  </div>
                  <div className="list__right">
                    <button className="list__delete" onClick={handeleDelete}>
                      Del
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="category__block">
            <div className="user__category-title">
              Expense
              <div className="user__category-action">
                <div className="category__add" onClick={handeleAdd}>
                  Add
                </div>
                <div
                  className="collaps__categories"
                  id="expense__categories"
                  onClick={handeleCol}
                >
                  Col
                </div>
              </div>
            </div>
            <div className="list__categories expense__categories">
              {listExpense.map((row, index) => (
                <div className={`list__item expense`}>
                  <div className="list__left">
                    <div className="list__category">{row.value}</div>
                  </div>
                  <div className="list__right">
                    <button className="list__delete" onClick={handeleDelete}>
                      Del
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
