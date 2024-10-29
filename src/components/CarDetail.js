import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import electricVehicles from './ElectricVehicles.js'; // 더미 데이터 가져오기

function CarDetail() {
  const { car_num } = useParams(); // URL에서 car_num을 가져오기
  const [vehicle, setVehicle] = useState(null);
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // 차량 기본 정보 설정
    const foundVehicle = electricVehicles.find((v) => v.car_num === parseInt(car_num));
    setVehicle(foundVehicle);
    console.log('차량 정보:', foundVehicle);

    // 차량 상세 정보 요청
    // { ex) carDetail/101 }
    //   "carId": 101,
    //   "batteryId": 1,
    //   "carPrice": "4700",
    //   "motoType": "RWD",
    //   "useableBattery": "60 kWh",
    //   "topSpeed": "185 km/h",
    //   "carRange": "330 km",
    //   "efficiency": "182 Wh/km",
    //   "batteryName": "Litium-ion",
    //   "batteryBrandName": "No Data",
    //   "batteryBrandCountry": "No Data",
    //   "ztoHundred": "8.5 sec"
    // },
    axios
      .get('https://port-0-java-springboot-m0uuimo09c0b9ce4.sel4.cloudtype.app/api/carDetail', {
        params: {
          carId: car_num, // carId 전달
        },
      })
      .then((response) => {
        console.log('차량 상세 정보:', response.data);
        setVehicleDetails(response.data);
        setSelectedOption(response.data[0]); // 기본 옵션 선택
      })
      .catch((error) => {
        console.error('차량 상세 정보 로드 실패:', error);
      });

    // 페이지 렌더링 시 스크롤을 맨 위로 이동시키는 useEffect
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 부드럽게 스크롤
  }, [car_num]);

  const handleOptionChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedOption(vehicleDetails[selectedIndex]);
  };

  if (!vehicle) {
    return <div>해당 차량 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <div style={styles.CartypetopContainer}>
        <div style={styles.CartypetopCarname}>{vehicle.name}</div>
        <div style={styles.brandContainer}>
          <div>
            <img
              src={vehicle.logo}
              alt={vehicle.brand}
              style={{ width: '100px', height: 'auto' }}
            />
          </div>
          {/* 자동차 브랜드 이름 넣을까말까 안넣는게 깔삼해보이긴 함 */}
          {/* <div style={styles.brandname}>{vehicle.brand}</div> */}
        </div>
      </div>
      <div style={styles.CarImage}>
        <img
          src={vehicle.image}
          alt={vehicle.name}
          style={{ width: '800px', height: 'auto' }}
        />
      </div>

      {/* 옵션 선택 드롭다운 */}
      <div style={styles.optionContainer}>
        <label
          htmlFor='carOptions'
          style={styles.optionLabel}>
          옵션 선택:
        </label>
        <select
          id='carOptions'
          onChange={handleOptionChange}
          style={styles.optionSelect}>
          {vehicleDetails.map((detail, index) => (
            <option
              key={index}
              value={index}>
              {`${detail.motoType}, ${detail.useableBattery}, ${detail.carPrice} 만원`}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.ContainerStyle}>
        <div style={styles.itemStyle}>
          <div style={styles.title}>배터리 정보</div>
          {selectedOption ? (
            <div>
              <p>배터리 이름: {selectedOption.batteryName}</p>
              <p>배터리 브랜드: {selectedOption.batteryBrandName}</p>
              <p>배터리 용량: {selectedOption.useableBattery}</p>
            </div>
          ) : (
            <p>배터리 정보를 불러오는 중입니다...</p>
          )}
        </div>

        <div style={styles.itemStyle}>
          <div style={styles.title}>안전</div>
          {/* 차트나 그래프를 여기에 추가 */}
        </div>

        <div style={styles.itemStyle}>
          <div style={styles.title}>제원</div>
          {selectedOption ? (
            <div>
              <p></p>
              <p>최고 속도: {selectedOption.topSpeed}</p>
              <p>주행 거리: {selectedOption.carRange}</p>
              <p>0-100 km/h: {selectedOption.ztoHundred}</p>
            </div>
          ) : (
            <p>제원 정보를 불러오는 중입니다...</p>
          )}
        </div>

        <div style={styles.itemStyle}>
          <div style={styles.title}>시세</div>
          {selectedOption ? (
            <div>
              <p>가격: {selectedOption.carPrice} 만원</p>
              <p>효율: {selectedOption.efficiency}</p>
            </div>
          ) : (
            <p>시세 정보를 불러오는 중입니다...</p>
          )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
  },
  CartypetopCarname: {
    fontSize: '70px',
    marginLeft: '40px',
    fontWeight: 400,
    fontFamily: 'JalnanGothic',
    color: 'white',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '40px',
  },
  brandname: {
    fontSize: '40px',
    marginLeft: '20px',
    fontWeight: 400,
    fontFamily: 'JalnanGothic',
    color: 'white',
  },
  CarImage: {
    marginTop: '100px',
    marginBottom: '100px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  optionContainer: {
    marginLeft: '80px',
    marginBottom: '20px',
  },
  optionLabel: {
    fontSize: '20px',
    marginRight: '10px',
  },
  optionSelect: {
    fontSize: '18px',
    padding: '5px',
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
    aspectRatio: '1 / 1',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '20px',
    fontFamily: 'JalnanGothic',
  },
};

export default CarDetail;
