import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Main/Header";
import Footer from "../components/Main/Footer";

function MainLayout({ children }) {
  return (
    <div className="main__layout">
      <div className="container">
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MainLayout;
