import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const defaultState = {
  isLoggedIn: false,
  balance: 0,
  avatar: "",
  incomeCategories: [],
  expenseCategories: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Login":
      return { ...state, isLoggedIn: true };
    case "LogOut":
      return { ...state, isLoggedIn: false };
    case "AddBalance":
      return { ...state, balance: state.balance + action.payload };
    case "ResetBalance":
      return { ...state, balance: 0 };
    case "SaveLogo":
      return { ...state, avatar: action.payload };
    case "DeleteLogo":
      return { ...state, avatar: "" };
    case "SaveIncome":
      return { ...state, incomeCategories: action.payload };
    case "SaveExpense":
      return { ...state, expenseCategories: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
