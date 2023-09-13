import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../../style/components/Blocks.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__plus">
          <AiOutlinePlusCircle />
        </div>
      </div>
    </div>
  );
}

export default Footer;
