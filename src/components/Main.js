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
