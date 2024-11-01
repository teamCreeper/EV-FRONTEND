import React from 'react';

export function Searchbar({ value, onChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    onSearch(); // 검색 함수 호출
  };

  return (
    <form style={styles.searchbar} onSubmit={handleSubmit}>
      <span style={styles.search}>전기차 모델 검색</span>

      <div style={styles.inputGroup}>
        <input type="search" style={styles.input1} value={value} onChange={onChange} />

        <button type="submit" style={styles.searchBtn}>
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
    alignItems: 'center', // 세로 가운데 정렬
    marginTop: '-5px',
    justifyContent: 'space-between', // 양 끝에 배치
  },
  search: {
    fontSize: '25px',
    marginLeft: '120px',
    marginTop: '10px',
    color: 'white',
    fontWeight: 'bold',
  },
  inputGroup: {
    marginRight: '120px',
  },
  input1: {
    marginTop: '20px',
    marginLeft: '10px',
    width: '500px',
    height: '30px',
    border: '1px solid white',
    backgroundColor: '#373737',
    color: 'white',
  },
  searchBtn: {
    marginTop: '20px',
    marginLeft: '0',
    height: '30px',
    padding: '0 20px',
    backgroundColor: '#D9D9D9',
    color: 'black',
    fontWeight: 'bold',
    border: '1px solid white',
    cursor: 'pointer',
  },
};
