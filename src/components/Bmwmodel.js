import React from "react";
import bmwlogo from "../assets/images/bmwlogo.png";
import "./Bmwmodel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import bmwi4 from "../assets/images/BMW i4.png";
import bmwi5 from "../assets/images/BMW i5.png";
import bmwi7 from "../assets/images/BMW i7.png";
import ioniq6 from "../assets/images/ioniq6.png";

const images = [
  { id: 1, src: bmwi4, alt: "BMW i4" },
  { id: 2, src: bmwi5, alt: "BMW i5" },
  { id: 3, src: bmwi7, alt: "BMW i7" },
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

function Bmwmodel() {
  return (
    <div className="bmw1">
      <div className="bmwswiper">
        <div className="bmwlogo-container">
          <img
            src={bmwlogo}
            width="180px"
            height="100px"
            alt="bmw"
            className="bmwlogo"
          />
          <span className="bmwkor">BMW</span>
        </div>
        <StyledSwiper navigation modules={[Navigation]} className="mySwiper">
          {images.map((_, idx) => {
            return (
              idx % 3 === 0 && (
                <SwiperSlide key={idx}>
                  <div className="image-container">
                    <img src={images[idx].src} alt={images[idx].alt} />
                    <div className="bmw-caption">{images[idx].alt}</div>
                  </div>
                  <div className="image-container">
                    <img
                      src={images[idx + 1]?.src}
                      alt={images[idx + 1]?.alt}
                    />
                    <div className="bmw-caption">{images[idx + 1]?.alt}</div>
                  </div>
                  <div className="image-container">
                    <img
                      src={images[idx + 2]?.src}
                      alt={images[idx + 2]?.alt}
                    />
                    <div className="bmw-caption">{images[idx + 2]?.alt}</div>
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

export default Bmwmodel;
