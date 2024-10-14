import React from 'react';
import CarImageDB from './CarImageDB.js'; // 더미 데이터 가져오기

function Carbattery() {
  return (
    <div style={{ marginTop: '50px' }}>
      <div style={styles.container}>
        {/* 타이틀 영역 */}
        <div style={styles.title}>전기차 배터리 조회</div>

        {/* 체크박스 영역 */}
        <div style={styles.checkboxContainer}>
          <input
            type='checkbox'
            id='made-in-Korea'
            style={styles.checkbox}
          />
          <label htmlFor='made-in-Korea'>국산 배터리만 보기</label>
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <div style={styles.cardGrid}>
          {/* CATL Section */}
          <div style={styles.card}>
            <div style={styles.header}>
              <img
                src='/path/to/catl-logo.png'
                alt='CATL'
                style={styles.logo}
              />
              <h2>CATL</h2>
            </div>
            <div style={styles.vehicleContainer}>
              <img
                src='/path/to/vehicle1.png'
                alt='코나 일렉트릭'
                style={styles.vehicleImage}
              />
              <img
                src='/path/to/vehicle2.png'
                alt='니로 EV'
                style={styles.vehicleImage}
              />
            </div>
            <button style={styles.moreButton}>더보기</button>
          </div>

          {/* LG 에너지 솔루션 Section */}
          <div style={styles.card}>
            <div style={styles.header}>
              <img
                src='/path/to/lg-logo.png'
                alt='LG 에너지 솔루션'
                style={styles.logo}
              />
              <h2>LG 에너지 솔루션</h2>
            </div>
            <div style={styles.vehicleContainer}>
              <img
                src='/path/to/vehicle3.png'
                alt='E-tron GT'
                style={styles.vehicleImage}
              />
              <img
                src='/path/to/vehicle4.png'
                alt='Q4 E-tron'
                style={styles.vehicleImage}
              />
            </div>
            <button style={styles.moreButton}>더보기</button>
          </div>

          {/* 삼성SDI Section */}
          <div style={styles.card}>
            <div style={styles.header}>
              <img
                src='/path/to/samsung-logo.png'
                alt='삼성SDI'
                style={styles.logo}
              />
              <h2>삼성SDI</h2>
            </div>
            <div style={styles.vehicleContainer}>
              <img
                src='/path/to/vehicle5.png'
                alt='i7'
                style={styles.vehicleImage}
              />
              <img
                src='/path/to/vehicle6.png'
                alt='i4'
                style={styles.vehicleImage}
              />
            </div>
            <button style={styles.moreButton}>더보기</button>
          </div>

          {/* SK 이노베이션 Section */}
          <div style={styles.card}>
            <div style={styles.header}>
              <img
                src='/path/to/sk-logo.png'
                alt='SK 이노베이션'
                style={styles.logo}
              />
              <h2>SK 이노베이션</h2>
            </div>
            <div style={styles.vehicleContainer}>
              <img
                src='/path/to/vehicle7.png'
                alt='아이오닉6'
                style={styles.vehicleImage}
              />
              <img
                src='/path/to/vehicle8.png'
                alt='아이오닉5'
                style={styles.vehicleImage}
              />
            </div>
            <button style={styles.moreButton}>더보기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginLeft: '80px',
    marginRight: '80px',
    backgroundColor: 'rgb(80,80,80)',
    display: 'flex',
    justifyContent: 'space-between', // 양쪽 끝으로 정렬
    alignItems: 'center', // 수직 정렬
    padding: '10px 0', // 위아래 패딩 추가 (선택사항)
  },
  title: {
    marginTop: '10px',
    fontSize: '60px',
    marginLeft: '40px',
    fontWeight: 400,
    fontFamily: 'JalnanGothic',
    color: 'white',
  },
  checkboxContainer: {
    marginRight: '20px',
    fontSize: '30px',
    fontWeight: 400,
    fontFamily: 'JalnanGothic',
    color: 'white',
  },
  checkbox: {
    transform: 'scale(2)',
    marginRight: '15px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '80px 30px',
    padding: '0 80px',
  },
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  logo: {
    width: '40px',
    marginRight: '10px',
  },
  vehicleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  vehicleImage: {
    width: '45%',
    height: 'auto',
  },
  moreButton: {
    backgroundColor: '#f8f8f8',
    border: '1px solid #ccc',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Carbattery;
