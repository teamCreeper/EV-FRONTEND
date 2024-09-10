import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import ioniq6 from "../images/ioniq6.png";

const images = [
  { id: 1, src: ioniq6, alt: "아이오닉6" },
  { id: 2, src: ioniq6, alt: "아이오닉5" },
  { id: 3, src: ioniq6, alt: "코나 일렉트릭" },
  { id: 4, src: ioniq6, alt: "아이오닉6" },
  { id: 5, src: ioniq6, alt: "아이오닉5" },
  { id: 6, src: ioniq6, alt: "코나 일렉트릭" },
];

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 300px;

  .swiper-slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;

    .image-container {
      position: relative;
      width: 23%; /* 4개의 이미지가 들어갈 수 있도록 너비 조정 */
      text-align: center;
    }

    img {
      width: 100%;
      height: auto;
    }

    .caption {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(
        255,
        255,
        255,
        0.7
      ); /* 배경색을 약간 투명한 흰색으로 변경 */
      color: #000; /* 글자색을 검정색으로 설정 */
      padding: 5px 10px;
      font-size: 14px;
      border-radius: 5px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
  }
`;

const Swipertest = () => {
  return (
    <StyledSwiper navigation modules={[Navigation]} className="mySwiper">
      {images.map((_, idx) => {
        // 각 슬라이드에 4개의 이미지를 넣음
        return (
          idx % 4 === 0 && (
            <SwiperSlide key={idx}>
              <div className="image-container">
                <img src={images[idx].src} alt={images[idx].alt} />
                <div className="caption">{images[idx].alt}</div>
              </div>
              <div className="image-container">
                <img src={images[idx + 1]?.src} alt={images[idx + 1]?.alt} />
                <div className="caption">{images[idx + 1]?.alt}</div>
              </div>
              <div className="image-container">
                <img src={images[idx + 2]?.src} alt={images[idx + 2]?.alt} />
                <div className="caption">{images[idx + 2]?.alt}</div>
              </div>
              <div className="image-container">
                <img src={images[idx + 3]?.src} alt={images[idx + 3]?.alt} />
                <div className="caption">{images[idx + 3]?.alt}</div>
              </div>
            </SwiperSlide>
          )
        );
      })}
    </StyledSwiper>
  );
};

export default Swipertest;
