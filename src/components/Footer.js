// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../logo.svg';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Company Logo" className="footer-logo" />
      <div className="footer-text">
        <p>COPYRIGHT &copy; CREEPER. All RIGHTS RESERVED.</p>
        <p>경기도 용인시 기흥구 강남로 40 강남대학교</p>
      </div>
     
    </footer>
  );
}

export default Footer;
