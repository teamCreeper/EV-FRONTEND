import React from "react";
import logo3 from "../images/logo3.JPG";
import { Searchbar } from "./Searchbar";
import Hyundaimodel from "./Hyundaimodel";
import Swipertest from "./Swipertest";
import Kiamodel from "./Kiamodel";//승준 수정
function Main() {
  return (
    <div>
      <img src={logo3} width="100%" height="600px" alt="logo3" />
      <Searchbar />
      <Hyundaimodel />
      <Kiamodel />
      <Swipertest />
    </div>
  );
}

export default Main;
