import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import electricVehicles from './ElectricVehicles.js'; // 더미 데이터 가져오기
import China from '../assets/images/CN.png';
import Korea from '../assets/images/KR.png';

function Carbattery() {
  const [expandedCompanies, setExpandedCompanies] = useState({}); // 각 회사별 확장 상태 관리
  const [currentPages, setCurrentPages] = useState({}); // 각 회사별 현재 페이지 관리
  const [vehicles, setVehicles] = useState([]); // 서버에서 불러온 차량 데이터 상태
  const vehiclesPerPage = 16;
  const [showKoreanOnly, setShowKoreanOnly] = useState(false); // 국산 배터리만 보기 체크박스 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://port-0-java-springboot-m0uuimo09c0b9ce4.sel4.cloudtype.app/api/carBatteryInfo');
        const serverVehicles = response.data.map((vehicle) => {
          // 더미 데이터에서 해당 차량에 대한 정보 찾기
          const dummyVehicle = electricVehicles.find((ev) => ev.car_num === vehicle.carId);

          return {
            ...vehicle,
            car_num: vehicle.carId,
            battery_country: vehicle.batteryBrandCountry !== 'NO DATA' ? vehicle.batteryBrandCountry : '알 수 없음',
            battery_manufacturer: vehicle.batteryBrandName !== 'NO DATA' ? vehicle.batteryBrandName : '알 수 없음',
            name: vehicle.carName || '정보 없음',
            brand: dummyVehicle ? dummyVehicle.brand : '정보 없음', // 더미 데이터에서 brand를 가져옵니다.
            logo: dummyVehicle ? dummyVehicle.logo : null, // 더미 데이터에서 logo를 가져옵니다.
            image: dummyVehicle ? dummyVehicle.image : null, // 더미 데이터에서 image를 가져옵니다.
            batteryType: vehicle.batteryType || '정보 없음',
            capacity: vehicle.capacity || '정보 없음',
            charge_time: vehicle.charge_time || '정보 없음',
          };
        });
        setVehicles(serverVehicles);
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      }
    };

    fetchData();
  }, []);

  // 더보기 버튼을 눌렀을 때 동작
  const handleMoreButtonClick = (manufacturer) => {
    setExpandedCompanies((prevState) => ({
      ...prevState,
      [manufacturer]: !prevState[manufacturer],
    }));
  };

  const handlePageChange = (manufacturer, direction) => {
    setCurrentPages((prevState) => {
      const currentPage = currentPages[manufacturer] || 1;
      const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
      return { ...prevState, [manufacturer]: newPage };
    });
  };

  const getCountryFlagSrc = (battery_country) => {
    switch (battery_country) {
      case 'China':
        return China;
      default:
        return Korea;
    }
  };

  const navigate = useNavigate();
  const handleVehicleClick = (car_num) => {
    navigate(`/CarDetail/${car_num}`);
  };

  // 차량을 battery_manufacturer로 그룹화
  const groupedVehicles = vehicles.reduce((acc, vehicle) => {
    const { battery_manufacturer } = vehicle;
    if (!acc[battery_manufacturer]) {
      acc[battery_manufacturer] = [];
    }
    acc[battery_manufacturer].push(vehicle);
    return acc;
  }, {});

  const Card = ({ manufacturer, vehicles = [] }) => {
    const isExpanded = expandedCompanies[manufacturer] || false; // 현재 회사의 확장 상태
    const currentPage = currentPages[manufacturer] || 1; // 현재 페이지
    const indexOfLastVehicle = currentPage * vehiclesPerPage;
    const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;

    const displayedVehicles = isExpanded ? vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle) : vehicles.slice(0, 4);

    const totalPages = Math.ceil(vehicles.length / vehiclesPerPage);

    const vehicleContainerStyle = {
      ...styles.vehicleContainer,
      gridTemplateColumns: isExpanded ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
    };

    return (
      <div style={styles.card}>
        <div style={styles.header}>
          <img src={getCountryFlagSrc(vehicles[0]?.battery_country)} alt={`${vehicles[0]?.battery_country} 국기`} style={styles.flag} />
          <h2>{manufacturer}</h2>
        </div>
        <div style={vehicleContainerStyle}>
          {displayedVehicles.map((vehicle, index) => (
            <div
              key={vehicle.carId}
              style={styles.vehicleItem}
              onClick={() => handleVehicleClick(vehicle.car_num)} // 클릭 시 상세페이지로 이동
              className="card">
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
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={styles.moreButton} onClick={() => handleMoreButtonClick(manufacturer)}>
              {isExpanded ? '접기' : '더보기'}
            </button>
          </div>
        )}
        {isExpanded && totalPages > 1 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={() => handlePageChange(manufacturer, 'prev')} disabled={currentPage === 1}>
              &lt;
            </button>
            <span>{` ${currentPage} / ${totalPages} `}</span>
            <button onClick={() => handlePageChange(manufacturer, 'next')} disabled={currentPage === totalPages}>
              &gt;
            </button>
          </div>
        )}
      </div>
    );
  };

  const isAnyCardExpanded = Object.values(expandedCompanies).some((expanded) => expanded); // 최소 하나의 카드가 확장된 상태인지 확인

  return (
    <div>
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

      <div>
        <div
          style={{
            ...styles.cardGrid,
            gridTemplateColumns: isAnyCardExpanded ? '1fr' : 'repeat(2, 1fr)', // 조건부 그리드 템플릿
          }}>
          {' '}
          {Object.entries(groupedVehicles).map(([manufacturer, vehicles]) => {
            // 다른 카드 숨기기: 현재 확장된 카드만 보여줌
            const isExpanded = expandedCompanies[manufacturer] || false;
            if (Object.values(expandedCompanies).includes(true) && !isExpanded) {
              return null;
            }
            // 국산 배터리만 보기 상태에 따라 차량 필터링
            const filteredVehicles = showKoreanOnly ? vehicles.filter((v) => v.battery_country === 'Korea') : vehicles;

            // 필터링된 차량이 있는 경우에만 카드 표시
            return filteredVehicles.length > 0 ? <Card key={manufacturer} manufacturer={manufacturer} vehicles={filteredVehicles} /> : null;
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '50px',
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
    padding: '40px 80px',
  },
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    // padding: '20px',
    backgroundColor: 'white',
    transition: 'transform 0.3s ease, background-color 0.3s ease', // 애니메이션 효과 추가
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
    borderRadius: '10px',
  },
  vehicleImage: {
    width: '100%',
    height: 'auto',
  },
  vehicleText: {
    marginTop: '10px',
  },
  brand: {
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
    backgroundColor: 'white',
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    borderBottom: '1px solid black',
    cursor: 'pointer',
  },
  paginationButton: {
    padding: '10px 15px',
    backgroundColor: 'white', // 버튼 배경색
    color: 'black', // 글자색
    border: 'none', // 테두리 제거
    borderRadius: '5px', // 모서리 둥글게
    cursor: 'pointer', // 포인터 커서
    transition: 'background-color 0.3s', // 호버 시 배경색 변화
  },
  paginationButtonDisabled: {
    backgroundColor: 'white', // 비활성화 상태 배경색
    color: 'black', // 비활성화 상태 글자색
  },
};

export default Carbattery;
