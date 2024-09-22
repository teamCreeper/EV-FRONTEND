import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';
import logo1 from '../assets/images/mainEVImg.png';

function Nav() {
  return (
    <div className='navbar'>
      <Link
        className='navbarlogo'
        to={'/'}>
        <img
          src={logo1}
          width='100px'
          alt='logo2'
        />
      </Link>
      <Link
        className='navbarMenu'
        to={'/Cartype'}>
        전기차 종류
      </Link>
      <span className='divider'>|</span>
      <Link
        className='navbarMenu'
        to={'/Carbattery'}>
        전기차 배터리 조회
      </Link>
      <span className='divider'>|</span>
      <Link
        className='navbarMenu'
        to={'/Carnews'}>
        전기차 관련뉴스
      </Link>
    </div>
  );
}

export default Nav;
