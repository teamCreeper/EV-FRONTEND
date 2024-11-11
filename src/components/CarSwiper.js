import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'; // 추가: Link를 사용해 페이지 이동
import styled from 'styled-components';

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: auto;
  margin-left: 10px;

  .swiper-slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: '#373737';
    position: relative;
    height: 300px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 30px;
  background-color: #373737;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  text-align: center;

  img {
    max-width: 100px;
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
    <Container>
      <LogoContainer>
        <img src={logo} alt={brand} />
        <span>{brand}</span>
      </LogoContainer>
      <StyledSwiper navigation modules={[Navigation]} loop={true} className="mySwiper">
        {images.map(
          (image, idx) =>
            idx % 3 === 0 && (
              <SwiperSlide key={idx}>
                {/* 첫 번째 이미지 */}
                <Link to={`/CarDetail/${images[idx]?.car_num}`} style={{ textDecoration: 'none' }}>
                  <div className="image-container">
                    <img
                      src={images[idx]?.image}
                      alt={images[idx]?.name}
                      style={{ maxWidth: '100%', height: '200px', objectFit: 'contain', margin: '0' }}
                    />
                    <div style={{ color: 'white', textAlign: 'center' }}>{images[idx]?.name}</div>
                  </div>
                </Link>
                {/* 두 번째 이미지 */}
                {images[idx + 1] && (
                  <Link to={`/CarDetail/${images[idx + 1]?.car_num}`} style={{ textDecoration: 'none' }}>
                    <div className="image-container">
                      <img
                        src={images[idx + 1]?.image}
                        alt={images[idx + 1]?.name}
                        style={{ maxWidth: '100%', height: '200px', objectFit: 'contain' }}
                      />
                      <div style={{ color: 'white', textAlign: 'center' }}>{images[idx + 1]?.name}</div>
                    </div>
                  </Link>
                )}
                {/* 세 번째 이미지 */}
                {images[idx + 2] && (
                  <Link to={`/CarDetail/${images[idx + 2]?.car_num}`} style={{ textDecoration: 'none' }}>
                    <div className="image-container">
                      <img
                        src={images[idx + 2]?.image}
                        alt={images[idx + 2]?.name}
                        style={{ maxWidth: '100%', height: '200px', objectFit: 'contain' }}
                      />
                      <div style={{ color: 'white', textAlign: 'center' }}>{images[idx + 2]?.name}</div>
                    </div>
                  </Link>
                )}
              </SwiperSlide>
            )
        )}
      </StyledSwiper>
    </Container>
  );
}

export default CarSwiper;
