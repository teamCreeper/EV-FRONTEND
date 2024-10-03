// Hyundai model:
import 아이오닉5 from '../assets/images/아이오닉5.png';
import 아이오닉6 from '../assets/images/아이오닉6.png';
import 코나일렉트릭 from '../assets/images/코나일렉트릭.png';
import 아이오닉일렉트릭 from '../assets/images/아이오닉일렉트릭.png';

// Kia model:
import EV6 from '../assets/images/EV6.png';
import EV9 from '../assets/images/EV9.png';
import NiroEV from '../assets/images/NiroEV.png';

// Mercedes-Benz model:
import EQA from '../assets/images/EQA.png';
import EQS from '../assets/images/EQS.png';
import EQE from '../assets/images/EQE.png';

// BMW model:
import iX3 from '../assets/images/BMW ix3.png';
import i4 from '../assets/images/BMW i4.png';
import i5 from '../assets/images/BMW i5.png';
import i7 from '../assets/images/BMW i7.png';
// import iX from '../assets/images/BMW iX.png';

// Audi model:
import Q4Etron from '../assets/images/Q4 E-tron.png';
import Etron from '../assets/images/E-tron.png';
import EtronGT from '../assets/images/E-tron GT.png';

const electricVehicles = [
  // brand: 'Hyundai'
  { car_num: 101, brand: 'Hyundai', name: '아이오닉 5', image: 아이오닉5 },
  { car_num: 102, brand: 'Hyundai', name: '아이오닉 6', image: 아이오닉6 },
  { car_num: 103, brand: 'Hyundai', name: '코나 일렉트릭', image: 코나일렉트릭 },
  { car_num: 104, brand: 'Hyundai', name: '아이오닉 일렉트릭', image: 아이오닉일렉트릭 },
  { car_num: 105, brand: 'Hyundai', name: '포터EV', image: '../assets/images/포터EV.png' },
  { car_num: 106, brand: 'Hyundai', name: '봉고EV', image: '../assets/images/봉고EV.png' },
  { car_num: 107, brand: 'Hyundai', name: 'EV9', image: EV9 },
  { car_num: 108, brand: 'Hyundai', name: 'GV60', image: '../assets/images/GV60.png' },
  { car_num: 109, brand: 'Hyundai', name: 'Electrified GV70', image: '../assets/images/Electrified GV70.png' },
  { car_num: 110, brand: 'Hyundai', name: 'Electrified G80', image: '../assets/images/Electrified G80.png' },

  // brand: 'Kia'
  { car_num: 201, brand: 'Kia', name: 'EV6', image: EV6 },
  { car_num: 202, brand: 'Kia', name: '니로EV', image: NiroEV },
  { car_num: 203, brand: 'Kia', name: '쏘울EV', image: 아이오닉5 },

  // brand: 'Tesla'
  { car_num: 301, brand: 'Tesla', name: '모델3', image: '../assets/images/모델3.png' },
  { car_num: 302, brand: 'Tesla', name: '모델Y', image: '../assets/images/모델Y.png' },

  // brand: 'Mercedes-Benz'
  { car_num: 401, brand: 'Mercedes-Benz', name: 'EQA', image: EQA },
  { car_num: 402, brand: 'Mercedes-Benz', name: 'EQB', image: '../assets/images/EQB.png' },
  { car_num: 403, brand: 'Mercedes-Benz', name: 'EQE', image: EQE },
  { car_num: 404, brand: 'Mercedes-Benz', name: 'EQS', image: EQS },

  // brand: 'BMW'
  { car_num: 501, brand: 'BMW', name: 'i4', image: i4 },
  { car_num: 502, brand: 'BMW', name: 'iX', image: '../assets/images/IX.png' },
  { car_num: 503, brand: 'BMW', name: 'iX3', image: iX3 },
  { car_num: 504, brand: 'BMW', name: 'i7', image: i7 },

  // brand: 'Audi'
  { car_num: 601, brand: 'Audi', name: 'Q4 이트론', image: Q4Etron },
  { car_num: 602, brand: 'Audi', name: '이트론', image: Etron },
  { car_num: 603, brand: 'Audi', name: '이트론 GT', image: EtronGT },

  // ------------------------------
  { car_num: 901, brand: 'Polestar', name: '폴스타2', image: '../assets/images/폴스타2.png' },
  { car_num: 1001, brand: 'Volvo', name: 'C40 Recharge', image: '../assets/images/C40 Recharge.png' },
  { car_num: 1101, brand: 'Volkswagen', name: 'ID.4', image: '../assets/images/ID.4.png' },
  { car_num: 1201, brand: 'Renault', name: '조에', image: '../assets/images/조에.png' },
  { car_num: 1301, brand: 'Porsche', name: '타이칸', image: '../assets/images/타이칸.png' },
  { car_num: 1401, brand: 'Chevrolet', name: '볼트 EV', image: '../assets/images/볼트 EV.png' },
  { car_num: 1402, brand: 'Chevrolet', name: '볼트 EUV', image: '../assets/images/볼트 EUV.png' },
  { car_num: 1501, brand: 'Peugeot', name: 'e-2008', image: '../assets/images/e-2008.png' },
  { car_num: 1601, brand: 'BYD', name: '이모션', image: '../assets/images/이모션.png' },
];

export default electricVehicles;
