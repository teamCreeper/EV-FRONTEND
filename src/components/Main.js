import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 추가
import axios from 'axios';

import MainCar from './MainCar';
import { Searchbar } from './Searchbar';
import CarSwiper from './CarSwiper';

import hyundailogo from '../assets/images/hyundailogo.png';
import kialogo from '../assets/images/kialogo.png';
import audilogo from '../assets/images/audilogo.png';
import bmwlogo from '../assets/images/bmwlogo.png';
import benzlogo from '../assets/images/benzlogo.png';

import electricVehicles from './ElectricVehicles.js'; // 더미 데이터 가져오기
import SearchResult from './SearchResult.js';

function Main() {
  const [searchValue, setSearchValue] = useState(''); // 검색 값에 대한 상태
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false); // 서버 통신을 위한 로딩 상태
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메세지 관리하는 상태
  const [showAllBrands, setShowAllBrands] = useState(true); // 모든 브랜드를 보여줄지 여부를 관리하는 상태

  const hyundaiVehicles = electricVehicles.filter((vehicle) => vehicle.brand === 'Hyundai');
  const kiaVehicles = electricVehicles.filter((vehicle) => vehicle.brand === 'Kia');
  const audiVehicles = electricVehicles.filter((vehicle) => vehicle.brand === 'Audi');
  const bmwVehicles = electricVehicles.filter((vehicle) => vehicle.brand === 'BMW');
  const benzVehicles = electricVehicles.filter((vehicle) => vehicle.brand === 'Mercedes-Benz');

  const navigate = useNavigate(); // 추가
  const handleCarClick = (carId) => {
    navigate(`/carDetail/${carId}`);
  };

  const handleSearch = () => {
    if (!searchValue) {
      setErrorMessage('검색어를 입력해주세요.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    axios
      .get('https://port-0-java-springboot-m0uuimo09c0b9ce4.sel4.cloudtype.app/api/searchCar', {
        params: {
          keyword: searchValue, // 검색어를 전달
        },
      })
      .then((response) => {
        console.log('API 응답:', response.data); // 콘솔에 API 응답 출력
        const vehicles = response.data;

        if (!vehicles || vehicles.length === 0) {
          setErrorMessage('검색 결과가 없습니다.');
          setShowAllBrands(true);
        } else {
          const vehiclesWithImages = vehicles.map((vehicle) => {
            const matchingVehicle = electricVehicles.find(
              (v) => v.car_num === vehicle.carId // carId를 기준으로 매칭
            );
            return {
              ...vehicle,
              name: matchingVehicle ? matchingVehicle.name : vehicle.carName,
              image: matchingVehicle ? matchingVehicle.image : null,
              logo: matchingVehicle ? matchingVehicle.logo : null,
            };
          });
          setSearchResults(vehiclesWithImages);
          setShowAllBrands(false);
        }
      })
      .catch((error) => {
        console.error('검색 에러:', error); // 콘솔에 에러 출력
        setErrorMessage('검색에 실패했습니다. 다시 시도해주세요.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <MainCar />
      <Searchbar
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
      />
      <div
        id='car-swiper-section'
        style={styles.swiperContainer}>
        {loading ? (
          <div>로딩 중...</div>
        ) : errorMessage ? (
          <div className='error'>{errorMessage}</div>
        ) : showAllBrands ? (
          <>
            <div style={styles.allmodel}>전체 모델 보기</div>

            <CarSwiper
              logo={hyundailogo}
              brand='Hyundai'
              images={hyundaiVehicles}
            />
            <CarSwiper
              logo={kialogo}
              brand='Kia'
              images={kiaVehicles}
            />
            <CarSwiper
              logo={benzlogo}
              brand='Benz'
              images={benzVehicles}
            />
            <CarSwiper
              logo={bmwlogo}
              brand='BMW'
              images={bmwVehicles}
            />
            <CarSwiper
              logo={audilogo}
              brand='Audi'
              images={audiVehicles}
            />
          </>
        ) : (
          <SearchResult
            results={searchResults}
            searchTerm={searchValue}
            onCarClick={handleCarClick}
          />
        )}
      </div>
    </div>
  );
}

// 스타일 객체 정의
const styles = {
  swiperContainer: {
    marginLeft: '80px',
    marginRight: '80px',
    marginBottom: '100px',
  },
  allmodel: {
    marginTop: '120px',
    marginBottom: '120px',
    marginLeft: '50px',
    fontSize: '60px',
    letterSpacing: '7.8px',
    fontWeight: 400,
    fontFamily: 'JalnanGothic',
  },
};

export default Main;
