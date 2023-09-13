import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
function Loading() {
  return (
    <div className="loading__layout">
      <div className="loading">..Loading</div>
    </div>
  );
}

export default Loading;
