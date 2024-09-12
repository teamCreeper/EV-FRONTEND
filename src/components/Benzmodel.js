import React from "react";
import benzlogo from "../assets/images/benzlogo.png";
import "./Benzmodel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import eqe from "../assets/images/EQE.png";
import eqs from "../assets/images/EQS.png";
import eqa from "../assets/images/EQA.png";
import ioniq6 from "../assets/images/ioniq6.png";

const images = [
  { id: 1, src: eqe, alt: "EQE" },
  { id: 2, src: eqs, alt: "EQS" },
  { id: 3, src: eqa, alt: "EQA" },
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

function Benzmodel() {
  return (
    <div className="benz1">
      <div className="benzswiper">
        <div className="benzlogo-container">
          <img
            src={benzlogo}
            width="180px"
            height="100px"
            alt="benz"
            className="benzlogo"
          />
          <span className="benzkor">벤츠</span>
        </div>
        <StyledSwiper navigation modules={[Navigation]} className="mySwiper">
          {images.map((_, idx) => {
            return (
              idx % 3 === 0 && (
                <SwiperSlide key={idx}>
                  <div className="image-container">
                    <img src={images[idx].src} alt={images[idx].alt} />
                    <div className="benz-caption">{images[idx].alt}</div>
                  </div>
                  <div className="image-container">
                    <img
                      src={images[idx + 1]?.src}
                      alt={images[idx + 1]?.alt}
                    />
                    <div className="benz-caption">{images[idx + 1]?.alt}</div>
                  </div>
                  <div className="image-container">
                    <img
                      src={images[idx + 2]?.src}
                      alt={images[idx + 2]?.alt}
                    />
                    <div className="benz-caption">{images[idx + 2]?.alt}</div>
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

export default Benzmodel;
