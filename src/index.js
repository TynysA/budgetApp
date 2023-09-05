import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const defaultState = {
  isLoggedIn: false,
  username: "2",
  balance: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Login":
      return { ...state, isLoggedIn: true };
    case "LogOut":
      return { ...state, isLoggedIn: false };
    case "SaveUserName":
      return { ...state, username: action.payload.username };
    case "AddBalance":
      return { ...state, balance: state.balance + action.payload };
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
