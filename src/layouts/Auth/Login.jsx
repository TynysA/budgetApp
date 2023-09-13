import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";

function Login({ handleSubmit, isLoggedFalse }) {
  return (
    <div className="login__block">
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="form__login">
          <input name="auth_login" type="text" placeholder="Insert Login" />
        </div>
        <div className="form__password">
          <input
            name="auth_password"
            type="password"
            placeholder="Insert password"
          />
        </div>
        <div className="form__btn">
          <div className={`error__text ${isLoggedFalse ? "active" : ""}`}>
            Неправильный логин или пароль
          </div>
          <button className="standard" type="submit">Вход</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
