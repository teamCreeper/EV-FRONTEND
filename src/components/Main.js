import React from "react";

import MainCar from "./MainCar";
import { Searchbar } from "./Searchbar";
import Hyundaimodel from "./Hyundaimodel";
import Swipertest from "./Swipertest";
import Kiamodel from "./Kiamodel";
import Audimodel from "./Audimodel";
import Bmwmodel from "./Bmwmodel";
import Benzmodel from "./Benzmodel";

// 스타일을 객체로 분리

function Main() {
  return (
    <div>
      <MainCar />
      <Searchbar />
      <Hyundaimodel />
      <Kiamodel />
      <Audimodel />
      <Bmwmodel />
      <Benzmodel />
      <Swipertest />
    </div>
  );
}

export default Main;
