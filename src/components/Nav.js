import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo1 from '../assets/images/mainEVImg.png';
import logo2 from '../assets/images/mainEVImg2.png';

function Nav() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [logo, setLogo] = useState(logo1);

  useEffect(() => {
    setLogo(
      location.pathname.startsWith('/CarDetail') || location.pathname.startsWith('/Carbattery') || location.pathname.startsWith('/Carnews')
        ? logo2
        : logo1
    );
  }, [location.pathname]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === 'Carbattery' || menu === 'Carnews') {
      setLogo(logo2);
    } else {
      setLogo(logo1);
    }
  };

  const handleLogoClick = () => {
    setActiveMenu(null);
    setLogo(logo1);
  };

  const handleScrollToCarType = () => {
    const section = document.getElementById('car-swiper-section');
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navBarBackground = location.pathname.startsWith('/CarDetail') || activeMenu === 'Carbattery' || activeMenu === 'Carnews' ? 'white' : 'black';
  const navBarTextColor = navBarBackground === 'white' ? 'black' : 'white';

  return (
    <div className="navbar" style={{ ...styles.navbar, backgroundColor: navBarBackground }}>
      <Link
        to="/"
        onClick={() => {
          handleLogoClick();
        }}
        style={styles.navbarlogo}>
        <img src={logo} width="100px" alt="logo" style={styles.logoImage} />
      </Link>
      <Link to="/" onClick={handleLogoClick} style={{ ...styles.navbarMenu, color: navBarTextColor }}>
        <div onClick={handleScrollToCarType}>전기차 종류</div>
      </Link>

      <span style={{ ...styles.divider, color: navBarTextColor }}>|</span>

      <Link
        to="/Carbattery"
        onClick={() => handleMenuClick('Carbattery')}
        style={{
          ...styles.navbarMenu,
          backgroundColor: activeMenu === 'Carbattery' ? 'rgb(80,80,80)' : 'transparent',
          color: activeMenu === 'Carbattery' ? 'white' : navBarTextColor,
          borderRadius: activeMenu === 'Carbattery' ? '15px' : '15px', // 둥근 테두리 유지
        }}>
        전기차 배터리 조회
      </Link>

      <span style={{ ...styles.divider, color: navBarTextColor }}>|</span>

      <Link
        to="/Carnews"
        onClick={() => handleMenuClick('Carnews')}
        style={{
          ...styles.navbarMenu,
          backgroundColor: activeMenu === 'Carnews' ? 'rgb(80,80,80)' : 'transparent',
          color: activeMenu === 'Carnews' ? 'white' : navBarTextColor,
          borderRadius: activeMenu === 'Carnews' ? '15px' : '15px', // 둥근 테두리 유지
        }}>
        전기차 관련뉴스
      </Link>
    </div>
  );
}

export default Nav;
const styles = {
  navbar: {
    width: '100%',
    padding: '15px 0px',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.5s',
  },
  navbarMenu: {
    fontSize: '25px',
    margin: '8px',
    textDecoration: 'none',
    marginLeft: '50px',
    marginTop: '100px',
    padding: '10px 15px',
    transition: 'background-color 0.5s, color 0.5s',
    borderRadius: '15px', // 둥근 테두리 유지
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
