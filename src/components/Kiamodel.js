import React from 'react';
import kialogo from '../assets/images/kialogo.png';
import './Kiamodel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';
import ev6 from '../assets/images/ev6.png';
import niroev from '../assets/images/niroev.png';
import ev9 from '../assets/images/ev9.png';
import ioniq6 from '../assets/images/ioniq6.png';

const images = [
  { id: 1, src: ev6, alt: 'EV6' },
  { id: 2, src: niroev, alt: '니로 EV' },
  { id: 3, src: ev9, alt: 'EV9' },
  { id: 4, src: ioniq6, alt: '아이오닉666' },
  { id: 5, src: ioniq6, alt: '아이오닉6666' },
  { id: 6, src: ioniq6, alt: '아이오닉66666' },
];

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: auto;
  .swiper-slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #373737;
    position: relative;
    height: 300px; /* 슬라이드 높이 설정 */
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;

function Kiamodel() {
  return (
    <div className='kia1'>
      <div className='kiaswiper'>
        <div className='kialogo-container'>
          <img
            src={kialogo}
            width='120px'
            alt='kia'
            className='kialogo'
          />
          <span className='kiakor'>기아</span>
        </div>
        <StyledSwiper
          navigation
          modules={[Navigation]}
          loop={true}
          className='mySwiper'>
          {images.map((_, idx) => {
            return (
              idx % 3 === 0 && (
                <SwiperSlide key={idx}>
                  <div className='image-container'>
                    <img
                      src={images[idx].src}
                      alt={images[idx].alt}
                    />
                    <div className='kia-caption'>{images[idx].alt}</div>
                  </div>
                  <div className='image-container'>
                    <img
                      src={images[idx + 1]?.src}
                      alt={images[idx + 1]?.alt}
                    />
                    <div className='kia-caption'>{images[idx + 1]?.alt}</div>
                  </div>
                  <div className='image-container'>
                    <img
                      src={images[idx + 2]?.src}
                      alt={images[idx + 2]?.alt}
                    />
                    <div className='kia-caption'>{images[idx + 2]?.alt}</div>
                  </div>
                </SwiperSlide>
              )
            );
          })}
        </StyledSwiper>
      </div>
    </div>
  );
}

export default Kiamodel;
