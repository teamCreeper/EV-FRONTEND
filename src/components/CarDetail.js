import React from 'react';
import { useParams } from 'react-router-dom';

import electricVehicles from './ElectricVehicles.js'; // 더미 데이터 가져오기
import hyundailogo from '../assets/images/hyundailogo.png';

function CarDetail() {
  const { car_num } = useParams(); // URL에서 car_num을 가져오기
  const vehicle = electricVehicles.find((v) => v.car_num === parseInt(car_num));
  console.log('CarDeatil Vehicle: ', vehicle);

  if (!vehicle) {
    return <div>해당 차량 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <div style={styles.CartypetopContainer}>
        <div style={styles.CartypetopCarname}>{vehicle.name}</div>
        <div style={styles.brandContainer}>
          <div style={styles.brandlogo}>
            <img
              src={vehicle.logo}
              alt={vehicle.brand}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div style={styles.brandname}>{vehicle.brand}</div>
        </div>
      </div>
      <div style={styles.CarImage}>
        <img
          src={vehicle.image}
          alt={vehicle.name}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div style={styles.ContainerStyle}>
        <div style={styles.itemStyle}>
          <div style={styles.title}>배터리 정보</div>
          <p>테스트</p>
          <p>테스트</p>
          <p>테스트</p>
          <p>테스트</p>
          {/* 배터리 정보를 여기에 추가 */}
        </div>

        <div style={styles.itemStyle}>
          <div style={styles.title}>안전</div>

          {/* 차트나 그래프를 여기에 추가 */}
        </div>

        <div style={styles.itemStyle}>
          <div style={styles.title}>제원</div>
          {/* 차량 제원 이미지를 여기에 추가 */}
        </div>

        <div style={styles.itemStyle}>
          <div style={styles.title}>시세</div>
          {/* 시세 그래프를 여기에 추가 */}
        </div>
      </div>
    </div>
  );
}

const styles = {
  CartypetopContainer: {
    marginLeft: '80px',
    marginRight: '80px',
    backgroundColor: 'rgb(80,80,80)',
    display: 'flex',
    justifyContent: 'space-between', // 양쪽 끝으로 정렬
    alignItems: 'center', // 수직 정렬
    padding: '10px 0', // 위아래 패딩 추가 (선택사항)
  },
  CartypetopCarname: {
    fontSize: '70px',
    marginLeft: '40px',
    fontWeight: 400,
    fontFamily: 'JalnanGothic',
    color: 'white',
  },
  brandContainer: {
    display: 'flex', // 브랜드 로고와 네임을 가로로 정렬
    alignItems: 'center', // 수직 중앙 정렬
    justifyContent: 'flex-end',
    marginRight: '40px',
  },
  brandname: {
    fontSize: '40px',
    marginLeft: '20px', // 로고와 네임 사이의 여백
    fontWeight: 400,
    fontFamily: 'JalnanGothic',
    color: 'white',
  },
  brandlogo: {
    width: '30%',
  },
  CarImage: {
    marginLeft: '80px',
    marginRight: '80px',
    backgroundColor: 'white',
  },
  ContainerStyle: {
    marginLeft: '80px',
    marginRight: '80px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '20px',
    padding: '20px',
  },

  itemStyle: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    aspectRatio: '1 / 1', // 추가: 가로와 세로 비율을 1:1로 설정
    display: 'flex', // 내부 콘텐츠 수직 중앙 정렬을 위한 설정
    flexDirection: 'column',
  },
  title: {
    fontSize: '20px',
    fontFamily: 'JalnanGothic',
  },
};
export default CarDetail;
