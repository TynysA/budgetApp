import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../style/LoginPage.css";
import Login from "../layouts/Auth/Login";
import Registration from "../layouts/Auth/Registration";
function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoggedFalse, setIsLoggedFalse] = useState(false);
  const [isRegistrationFalse, setIsRegistrationFalse] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginValue = event.target.auth_login.value;
    const passwordValue = event.target.auth_password.value;
    const dataToSend = {
      username: loginValue, //"1234",
      password: passwordValue, //"1234",
    };
    try {
      const response = await fetch(`http://localhost:8000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (data.token) {
        // setIsLoggedIn(true);
        dispatch({ type: "Login" });
        dispatch({ type: "SaveUserName", payload: { username: loginValue } });
        dispatch({ type: "SaveToken", payload: data.token });
        localStorage.setItem("username", loginValue);
        localStorage.setItem("access_token", data.token);
        navigate("/");
      } else {
        setIsLoggedFalse(true);
        // Handle incorrect credentials
      }
    } catch (error) {
      console.log("Hello error");
      console.error("Error sending POST request:", error);
    }
  };
  const handleRegistration = async (event) => {
    event.preventDefault();
    const loginValue = event.target.auth_login.value;
    const passwordValue = event.target.auth_password.value;
    const dataToSend = {
      username: loginValue, //"1234",
      password: passwordValue, //"1234",
    };
    try {
      const response = await fetch(`http://localhost:8000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (data.token) {
        // setIsLoggedIn(true);
        dispatch({ type: "Login" });
        navigate("/");
        localStorage.setItem("access_token", data.token);
      } else {
        setIsLoggedFalse(true);
        // Handle incorrect credentials
      }
    } catch (error) {
      console.log("Hello error");
      console.error("Error sending POST request:", error);
    }
  };

  return (
    <div className="login__page">
      <div className="login__border"></div>
      <Login handleSubmit={handleSubmit} isLoggedFalse={isLoggedFalse}></Login>
      <Registration
        handleRegistration={handleRegistration}
        isRegistrationFalse={isRegistrationFalse}
      ></Registration>
    </div>
  );
}

export default LoginPage;
