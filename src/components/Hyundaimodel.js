import React from "react";
import hyundailogo from "../assets/images/hyundailogo.png";
import "./Hyundaimodel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import ioniq6 from "../assets/images/ioniq6.png";
import ioniq5 from "../assets/images/ioniq5.png";
import konaelectric from "../assets/images/konaelectric.png";

const images = [
  { id: 1, src: ioniq6, alt: "아이오닉6" },
  { id: 2, src: ioniq5, alt: "아이오닉5" },
  { id: 3, src: konaelectric, alt: "코나 일렉트릭" },
  { id: 4, src: ioniq6, alt: "아이오닉666" },
  { id: 5, src: ioniq6, alt: "아이오닉6666" },
  { id: 6, src: ioniq6, alt: "아이오닉66666" },
];

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: auto;
  .swiper-slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
    position: relative;
    height: 300px; /* 슬라이드 높이 설정 */
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;

function Hyundaimodel() {
  return (
    <div className="hyundai1">
      <h1 className="allmodel">전체 모델 보기</h1>
      <div className="hyundaiswiper">
        <div className="hyundailogo-container">
          <img
            src={hyundailogo}
            width="200px"
            alt="hyundai"
            className="hyundailogo"
          />
          <span className="hyundaikor">현대</span>
        </div>
        <StyledSwiper navigation modules={[Navigation]} className="mySwiper">
          {images.map((_, idx) => {
            return (
              idx % 3 === 0 && (
                <SwiperSlide key={idx}>
                  <div className="image-container">
                    <img src={images[idx].src} alt={images[idx].alt} />
                    <div className="hyundai-caption">{images[idx].alt}</div>
                  </div>
                  <div className="image-container">
                    <img
                      src={images[idx + 1]?.src}
                      alt={images[idx + 1]?.alt}
                    />
                    <div className="hyundai-caption">
                      {images[idx + 1]?.alt}
                    </div>
                  </div>
                  <div className="image-container">
                    <img
                      src={images[idx + 2]?.src}
                      alt={images[idx + 2]?.alt}
                    />
                    <div className="hyundai-caption">
                      {images[idx + 2]?.alt}
                    </div>
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

export default Hyundaimodel;
