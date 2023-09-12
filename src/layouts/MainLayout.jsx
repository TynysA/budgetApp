import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Main/Header";
import Footer from "../components/Main/Footer";
import ModalUpload from "../components/Modals/ModalUpload";

function MainLayout({ children, params, modalUpload, setModalUpload }) {
  return (
    <div className="main__layout">
      {modalUpload && <ModalUpload params={params} setModalUpload={setModalUpload} />}

      <div className="container">
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MainLayout;
