import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import electricVehicles from "./ElectricVehicles";

import China from '../assets/images/CN.png';
import Korea from '../assets/images/KR.png';
function Carbattery() {
  // URL에서 car_num 가져오기
  const { car_num } = useParams();

  // 더미 데이터 (서버가 열려 있지 않아 임시로 사용)
  const companies = electricVehicles;
  // 차량을 battery_manufacturer로 그룹화
  const groupedVehicles = companies.reduce((acc, vehicle) => {
    const { battery_manufacturer } = vehicle;
    if (!acc[battery_manufacturer]) {
      acc[battery_manufacturer] = [];
    }
    acc[battery_manufacturer].push(vehicle);
    return acc;
  }, {});

  // axios 사용 예시
  // const fetchData = () => {
  //   axios
  //     .get("https://port-0-java-springboot-m0uuimo09c0b9ce4.sel4.cloudtype.app/api/carDetail", {
  //       params: { carId: car_num },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("데이터 가져오기 실패:", error);
  //     });
  // };

  const [showAll, setShowAll] = useState(false); // 차량 목록 표시 여부
  const [showKoreanOnly, setShowKoreanOnly] = useState(false); // 국산 배터리만 보기 체크박스 상태


  const Card = ({ manufacturer, vehicles = [] }) => {
    const getCountryFlagSrc = (battery_country) => {
      switch (battery_country) {
        case 'China':
          return China;
        // 다른 국가도 추가 가능
        default:
          return Korea; // 기본 국기 경로
      }
    };
    
     // 국산 배터리만 보기 상태에 따라 차량 필터링
  const filteredVehicles = showKoreanOnly 
  ? vehicles.filter(v => v.battery_country === 'Korea') 
  : vehicles;

    // 보여줄 차량 목록 결정
    const displayedVehicles = showAll ? filteredVehicles : filteredVehicles.slice(0, 4);

    return (
    <div style={styles.card}>
      <div style={styles.header}>
      <img src={getCountryFlagSrc(filteredVehicles[0]?.battery_country)} alt={`${filteredVehicles[0]?.battery_country} 국기`} style={styles.flag} />
      <h2>{manufacturer}</h2>
      </div>
      <div style={styles.vehicleContainer}>
          {displayedVehicles.map((vehicle, index) => (
          <div key={index} style={styles.vehicleItem}>
            <img src={vehicle.image} alt={vehicle.name} style={styles.vehicleImage} />
            <div style={styles.vehicleText}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={vehicle.logo} alt={`${vehicle.brand} 로고`} style={styles.logo} />
                <p style={styles.brand}>{vehicle.brand}</p>
              </div>
              <p style={styles.name}>{vehicle.name}</p>
            </div>
          </div>
        ))}
      </div>
      {vehicles.length > 4 && (
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <button style={styles.moreButton} onClick={() => setShowAll(!showAll)}>
            {showAll ? '접기' : '더보기'}
          </button>
          </div>
        )}
    </div>
  );
};

  return (
    <div style={{ marginTop: '50px' }}>
      <div style={styles.container}>
        <div style={styles.title}>전기차 배터리 조회</div>
        <div style={styles.checkboxContainer}>
        <input
            type="checkbox"
            id="made-in-Korea"
            style={styles.checkbox}
            checked={showKoreanOnly}
            onChange={() => setShowKoreanOnly(!showKoreanOnly)}
          />
          <label htmlFor="made-in-Korea">국산 배터리만 보기</label>
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <div style={styles.cardGrid}>
        {Object.entries(groupedVehicles).map(([manufacturer, vehicles]) => {
          // 국산 배터리만 보기 상태에 따라 차량 필터링
          const filteredVehicles = showKoreanOnly 
            ? vehicles.filter(v => v.battery_country === 'Korea') 
            : vehicles;

          // 필터링된 차량이 있는 경우에만 카드 표시
          return filteredVehicles.length > 0 ? (
            <Card
              key={manufacturer}
              manufacturer={manufacturer}
              vehicles={filteredVehicles}
            />
          ) : null;
          })}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
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
    padding: '20px',
    backgroundColor: 'orange',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  flag: {
    width: '40px',
    height: 'auto',
    marginRight: '10px',
  },
  logo: {
    width: '13%',
    marginRight: '10px',
  },
  vehicleContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  vehicleItem: {
    textAlign: 'center',
  },
  vehicleImage: {
    width: '100%',
    height: 'auto',
  },
  vehicleText: {
    marginTop: '10px',
  },
  brand:{
    margin: 0,
    display: 'flex',
   },
  name: {
    margin: 0,
    display: 'flex',
    fontSize: 'xx-large',
  },
  moreButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'orange',
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    borderBottom: '1px solid black',
    cursor: 'pointer',
  },
};

export default Carbattery;