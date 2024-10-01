import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Nav.css';
import logo1 from '../assets/images/mainEVImg.png';
import logo2 from '../assets/images/mainEVImg3.png'; // 새로운 로고 이미지

function Nav() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [logo, setLogo] = useState(logo1); // 초기 로고 설정

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    // 클릭한 메뉴에 따라 로고 변경
    if (menu === 'Cartype' || menu === 'Carbattery' || menu === 'Carnews') {
      setLogo(logo2); // 메뉴 클릭에 따라 로고 변경
    } 
  };

  const handleLogoClick = () => {
    setActiveMenu(null); // 로고 클릭 시 activeMenu를 null로 설정
    setLogo(logo1); // 로고 클릭 시 기본 로고로 변경
  };

  return (
    <div className={`navbar ${activeMenu ? 'active' : ''}`}>
      <Link className='navbarlogo' to='/' onClick={handleLogoClick}>
        <img src={logo} width='100px' alt='logo' />
      </Link>
      <Link
        className={`navbarMenu ${activeMenu === 'Cartype' ? 'active' : ''}`}
        to='/Cartype'
        onClick={() => handleMenuClick('Cartype')}
      >
        전기차 종류
      </Link>
      <span className={`divider ${activeMenu ? 'active' : ''}`}>|</span>
      <Link
        className={`navbarMenu ${activeMenu === 'Carbattery' ? 'active' : ''}`}
        to='/Carbattery'
        onClick={() => handleMenuClick('Carbattery')}
      >
        전기차 배터리 조회
      </Link>
      <span className={`divider ${activeMenu ? 'active' : ''}`}>|</span>
      <Link
        className={`navbarMenu ${activeMenu === 'Carnews' ? 'active' : ''}`}
        to='/Carnews'
        onClick={() => handleMenuClick('Carnews')}
      >
        전기차 관련뉴스
      </Link>
    </div>
  );
}

export default Nav;
