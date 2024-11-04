import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import electricVehicles from "./ElectricVehicles";

import China from '../assets/images/CN.png';
import Korea from '../assets/images/KR.png';

function Carbattery() {
  const [expandedCompanies, setExpandedCompanies] = useState({}); // 각 회사별 확장 상태 관리
  const [currentPages, setCurrentPages] = useState({}); // 각 회사별 현재 페이지 관리
  const vehiclesPerPage = 16;
  const companies = electricVehicles;// 더미 데이터 (서버가 열려 있지 않아 임시로 사용)
  const [showKoreanOnly, setShowKoreanOnly] = useState(false); // 국산 배터리만 보기 체크박스 상태

  // 더보기 버튼을 눌렀을 때 동작
const handleMoreButtonClick = (manufacturer) => {
  setExpandedCompanies((prevState) => ({
    ...prevState,
    [manufacturer]: !prevState[manufacturer],
  }));
};
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
  const handlePageChange = (manufacturer, direction) => {
    setCurrentPages((prevState) => {
      const currentPage = currentPages[manufacturer] || 1;
      const newPage = direction === "next" ? currentPage + 1 : currentPage - 1;
      return { ...prevState, [manufacturer]: newPage };
    });
  };

  const Card = ({ manufacturer, vehicles = []}) => {
    const isExpanded = expandedCompanies[manufacturer] || false; // 현재 회사의 확장 상태
  const currentPage = currentPages[manufacturer] || 1; // 현재 페이지
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  
  const displayedVehicles = isExpanded
    ? vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle)
    : vehicles.slice(0, 4);

    const totalPages = Math.ceil(vehicles.length / vehiclesPerPage);

    const vehicleContainerStyle = {
      ...styles.vehicleContainer,
      gridTemplateColumns: isExpanded ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
    };

    const getCountryFlagSrc = (battery_country) => {
      switch (battery_country) {
        case 'China':
          return China;
        // 다른 국가도 추가 가능
        default:
          return Korea; // 기본 국기 경로
      }
    };

    return (
    <div style={styles.card}>
      <div style={styles.header}>
      <img 
      src={getCountryFlagSrc(vehicles[0]?.battery_country)}
      alt={`${vehicles[0]?.battery_country} 국기`}
      style={styles.flag} />
      <h2>{manufacturer}</h2>
      </div>
      <div style={vehicleContainerStyle}> {/* 수정된 부분 */}
      {displayedVehicles.map((vehicle, index) => (
          <div key={index}
          style={styles.vehicleItem}
          onClick={() => {
            // 페이지 이동 처리
            window.location.href = `/CarDetail/${vehicle.car_num}`;
          }}
          className='card' // 애니메이션 효과를 위한 클래스 추가
          >
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
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={styles.moreButton}
            onClick={() => handleMoreButtonClick(manufacturer)}
          >
            {isExpanded ? "접기" : "더보기"}
          </button>
        </div>
      )}
      {isExpanded && totalPages > 1 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{
             ...styles.paginationButton,
             ...(currentPage === 1 ? styles.paginationButtonDisabled : {}),
            }}
            onClick={() => handlePageChange(manufacturer, "prev")}
            disabled={currentPage === 1}
          >
            
            &lt;
          </button>
          <span>{` ${currentPage} / ${totalPages} `}</span>
          <button
            style={{
              ...styles.paginationButton,
              ...(currentPage === totalPages ? styles.paginationButtonDisabled : {}),
            }}
            onClick={() => handlePageChange(manufacturer, "next")}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
      </div>
        )}
      </div>
  );
};

const isAnyCardExpanded = Object.values(expandedCompanies).some(expanded => expanded); // 최소 하나의 카드가 확장된 상태인지 확인

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
      <div style={{
        ...styles.cardGrid,
        gridTemplateColumns: isAnyCardExpanded ? '1fr' : 'repeat(2, 1fr)', // 조건부 그리드 템플릿
      }}>        {Object.entries(groupedVehicles).map(([manufacturer, vehicles]) => {
           // 다른 카드 숨기기: 현재 확장된 카드만 보여줌
        const isExpanded = expandedCompanies[manufacturer] || false;
        if (Object.values(expandedCompanies).includes(true) && !isExpanded) {
          return null;
        }
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