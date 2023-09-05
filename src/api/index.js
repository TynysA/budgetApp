import axios from "axios";
import { useSelector } from "react-redux";
const DEV_API = "http://localhost:8000";
const axiosInstance = axios.create({
  baseURL: DEV_API,
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (config && config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
