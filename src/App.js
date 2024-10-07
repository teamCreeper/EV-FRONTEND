import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Carbattery from "./components/Carbattery";
import Carnews from "./components/Carnews";
import Cartype from "./components/Cartype";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={styles.root}>
      <BrowserRouter>
        <div style={styles.app}>
          <Nav />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Cartype" element={<Cartype />} />
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
    fontFamily: "Pretendard",
  },
  app: {
    width: "auto",
    height: "auto",
    margin: 0,
    padding: 0,
  },
};

export default App;
