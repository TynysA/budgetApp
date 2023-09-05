import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { TestPage } from "./pages/TestPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/HomePage";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  // Move the useNavigate hook here
  const navigate = useNavigate();

  async function isLogined() {
    const token = await localStorage.getItem("access_token");
    const username = await localStorage.getItem("username");
    if (token) {
      dispatch({ type: "Login" });
      dispatch({ type: "SaveUserName", payload: { username} });
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    isLogined();
  }, []);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn && <TestPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
