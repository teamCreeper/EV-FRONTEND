import React from 'react';
import electricVehicles from './ElectricVehicles.js'; // 더미 데이터 가져오기

function SearchResult({ results, searchTerm }) {
  return (
    <div>
      <h2 style={styles.searchResultText}>"{searchTerm}" 검색결과</h2>

      <div style={styles.resultContainer}>
        {results.map((vehicle) => {
          // 더미 데이터에서 차량 이미지와 로고 찾기
          const matchingVehicle = electricVehicles.find((v) => v.name === vehicle.name);

          return (
            <div
              key={vehicle.car_num}
              style={styles.card}
            >
              {/* 차량 이미지 표시 */}
              {matchingVehicle && matchingVehicle.image && (
                <img
                  src={matchingVehicle.image} // 더미 데이터에서 차량 이미지 가져오기
                  alt={vehicle.name}
                  style={styles.vehicleImage}
                />
              )}
              <div style={styles.vehicleInfo}>
                <h3>{vehicle.name}</h3>

                <div style={styles.brandContainer}>
                  {/* 로고 이미지 표시 */}
                  {matchingVehicle && matchingVehicle.logo && (
                    <img
                      src={matchingVehicle.logo} // 로고 이미지 가져오기
                      alt={vehicle.brand}
                      style={styles.vehicleLogo}
                    />
                  )}

                  <p>{vehicle.brand || '정보 없음'}</p>
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
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    width: '300px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
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
    marginLeft: '60px',
    fontSize: '60px',
  },
};

export default SearchResult;
