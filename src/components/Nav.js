import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo1 from '../assets/images/mainEVImg.png';
import logo2 from '../assets/images/mainEVImg2.png';

function Nav() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [logo, setLogo] = useState(logo1); // 초기 로고 설정

  const handleMenuClick = (menu) => {
    if (menu !== 'CarDetail') {
      // 전기차 종류 메뉴 클릭 시에는 activeMenu를 업데이트하지 않음
      setActiveMenu(menu);
      if (menu === 'Carbattery' || menu === 'Carnews') {
        setLogo(logo2); // Carbattery 또는 Carnews 클릭 시 로고 변경
      } else {
        setLogo(logo1); // 다른 메뉴 클릭 시 기본 로고로 변경
      }
    }
  };

  const handleLogoClick = () => {
    setActiveMenu(null); // 로고 클릭 시 activeMenu를 null로 설정
    setLogo(logo1); // 로고 클릭 시 기본 로고로 변경
  };

  const handleScrollToCarType = () => {
    // 전기차 종류 버튼 클릭 시 스타일을 변경하지 않도록 activeMenu를 설정하지 않음
    const section = document.getElementById('car-swiper-section');
    if (section) {
      const yOffset = -70; // 원하는 오프셋 값 (네비게이션 바의 높이 고려)
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' }); // 부드럽게 스크롤 이동
    }
  };

  const isMenuActive = (menu) => activeMenu === menu;

  const navBarBackground = activeMenu === 'Carbattery' || activeMenu === 'Carnews' ? 'white' : 'black';
  const navBarTextColor = activeMenu === 'Carbattery' || activeMenu === 'Carnews' ? 'black' : 'white';

  return (
    <div className="navbar" style={{ ...styles.navbar, backgroundColor: navBarBackground }}>
      <Link className="navbarlogo" to="/" onClick={handleLogoClick} style={styles.navbarlogo}>
        <img src={logo} width="100px" alt="logo" style={styles.logoImage} />
      </Link>
      <Link
        to="/"
        onClick={handleLogoClick}
        style={{
          ...styles.navbarMenu,
          color: navBarTextColor,
        }}
      >
        <div
          className="navbarMenu"
          onClick={handleScrollToCarType} // 스크롤 이동 함수 호출
          style={{ color: navBarTextColor }}
        >
          전기차 종류
        </div>
      </Link>

      <span className="divider" style={{ ...styles.divider, color: navBarTextColor }}>
        |
      </span>
      <Link
        className="navbarMenu"
        to="/Carbattery"
        onClick={() => handleMenuClick('Carbattery')}
        style={{
          ...styles.navbarMenu,
          backgroundColor: isMenuActive('Carbattery') ? 'rgb(80,80,80)' : 'transparent',
          color: isMenuActive('Carbattery') ? 'white' : navBarTextColor,
          borderRadius: isMenuActive('Carbattery') ? '15px' : '0',
        }}
      >
        전기차 배터리 조회
      </Link>
      <span className="divider" style={{ ...styles.divider, color: navBarTextColor }}>
        |
      </span>
      <Link
        className="navbarMenu"
        to="/Carnews"
        onClick={() => handleMenuClick('Carnews')}
        style={{
          ...styles.navbarMenu,
          backgroundColor: isMenuActive('Carnews') ? 'rgb(80,80,80)' : 'transparent',
          color: isMenuActive('Carnews') ? 'white' : navBarTextColor,
          borderRadius: isMenuActive('Carnews') ? '15px' : '0',
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
    width: '100%',
    padding: '15px 0px',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.5s', // 배경색 전환 애니메이션
  },
  navbarMenu: {
    fontSize: '25px',
    margin: '8px',
    textDecoration: 'none',
    marginLeft: '50px',
    marginTop: '100px',
    padding: '10px 15px',
    transition: 'background-color 0.5s, color 0.5s', // 배경색과 글자색 전환 애니메이션
  },

  divider: {
    margin: '0 8px',
    fontSize: '25px',
    marginLeft: '40px',
    marginTop: '90px',
  },
  navbarlogo: {
    marginLeft: '100px',
    marginTop: '70px',
  },
  logoImage: {
    margin: '20px',
  },
};
