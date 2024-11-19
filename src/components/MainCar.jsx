import React from 'react';

import mainCarImg from '../assets/images/mainCarImg.png';
import mainCarTextImg from '../assets/images/mainCarTextImg.png';

function MainCar() {
  return (
    <div style={styles.mainCardiv}>
      <div style={styles.textContainer}>
        <img
          src={mainCarTextImg}
          style={styles.mainCarTextImg}
          alt='mainCarTextImg'
        />
      </div>

      {/* mainEVImg 배경 이미지 */}
      <img
        src={mainCarImg}
        style={styles.mainCarImg}
        alt='mainCarImg'
      />
    </div>
  );
}

const styles = {
  textContainer: {
    display: 'flex', // Flexbox 사용
    justifyContent: 'center', // 가로 가운데 정렬
    alignItems: 'center', // 세로 가운데 정렬
    width: '100%',
    height: 'auto',
    backgroundColor: 'black',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  mainCarTextImg: {
    width: '30%', // 필요에 맞게 크기 조정
    transform: 'translateX(-180px)', // 왼쪽으로 살짝 이동 (값을 조정 가능)
  },
  mainCarImg: {
    width: '100%',
  },
  mainCardiv: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default MainCar;
