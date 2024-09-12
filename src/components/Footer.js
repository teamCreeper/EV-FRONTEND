import React from "react";
import "./Footer.css";
import mainEVImg from "../assets/images/mainEVImg.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contents">
        <img src={mainEVImg} width="60px" alt=""></img>
        <h2 className="copyright">
          COPYRIGHT © CREEPER. ALL RIGHTS RESERVED.
          <br />
          경기도 용인시 기흥구 강남로 40 강남대학교
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
