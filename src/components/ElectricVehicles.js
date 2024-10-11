// Brand logo:
import 현대로고 from '../assets/images/hyundailogo2.png';
import 기아로고 from '../assets/images/kialogo2.png';
import 아우디로고 from '../assets/images/audilogo2.png';
import BMW로고 from '../assets/images/bmwlogo.png';
import 벤츠로고 from '../assets/images/benzlogo.png';

// Hyundai model:
import 아이오닉5 from '../assets/images/아이오닉5.png';
import 아이오닉6 from '../assets/images/아이오닉6.png';
import 코나일렉트릭 from '../assets/images/코나일렉트릭.png';
import 아이오닉일렉트릭 from '../assets/images/아이오닉일렉트릭.png';
import 포터EV from '../assets/images/포터EV.png';
import 봉고EV from '../assets/images/봉고EV.png';
import ElectrifiedGV70 from '../assets/images/Electrified GV70.png';
import GV60 from '../assets/images/GV60.png';
import ElectrifiedG80 from '../assets/images/Electrified G80.png';

// Kia model:
import EV6 from '../assets/images/EV6.png';
import EV9 from '../assets/images/EV9.png';
import NiroEV from '../assets/images/NiroEV.png';

// Mercedes-Benz model:
import EQA from '../assets/images/EQA.png';
import EQB from '../assets/images/EQB.png';
import EQS from '../assets/images/EQS.png';
import EQE from '../assets/images/EQE.png';

// BMW model:
import iX3 from '../assets/images/BMW ix3.png';
import i4 from '../assets/images/BMW i4.png';
import i5 from '../assets/images/BMW i5.png';
import i7 from '../assets/images/BMW i7.png';
import iX from '../assets/images/BMW iX.png';

// Audi model:
import Q4Etron from '../assets/images/Q4 E-tron.png';
import Etron from '../assets/images/E-tron.png';
import EtronGT from '../assets/images/E-tron GT.png';

const electricVehicles = [
  // brand: 'Hyundai'
  { car_num: 101, brand: 'Hyundai', name: '아이오닉 5', image: 아이오닉5, logo: 현대로고 },
  { car_num: 102, brand: 'Hyundai', name: '아이오닉 6', image: 아이오닉6, logo: 현대로고 },
  { car_num: 103, brand: 'Hyundai', name: '코나 일렉트릭', image: 코나일렉트릭, logo: 현대로고 },
  { car_num: 104, brand: 'Hyundai', name: '아이오닉 일렉트릭', image: 아이오닉일렉트릭, logo: 현대로고 },
  { car_num: 105, brand: 'Hyundai', name: '포터EV', image: 포터EV, logo: 현대로고 },
  { car_num: 106, brand: 'Hyundai', name: '봉고EV', image: 봉고EV, logo: 현대로고 },
  { car_num: 107, brand: 'Kia', name: 'EV9', image: EV9, logo: 기아로고 },
  { car_num: 108, brand: 'Hyundai', name: 'GV60', image: GV60, logo: 현대로고 },
  { car_num: 109, brand: 'Hyundai', name: 'Electrified GV70', image: ElectrifiedGV70, logo: 현대로고 },
  { car_num: 110, brand: 'Hyundai', name: 'Electrified G80', image: ElectrifiedG80, logo: 현대로고 },

  // brand: 'Kia'
  { car_num: 201, brand: 'Kia', name: 'EV6', image: EV6, logo: 기아로고 },
  { car_num: 202, brand: 'Kia', name: '니로EV', image: NiroEV, logo: 기아로고 },
  { car_num: 203, brand: 'Kia', name: '쏘울EV', image: 아이오닉5, logo: 기아로고 },

  // brand: 'Tesla'
  { car_num: 301, brand: 'Tesla', name: '모델3', image: '../assets/images/모델3.png' },
  { car_num: 302, brand: 'Tesla', name: '모델Y', image: '../assets/images/모델Y.png' },

  // brand: 'Mercedes-Benz'
  { car_num: 401, brand: 'Mercedes-Benz', name: 'EQA', image: EQA, logo: 벤츠로고 },
  { car_num: 402, brand: 'Mercedes-Benz', name: 'EQB', image: EQB, logo: 벤츠로고 },
  { car_num: 403, brand: 'Mercedes-Benz', name: 'EQE', image: EQE, logo: 벤츠로고 },
  { car_num: 404, brand: 'Mercedes-Benz', name: 'EQS', image: EQS, logo: 벤츠로고 },

  // brand: 'BMW'
  { car_num: 501, brand: 'BMW', name: 'i4', image: i4, logo: BMW로고 },
  { car_num: 502, brand: 'BMW', name: 'iX', image: iX, logo: BMW로고 },
  { car_num: 503, brand: 'BMW', name: 'iX3', image: iX3, logo: BMW로고 },
  { car_num: 504, brand: 'BMW', name: 'i7', image: i7, logo: BMW로고 },

  // brand: 'Audi'
  { car_num: 601, brand: 'Audi', name: 'Q4 이트론', image: Q4Etron, logo: 아우디로고 },
  { car_num: 602, brand: 'Audi', name: '이트론', image: Etron, logo: 아우디로고 },
  { car_num: 603, brand: 'Audi', name: '이트론 GT', image: EtronGT, logo: 아우디로고 },

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
