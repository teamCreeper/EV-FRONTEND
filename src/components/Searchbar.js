import React from "react";
import "./Searchbar.css";

export function Searchbar({ value, onChange }) {
  return (
    <div className="searchbar">
      <span className="search">전기차 모델 검색</span>
      <input
        type="search"
        className="input1"
        placeholder="제조사"
        value={value}
        onChange={onChange}
      />
      <input
        type="search"
        className="input2"
        placeholder="차종 검색"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
