import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration({handleRegistration , isRegistrationFalse}) {
  return (
    <div className="login__layout">
      <div className="login__block">
        <div className="login__title">Registration</div>
        <form className="login__form" onSubmit={handleRegistration}>
          <div className="form__login">
            <input name="auth_login" type="text" placeholder="Логин" />
          </div>
          <div className="form__password">
            <input name="auth_password" type="password" placeholder="Пороль" />
          </div>
          <div className="form__btn">
            <div className={`error__text ${isRegistrationFalse ? "active" : ""}`}>
              Неправильный логин или пароль
            </div>
            <button type="submit">Registration</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
