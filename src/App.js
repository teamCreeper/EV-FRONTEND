import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Carbattery from './components/Carbattery';
import Carnews from './components/Carnews';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CarDetail from './components/CarDetail';

function App() {
  return (
    <div style={styles.root}>
      <BrowserRouter>
        <div style={styles.app}>
          <Nav />
          <Routes>
            <Route
              path='/'
              element={<Main />}
            />
            <Route
              path='/CarDetail'
              element={<Main />}
            />
            <Route
              path='/CarDetail/:car_num'
              element={<CarDetail />}
            />{' '}
            {/* 수정: car_num 파라미터 추가 */}
            <Route
              path='/Carnews'
              element={<Carnews />}
            />
            <Route
              path='/Carbattery'
              element={<Carbattery />}
            />
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
