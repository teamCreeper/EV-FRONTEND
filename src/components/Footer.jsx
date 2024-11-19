import React from 'react';
import MainEVlogo from '../assets/images/MainEVlogo.png';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.contents}>
        <img src={MainEVlogo} width="60px" alt="" />
        <h2 style={styles.copyright}>
          COPYRIGHT © CREEPER. ALL RIGHTS RESERVED.
          <br />
          경기도 용인시 기흥구 강남로 40 강남대학교
        </h2>
      </div>
    </footer>
  );
};

// 스타일 객체 정의
const styles = {
  footer: {
    height: '150px',
    backgroundColor: '#dde0ea',
  },
  contents: {
    width: 'auto',
    maxWidth: '1500px', // 전체 푸터의 최대 너비를 설정
    height: '100%',
    display: 'flex',
    alignItems: 'center', // 수직 가운데 정렬
    justifyContent: 'space-between', // 양 끝에 배치
    margin: '0 auto',
    padding: '0 80px', // 왼쪽과 오른쪽에 약간의 패딩을 추가
  },
  copyright: {
    fontSize: '12px',
    textAlign: 'right',
    whiteSpace: 'pre-wrap', // 줄바꿈 허용
  },
};

export default Footer;
