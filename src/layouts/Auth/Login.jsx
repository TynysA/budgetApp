import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";

function Login({handleSubmit , isLoggedFalse}) {
  return (
    <div className="login__layout">
      <div className="login__block">
        <div className="login__title">Авторизация</div>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="form__login">
            <input name="auth_login" type="text" placeholder="Логин" />
          </div>
          <div className="form__password">
            <input name="auth_password" type="password" placeholder="Пороль" />
          </div>
          <div className="form__btn">
            <div className={`error__text ${isLoggedFalse ? "active" : ""}`}>
              Неправильный логин или пароль
            </div>
            <button type="submit">Вход</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
