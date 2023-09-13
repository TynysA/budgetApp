import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Main/Header";
import Footer from "../components/Main/Footer";
import ModalUpload from "../components/Modals/ModalUpload";
import Loading from "../components/Loading/Loading";

function MainLayout({ children, params, modalUpload, setModalUpload }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="main__layout">
      {modalUpload && (
        <ModalUpload
          setIsLoading={setIsLoading}
          params={params}
          setModalUpload={setModalUpload}
        />
      )}
      {isLoading && <Loading/>}
      <div className="container">
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MainLayout;
