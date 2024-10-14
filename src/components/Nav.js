import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo1 from '../assets/images/mainEVImg.png';
import logo2 from '../assets/images/mainEVImg2.png';

function Nav() {
  const [activeMenu, setActiveMenu] = useState(null); // activeMenu 상태 추가

  const [logo, setLogo] = useState(logo1); // 초기 로고 설정
  const location = useLocation(); // 현재 URL 경로 가져오기

  useEffect(() => {
    // 현재 경로가 /CarDetail, /Carnews, /Carbattery로 시작하면 로고와 스타일 변경
    if (location.pathname.startsWith('/CarDetail') || location.pathname === '/Carnews' || location.pathname === '/Carbattery') {
      setLogo(logo2); // 해당 경로에 있을 때 로고 변경
    } else {
      setLogo(logo1); // 기본 로고로 설정
    }
  }, [location.pathname]); // 경로가 바뀔 때마다 실행

  const navBarBackground = location.pathname.startsWith('/CarDetail') || location.pathname === '/Carnews' || location.pathname === '/Carbattery' ? 'white' : 'black';
  const navBarTextColor = location.pathname.startsWith('/CarDetail') || location.pathname === '/Carnews' || location.pathname === '/Carbattery' ? 'black' : 'white';

  const isActive = (path) => location.pathname === path; // 경로와 정확히 일치하는 경우에만 active

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === 'Carbattery' || menu === 'Carnews' || menu.startsWith('CarDetail')) {
      setLogo(logo2); // 특정 메뉴에서 로고 변경
    } else {
      setLogo(logo1); // 기본 로고로 변경
    }
  };

  const handleScrollToCarType = () => {
    const section = document.getElementById('car-swiper-section');
    if (section) {
      const yOffset = -70; // 네비게이션 바 높이 고려
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' }); // 부드러운 스크롤
    }
  };

  return (
    <div
      className='navbar'
      style={{ ...styles.navbar, backgroundColor: navBarBackground }}>
      <Link
        className='navbarlogo'
        to='/'
        style={styles.navbarlogo}>
        <img
          src={logo}
          width='100px'
          alt='logo'
          style={styles.logoImage}
        />
      </Link>

      <Link
        to='/'
        style={{
          ...styles.navbarMenu,
          color: navBarTextColor,
        }}>
        <div
          className='navbarMenu'
          onClick={() => {
            handleScrollToCarType(); // 스크롤 이동 함수 다시 추가
          }}
          style={{ color: navBarTextColor }}>
          전기차 종류
        </div>
      </Link>

      <span
        className='divider'
        style={{ ...styles.divider, color: navBarTextColor }}>
        |
      </span>

      <Link
        className='navbarMenu'
        to='/Carbattery'
        onClick={() => handleMenuClick('Carbattery')}
        style={{
          ...styles.navbarMenu,
          backgroundColor: isActive('/Carbattery') ? 'rgb(80,80,80)' : 'transparent',
          color: isActive('/Carbattery') ? 'white' : navBarTextColor,
          borderRadius: isActive('/Carbattery') ? '15px' : '0',
        }}>
        전기차 배터리 조회
      </Link>

      <span
        className='divider'
        style={{ ...styles.divider, color: navBarTextColor }}>
        |
      </span>

      <Link
        className='navbarMenu'
        to='/Carnews'
        onClick={() => handleMenuClick('Carnews')}
        style={{
          ...styles.navbarMenu,
          backgroundColor: isActive('/Carnews') ? 'rgb(80,80,80)' : 'transparent',
          color: isActive('/Carnews') ? 'white' : navBarTextColor,
          borderRadius: isActive('/Carnews') ? '15px' : '0',
        }}>
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
