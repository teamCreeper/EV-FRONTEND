import React from 'react';

export function Searchbar({ value, onChange, onSearch, selectedBrand, onBrandChange }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    onSearch(); // 검색 함수 호출
  };

  return (
    <form
      style={styles.searchbar}
      onSubmit={handleSubmit}
    >
      <span style={styles.search}>전기차 모델 검색</span>
      <div style={styles.inputGroup}>
        {/* 제조사 드롭다운 추가 */}
        <select
          style={styles.dropdown}
          value={selectedBrand}
          onChange={(e) => onBrandChange(e.target.value)}
        >
          <option value='0'>전체</option>
          <option value='1'>현대</option>
          <option value='2'>제네시스</option>
          <option value='3'>기아</option>
          <option value='4'>아우디</option>
          <option value='5'>BMW</option>
          <option value='6'>벤츠</option>
        </select>
        {/* 검색 입력과 버튼 */}
        <input
          type='search'
          style={styles.input1}
          value={value}
          onChange={onChange}
        />
        <button
          type='submit'
          style={styles.searchBtn}
        >
          검색
        </button>
      </div>
    </form>
  );
}

// 스타일 객체 정의
const styles = {
  searchbar: {
    width: '100%',
    backgroundColor: '#373737',
    padding: '30px 0px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '-5px',
    justifyContent: 'space-between',
  },
  search: {
    fontSize: '25px',
    marginLeft: '120px',
    marginTop: '10px',
    color: 'white',
    fontWeight: 'bold',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginRight: '120px',
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
};

export default Searchbar;
