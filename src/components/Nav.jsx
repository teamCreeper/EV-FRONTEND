import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";
import logo2 from "../images/logo2.png";

function Nav() {
  return (
    <div className="navbar">
      <Link className="navbarlogo" to={"/"}>
        <img src={logo2} width="100px" alt="logo2" />
      </Link>
      <Link className="navbarMenu" to={"/Cartype"}>
        전기차 종류
      </Link>
      <span className="divider">|</span>
      <Link className="navbarMenu" to={"/Carbattery"}>
        전기차 배터리비교
      </Link>
      <span className="divider">|</span>
      <Link className="navbarMenu" to={"/Carnews"}>
        전기차 관련뉴스
      </Link>
    </div>
  );
}

export default Nav;
