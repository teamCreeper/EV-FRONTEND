import React from 'react';
import electricVehicles from './ElectricVehicles.js'; // 더미 데이터 가져오기

function SearchResult({ results, searchTerm, onCarClick }) {
  return (
    <div>
      <h3 style={styles.searchResultText}>"{searchTerm}" 검색결과</h3>

      <div style={styles.resultContainer}>
        {results.map((vehicle) => {
          const matchingVehicle = electricVehicles.find((v) => v.name === vehicle.name);

          return (
            <div
              key={vehicle.car_num}
              style={styles.card}
              onClick={() => onCarClick(vehicle.carId)} // 클릭 시 차량 상세로 이동
              className="card" // 애니메이션 효과를 위한 클래스 추가
            >
              {matchingVehicle && matchingVehicle.image && <img src={matchingVehicle.image} alt={vehicle.name} style={styles.vehicleImage} />}
              <div style={styles.vehicleInfo}>
                <h3>{vehicle.name}</h3>
                <div style={styles.brandContainer}>
                  {matchingVehicle && matchingVehicle.logo && <img src={matchingVehicle.logo} alt={vehicle.brand} style={styles.vehicleLogo} />}
                  <p>
                    {vehicle.carBrand.brandId === 1
                      ? 'Hyundai'
                      : vehicle.carBrand.brandId === 2
                      ? 'Genesis'
                      : vehicle.carBrand.brandId === 3
                      ? 'Kia'
                      : '브랜드정보없음'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  resultContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '40px',
  },
  card: {
    cursor: 'pointer',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    width: '300px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, background-color 0.3s ease', // 애니메이션 효과 추가
  },
  vehicleImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  },
  vehicleInfo: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between', // 양쪽 끝으로 정렬
    alignItems: 'center',
    whiteSpace: 'nowrap', // 텍스트를 한 줄로 유지
  },
  brandContainer: {
    display: 'flex', // flexbox 적용
    alignItems: 'center', // 수평 정렬 가운데로 맞추기
    justifyContent: 'flex-end', // 양쪽 끝으로 정렬
    gap: '10px', // 로고와 텍스트 사이 간격
  },
  vehicleLogo: {
    width: '25%', // 로고 크기 고정
    height: 'auto',
  },
  vehiclename: {
    fontSize: '20px',
  },
  searchResultText: {
    marginTop: '60px',
    marginLeft: '30px',
    fontSize: '50px',
  },
};

// CSS를 추가하여 마우스 오버 시 카드 스타일을 변경
const cardHoverStyles = `
  .card:hover {
    transform: scale(1.05);
    background-color: #f0f0f0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

// 스타일 요소 추가
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = cardHoverStyles;
document.head.appendChild(styleSheet);

export default SearchResult;
