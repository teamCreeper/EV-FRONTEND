import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React, useState } from 'react';
import Carbattery from './components/Carbattery';
import Carnews from './components/Carnews';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CarDetail from './components/CarDetail';

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  if (activeMenu === 'CarDetail') {
    console.log('Main 성공, CarDetail 페이지로 이동합니다.');
  }

  return (
    <div style={styles.root}>
      <BrowserRouter>
        <div style={styles.app}>
          <Nav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <Routes>
            <Route
              path="/"
              element={<Main setActiveMenu={setActiveMenu} />} // Main 컴포넌트에 setActiveMenu 전달
            />
            <Route path="/CarDetail" element={<Main />} />
            <Route path="/CarDetail/:car_num" element={<CarDetail />} /> {/* 수정: car_num 파라미터 추가 */}
            <Route path="/Carnews" element={<Carnews />} />
            <Route path="/Carbattery" element={<Carbattery />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

// 스타일 객체 정의
const styles = {
  root: {
    fontFamily: 'Pretendard',
  },
  app: {
    width: 'auto',
    height: 'auto',
    margin: 0,
    padding: 0,
  },
};

export default App;
