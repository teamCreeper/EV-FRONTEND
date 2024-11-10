import React, { useEffect, useState, useCallback } from 'react';
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

const brandNames = {
  0: '전체',
  1: '현대',
  2: '제네시스',
  3: '기아',
  4: '아우디',
  5: 'BMW',
  6: '벤츠',
};

function Main() {
  const [searchValue, setSearchValue] = useState(''); // 검색어 상태
  const [selectedBrand, setSelectedBrand] = useState('0'); // 브랜드 선택, 초기값 '0' (전체)
  const [searchResults, setSearchResults] = useState([]); // 검색 결과
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // 검색 버튼 클릭 시 업데이트되는 검색어
  const [hasSearched, setHasSearched] = useState(false); // 검색이 실행된 여부

  const hyundaiVehicles = electricVehicles.filter((vehicle) => vehicle.brand === 'Hyundai');
  const kiaVehicles = electricVehicles.filter((vehicle) => vehicle.brand === 'Kia');
  const audiVehicles = electricVehicles.filter((vehicle) => vehicle.brand === 'Audi');
  const bmwVehicles = electricVehicles.filter((vehicle) => vehicle.brand === 'BMW');
  const benzVehicles = electricVehicles.filter((vehicle) => vehicle.brand === 'Mercedes-Benz');

  const navigate = useNavigate(); // 추가
  const handleCarClick = (carId) => {
    navigate(`/carDetail/${carId}`);
  };

  const handleSearch = useCallback(() => {
    setLoading(true);
    setErrorMessage('');
    axios
      .get('https://port-0-java-springboot-m0uuimo09c0b9ce4.sel4.cloudtype.app/api/allCar')
      .then((response) => {
        const vehicles = response.data;
        const filteredVehicles = vehicles.filter((vehicle) => {
          const matchesBrand = selectedBrand === '0' || vehicle.carBrand.brandId === parseInt(selectedBrand);
          const matchesSearchValue = searchValue ? vehicle.carName.toLowerCase().includes(searchValue.toLowerCase()) : true;
          return matchesBrand && matchesSearchValue;
        });

        if (!filteredVehicles || filteredVehicles.length === 0) {
          setErrorMessage('검색 결과가 없습니다.');
        } else {
          const vehiclesWithImages = filteredVehicles.map((vehicle) => {
            const matchingVehicle = electricVehicles.find((v) => v.car_num === vehicle.carId);
            return {
              ...vehicle,
              name: matchingVehicle ? matchingVehicle.name : vehicle.carName,
              image: matchingVehicle ? matchingVehicle.image : null,
              logo: matchingVehicle ? matchingVehicle.logo : null,
            };
          });
          setSearchResults(vehiclesWithImages);
        }
      })
      .catch((error) => {
        setErrorMessage('검색에 실패했습니다. 다시 시도해주세요.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedBrand, searchValue]);

  const handleBrandChange = (brandId) => {
    setSelectedBrand(brandId);
    setSearchTerm(brandNames[brandId]);
    setHasSearched(true);
  };

  const handleSearchButtonClick = (searchTermFromSuggestion = null) => {
    const term = searchTermFromSuggestion || (searchValue.length > 0 ? searchValue : brandNames[selectedBrand]);
    setSearchTerm(term); // 검색어 업데이트
    setHasSearched(true); // 검색 플래그 업데이트
  };

  useEffect(() => {
    if (hasSearched) {
      handleSearch();
    }
  }, [selectedBrand, searchValue, hasSearched, handleSearch]);

  useEffect(() => {
    if (searchValue === '') {
      setSearchTerm(brandNames[selectedBrand]);
    } else if (hasSearched) setSearchTerm(searchValue);
  }, [searchValue, selectedBrand, hasSearched]);

  return (
    <div>
      <MainCar />
      <Searchbar
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearchButtonClick}
        selectedBrand={selectedBrand}
        onBrandChange={handleBrandChange}
        vehicles={electricVehicles} // 차량 데이터를 Searchbar에 전달
      />
      <div
        id='car-swiper-section'
        style={styles.swiperContainer}
      >
        {loading ? (
          <div>로딩 중...</div>
        ) : errorMessage ? (
          <div className='error'>{errorMessage}</div>
        ) : searchResults.length > 0 ? (
          <SearchResult
            results={searchResults}
            searchTerm={searchTerm}
            onCarClick={handleCarClick}
          />
        ) : !hasSearched ? (
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
          <div>검색 결과가 없습니다.</div>
        )}
      </div>
    </div>
  );
}

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
