import React, { useState, useEffect, useRef } from 'react';

import refreshImg from '../assets/images/refresh.png'; // 새로고침 이미지 가져오기

export function Searchbar({ value, onChange, onSearch, selectedBrand, onBrandChange, vehicles }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const suggestionsRef = useRef(null); // 자동완성 목록 참조

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    onSearch(); // 검색 함수 호출
  };

  const handleClickOutside = (e) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
      setShowSuggestions(false); // 자동완성 목록 외부 클릭 시 숨기기
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너를 추가하고, 언마운트될 때 제거
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (suggestion) => {
    onChange({ target: { value: suggestion } });
    setShowSuggestions(false); // 클릭 후 자동완성 목록 숨기기
    onSearch(suggestion);
  };

  const handleSuggestionMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleSuggestionMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      // 아래 화살표: hoveredIndex 증가
      setHoveredIndex((prevIndex) => Math.min(prevIndex + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      // 위 화살표: hoveredIndex 감소
      setHoveredIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter' && hoveredIndex !== null) {
      // Enter 키: 선택된 항목으로 검색
      onChange({ target: { value: suggestions[hoveredIndex] } });
      onSearch(suggestions[hoveredIndex]);
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    if (value) {
      const filteredSuggestions = vehicles
        .map((vehicle) => vehicle.name) // 차량 이름 목록
        .filter((vehicleName) => vehicleName.toLowerCase().includes(value.toLowerCase())); // 검색어 포함되는 차량 이름 필터링
      setSuggestions(filteredSuggestions);

      if (filteredSuggestions.some((suggestion) => suggestion.toLowerCase() === value.toLowerCase() || filteredSuggestions.length === 0)) {
        setShowSuggestions(false); // 검색어와 일치하면 자동완성 목록 숨기기
      } else {
        setShowSuggestions(true); // 검색어와 일치하지 않으면 자동완성 목록 표시
      }
    } else {
      setShowSuggestions(false); // 검색어가 비어있으면 자동완성 목록 숨기기
    }
  }, [value, vehicles]);

  // 새로고침 버튼
  const handleRefreshClick = () => {
    localStorage.setItem('scrollPosition', 1000); // 원하는 Y 좌표 설정
    window.location.reload(); // 페이지 새로고침
  };

  // useEffect를 통해 컴포넌트가 마운트될 때 스크롤 위치 설정
  useEffect(() => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo({ top: parseInt(scrollPosition), behavior: 'smooth' });
      localStorage.removeItem('scrollPosition'); // 저장된 스크롤 위치 제거
    }
  }, []);

  return (
    <form style={styles.searchbar} onSubmit={handleSubmit}>
      <span style={styles.search}>전기차 모델 검색</span>

      <div style={styles.inputGroup}>
        <button type="button" style={styles.refreshBtn} onClick={handleRefreshClick}>
          <img src={refreshImg} style={{ height: '30px' }} alt="refresh" />
        </button>
        <select style={styles.dropdown} value={selectedBrand} onChange={(e) => onBrandChange(e.target.value)}>
          <option value="0">전체</option>
          <option value="1">현대</option>
          <option value="2">제네시스</option>
          <option value="3">기아</option>
          <option value="4">아우디</option>
          <option value="5">BMW</option>
          <option value="6">벤츠</option>
        </select>

        <input
          type="search"
          style={styles.input1}
          value={value}
          onChange={onChange}
          onFocus={() => setShowSuggestions(true)} // 입력 시 자동완성 목록 표시
          onKeyDown={handleKeyDown} // 키보드 이벤트 처리
        />
        <button type="submit" style={styles.searchBtn}>
          검색
        </button>
        {showSuggestions && suggestions.length > 0 && (
          <ul
            style={styles.suggestionsList}
            ref={suggestionsRef} // 자동완성 목록에 ref 연결
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                style={{
                  ...styles.suggestionItem,
                  ...(hoveredIndex === index ? styles.suggestionItemHover : {}), // 선택된 항목에 스타일 적용
                }}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => handleSuggestionMouseEnter(index)}
                onMouseLeave={handleSuggestionMouseLeave}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}

const styles = {
  searchbar: {
    width: '100%',
    backgroundColor: '#373737',
    padding: '30px 0px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '-5px',
    justifyContent: 'space-between',
    position: 'relative',
  },
  search: {
    fontSize: '25px',
    marginLeft: '120px',
    marginTop: '10px',
    color: 'white',
    fontWeight: 'bold',
  },
  refreshBtn: {
    height: '30px',
    padding: '0 10px',
    backgroundColor: 'transparent',
    border: '0',
    cursor: 'pointer',
  },
  inputGroup: {
    marginRight: '120px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    position: 'relative',
  },
  dropdown: {
    width: '100px',
    height: '30px',
    backgroundColor: '#373737',
    border: '1px solid white',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  input1: {
    width: '400px',
    height: '30px',
    border: '1px solid white',
    backgroundColor: '#373737',
    color: 'white',
  },
  searchBtn: {
    height: '30px',
    padding: '0 20px',
    backgroundColor: '#D9D9D9',
    color: 'black',
    fontWeight: 'bold',
    border: '1px solid white',
    cursor: 'pointer',
  },
  suggestionsList: {
    position: 'absolute',
    top: '100%',
    left: '170px',
    backgroundColor: '#444444',
    color: '#fff',
    width: '400px',
    maxHeight: '245px',
    overflow: 'auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  suggestionItem: {
    padding: '10px 12px',
    cursor: 'pointer',
    borderBottom: '1px solid #444',
    height: '20px',
  },
  suggestionItemHover: {
    backgroundColor: '#555',
  },
};
