import React from 'react';
import './Searchbar.css';

export function Searchbar({ value, onChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    onSearch(); // 검색 함수 호출
  };
  
  return (
    <form className='searchbar' onSubmit={handleSubmit}> 
      <span className='search'>전기차 모델 검색</span>

      <div className='input-group'>
        <input
        type='search'
        className='input1'
        value={value}
        onChange={onChange}
      />

      <button type='submit' className='search-btn'>
        검색
      </button>
      </div>
    </form>
  );
}