import React, { useState } from "react";
import MainCar from "./MainCar";
import { Searchbar } from "./Searchbar";
import axios from "axios";
import Hyundaimodel from "./Hyundaimodel";
import Kiamodel from "./Kiamodel";
import Audimodel from "./Audimodel";
import Bmwmodel from "./Bmwmodel";
import Benzmodel from "./Benzmodel";
import "./Main.css";

function Main() {
  const [searchValue, setSearchValue] = useState(""); // 검색 값에 대한 상태
  const [Component, setComponent] = useState(null); // 어떤 컴포넌트를 보여줄지에 대한 상태
  const [loading, setLoading] = useState(false); // 서버 통신을 위한 로딩 상태
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메세지 관리하는 상태
  const [showAllBrands, setShowAllBrands] = useState(true); // 모든 브랜드를 보여줄지 여부를 관리하는 상태

  const handleSearch = () => {
    if (!searchValue) {
      setErrorMessage("검색어를 입력해주세요.");
      return;
    }

    setLoading(true);
    setErrorMessage(""); // 이전 에러 메시지 초기화

    axios
      .post("http://localhost:8080/api/search", null, {
        params: {
          carName: searchValue, // POST 요청의 쿼리 파라미터로 carName 전송
        },
      })
      .then(async (response) => {
        const jsFileName = response.data.jsFile;
        if (!jsFileName) {
          setErrorMessage("해당 모델에 맞는 JS 파일을 찾을 수 없습니다.");
          setLoading(false);
          return;
        }
        try {
          const { default: LoadedComponent } = await import(`./${jsFileName}`);
          setComponent(() => LoadedComponent);
          setShowAllBrands(false); // 검색 결과가 있으면 모든 브랜드를 숨김
        } catch (error) {
          setErrorMessage("컴포넌트를 로드하는 데 실패했습니다.");
        } finally {
          setLoading(false);
        }
      })
      .catch((error) => {
        setErrorMessage("검색에 실패했습니다. 다시 시도해주세요.");
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
      <div className="swiperContainer">
        {loading ? (
          <div>로딩 중...</div>
        ) : errorMessage ? (
          <div className="error">{errorMessage}</div>
        ) : showAllBrands ? (
          // 검색 전, 모든 브랜드 보여주기
          <>
            <Hyundaimodel />
            <Kiamodel />
            <Audimodel />
            <Bmwmodel />
            <Benzmodel />
          </>
        ) : (
          // 검색 결과로 해당 모델만 보여주기
          Component && <Component />
        )}
      </div>
    </div>
  );
}

export default Main;
