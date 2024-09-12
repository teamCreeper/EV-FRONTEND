import React from "react";
import audilogo from "../assets/images/audilogo.png";
import "./Audimodel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import etrongt from "../assets/images/E-tron GT.png";
import q4etron from "../assets/images/Q4 E-tron.png";
import etron from "../assets/images/E-tron.png";
import ioniq6 from "../assets/images/ioniq6.png";

const images = [
  { id: 1, src: etrongt, alt: "E-tron GT" },
  { id: 2, src: q4etron, alt: "Q4 E-tron" },
  { id: 3, src: etron, alt: "E-tron" },
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

function Audimodel() {
  return (
    <div className="audi1">
      <div className="audiswiper">
        <div className="audilogo-container">
          <img
            src={audilogo}
            width="180px"
            height="100px"
            alt="audi"
            className="audilogo"
          />
          <span className="audikor">아우디</span>
        </div>
        <StyledSwiper navigation modules={[Navigation]} className="mySwiper">
          {images.map((_, idx) => {
            return (
              idx % 3 === 0 && (
                <SwiperSlide key={idx}>
                  <div className="image-container">
                    <img src={images[idx].src} alt={images[idx].alt} />
                    <div className="audi-caption">{images[idx].alt}</div>
                  </div>
                  <div className="image-container">
                    <img
                      src={images[idx + 1]?.src}
                      alt={images[idx + 1]?.alt}
                    />
                    <div className="audi-caption">{images[idx + 1]?.alt}</div>
                  </div>
                  <div className="image-container">
                    <img
                      src={images[idx + 2]?.src}
                      alt={images[idx + 2]?.alt}
                    />
                    <div className="audi-caption">{images[idx + 2]?.alt}</div>
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

export default Audimodel;
