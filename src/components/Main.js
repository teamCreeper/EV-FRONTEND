import React from 'react';
import Nav from './Nav';
import MainCar from './MainCar';
import { Searchbar } from './Searchbar';
import Hyundaimodel from './Hyundaimodel';
import Swipertest from './Swipertest';
import Kiamodel from './Kiamodel';
import Audimodel from './Audimodel';
import Bmwmodel from './Bmwmodel';
import Benzmodel from './Benzmodel';

import './Main.css';

function Main() {
  return (
    <div>
      <MainCar />

      <div style={{ backgroundColor: 'yellow' }}>여기위에 흰색 여백 어디서 나온건지 1시간동안 찾았는데 못찾겠음 수정좀 </div>
      <Searchbar />

      {/* Swiper */}

      <div className='swiperContainer'>
        <Hyundaimodel />
        <Kiamodel />
        <Audimodel />
        <Bmwmodel />
        <Benzmodel />
      </div>

      {/* test */}
      <Swipertest />
    </div>
  );
}

export default Main;
