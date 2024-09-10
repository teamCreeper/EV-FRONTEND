import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Carbattery from "./components/Carbattery";
import Carnews from "./components/Carnews";
import Cartype from "./components/Cartype";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
  );
}

export default App;
