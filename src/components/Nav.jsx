import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo1 from '../assets/images/mainEVImg.png';
import logo2 from '../assets/images/mainEVImg2.png';

function Nav({ activeMenu, setActiveMenu }) {
  const location = useLocation();
  const [logo, setLogo] = useState(logo1);

  useEffect(() => {
    // 경로에 따라 로고 및 네비게이션 색상 업데이트
    const isDetailOrBatteryOrNewsPage =
      activeMenu === 'CarDetail' ||
      location.pathname.startsWith('/CarDetail') ||
      location.pathname.startsWith('/Carbattery') ||
      location.pathname.startsWith('/Carnews');

    console.log('{Nav} activeMenu:', activeMenu);
    console.log('{Nav} isDetailOrBatteryOrNewsPage:', isDetailOrBatteryOrNewsPage);

    // 로고 업데이트
    setLogo(isDetailOrBatteryOrNewsPage ? logo2 : logo1);
  }, [activeMenu, location, setActiveMenu]);

  const handleLogoClick = () => {
    setActiveMenu(null);
    setLogo(logo1);
  };

  const handleScrollToCarType = () => {
    const section = document.getElementById('car-swiper-section');
    if (section) {
      const yOffset = -300;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // activeMenu 상태가 true이거나 특정 경로에 따라 네비게이션 바의 스타일 결정
  const navBarBackground =
    activeMenu ||
    location.pathname.startsWith('/CarDetail') ||
    location.pathname.startsWith('/Carbattery') ||
    location.pathname.startsWith('/Carnews')
      ? 'white'
      : 'black';
  const navBarTextColor = navBarBackground === 'white' ? 'black' : 'white';

  const getMenuStyle = (menu) => ({
    ...styles.navbarMenu,
    backgroundColor: activeMenu === menu ? 'rgb(80,80,80)' : 'transparent',
    color: activeMenu === menu ? 'white' : navBarTextColor,
    borderRadius: '15px',
  });

  return (
    <div className="navbar" style={{ ...styles.navbar, backgroundColor: navBarBackground }}>
      <Link to="/" onClick={handleLogoClick} style={styles.navbarlogo}>
        <img src={logo} width="100px" alt="logo" style={styles.logoImage} />
      </Link>
      <Link to="/" onClick={handleLogoClick} style={{ ...styles.navbarMenu, color: navBarTextColor }}>
        <div onClick={handleScrollToCarType}>전기차 종류</div>
      </Link>

      <span style={{ ...styles.divider, color: navBarTextColor }}>|</span>

      <Link to="/Carbattery" onClick={() => setActiveMenu('Carbattery')} style={getMenuStyle('Carbattery')}>
        전기차 배터리 조회
      </Link>

      <span style={{ ...styles.divider, color: navBarTextColor }}>|</span>

      <Link to="/Carnews" onClick={() => setActiveMenu('Carnews')} style={getMenuStyle('Carnews')}>
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
