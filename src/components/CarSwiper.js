import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

const StyledSwiper = styled(Swiper)`
  width: 100%; /* Swiper 크기 조정 */
  height: auto;
  margin-left: 10px; /* Swiper를 로고 옆으로 배치하기 위한 마진 */

  .swiper-slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: '#373737';
    position: relative;
    height: 300px; /* 슬라이드 높이 설정 */
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center; /* 로고와 슬라이드를 수평 정렬 */
  justify-content: flex-start; /* 로고와 슬라이드가 왼쪽 정렬되도록 */
  margin: 30px;
  background-color: #373737; /* 배경색 설정 */
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%; /* 로고 컨테이너 크기 조정 */
  text-align: center;
  img {
    max-width: 100px; /* 로고 이미지 크기 제한 */
    margin-bottom: 10px;
  }
  span {
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
`;

function CarSwiper({ logo, brand, images }) {
  return (
    <Container style={{ margin: '20' }}>
      <LogoContainer>
        <img
          src={logo}
          alt={brand}
        />
        <span>{brand}</span>
      </LogoContainer>
      <StyledSwiper
        navigation
        modules={[Navigation]}
        loop={true}
        className='mySwiper'>
        {images.map(
          (image, idx) =>
            idx % 3 === 0 && (
              <SwiperSlide key={idx}>
                <div className='image-container'>
                  <img
                    src={image.image}
                    alt={image.name}
                    style={{ maxWidth: '100%', height: '200px', objectFit: 'contain' }}
                  />
                  <div
                    className={`${brand.toLowerCase()}-caption`}
                    style={{ color: 'white', textAlign: 'center' }}>
                    {image.name}
                  </div>
                </div>
                <div className='image-container'>
                  <img
                    src={images[idx + 1]?.image}
                    alt={images[idx + 1]?.name}
                    style={{ maxWidth: '100%', height: '200px', objectFit: 'contain' }}
                  />
                  <div
                    className={`${brand.toLowerCase()}-caption`}
                    style={{ color: 'white', textAlign: 'center' }}>
                    {images[idx + 1]?.name}
                  </div>
                </div>
                <div className='image-container'>
                  <img
                    src={images[idx + 2]?.image}
                    alt={images[idx + 2]?.name}
                    style={{ maxWidth: '100%', height: '200px', objectFit: 'contain' }}
                  />
                  <div
                    className={`${brand.toLowerCase()}-caption`}
                    style={{ color: 'white', textAlign: 'center' }}>
                    {images[idx + 2]?.name}
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </StyledSwiper>
    </Container>
  );
}

export default CarSwiper;
