import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo1 from "../assets/images/mainEVImg.png";
import logo2 from "../assets/images/mainEVImg2.png";

function Nav() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [logo, setLogo] = useState(logo1); // 초기 로고 설정

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === "Cartype" || menu === "Carbattery" || menu === "Carnews") {
      setLogo(logo2); // 메뉴 클릭에 따라 로고 변경
    }
  };

  const handleLogoClick = () => {
    setActiveMenu(null); // 로고 클릭 시 activeMenu를 null로 설정
    setLogo(logo1); // 로고 클릭 시 기본 로고로 변경
  };

  const isMenuActive = (menu) => activeMenu === menu;

  return (
    <div
      className={`navbar ${activeMenu ? "active" : ""}`}
      style={{ ...styles.navbar, ...(activeMenu ? styles.navbarActive : {}) }}
    >
      <Link
        className="navbarlogo"
        to="/"
        onClick={handleLogoClick}
        style={styles.navbarlogo}
      >
        <img src={logo} width="100px" alt="logo" style={styles.logoImage} />
      </Link>
      <Link
        className="navbarMenu"
        to="/Cartype"
        onClick={() => handleMenuClick("Cartype")}
        style={{
          ...styles.navbarMenu,
          backgroundColor: isMenuActive("Cartype")
            ? "rgb(80,80,80)"
            : "transparent", // 활성화된 메뉴의 배경색
          color: isMenuActive("Cartype")
            ? "white"
            : activeMenu === null
            ? "white"
            : "black", // 글자색 설정
          borderRadius: isMenuActive("Cartype") ? "15px" : "0",
        }}
      >
        전기차 종류
      </Link>
      <span className="divider" style={styles.divider}>
        |
      </span>
      <Link
        className="navbarMenu"
        to="/Carbattery"
        onClick={() => handleMenuClick("Carbattery")}
        style={{
          ...styles.navbarMenu,
          backgroundColor: isMenuActive("Carbattery")
            ? "rgb(80,80,80)"
            : "transparent",
          color: isMenuActive("Carbattery")
            ? "white"
            : activeMenu === null
            ? "white"
            : "black",
          borderRadius: isMenuActive("Carbattery") ? "15px" : "0",
        }}
      >
        전기차 배터리 조회
      </Link>
      <span className="divider" style={styles.divider}>
        |
      </span>
      <Link
        className="navbarMenu"
        to="/Carnews"
        onClick={() => handleMenuClick("Carnews")}
        style={{
          ...styles.navbarMenu,
          backgroundColor: isMenuActive("Carnews")
            ? "rgb(80,80,80)"
            : "transparent",
          color: isMenuActive("Carnews")
            ? "white"
            : activeMenu === null
            ? "white"
            : "black",
          borderRadius: isMenuActive("Carnews") ? "15px" : "0",
        }}
      >
        전기차 관련뉴스
      </Link>
    </div>
  );
}

export default Nav;

// 스타일 객체 정의
const styles = {
  navbar: {
    width: "100%",
    backgroundColor: "black",
    padding: "15px 0px",
    display: "flex",
    alignItems: "center",
  },
  navbarMenu: {
    fontSize: "25px",
    margin: "8px",
    textDecoration: "none",
    marginLeft: "50px",
    marginTop: "100px",
    padding: "10px 15px",
    transition: "background-color 0.3s, color 0.3s",
  },
  navbarActive: {
    backgroundColor: "white", // 클릭 시 배경색 변경
  },
  divider: {
    color: "white",
    margin: "0 8px",
    fontSize: "25px",
    marginLeft: "40px",
    marginTop: "90px",
  },
  navbarlogo: {
    marginLeft: "100px",
    marginTop: "70px",
  },
  logoImage: {
    margin: "20px",
  },
};
