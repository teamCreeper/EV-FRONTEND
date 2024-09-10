import React from "react";
import hyundai from "../images/hyundai.png";
import "./Hyundaimodel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import ioniq6 from "../images/ioniq6.png";

const images = [
  { id: 1, src: ioniq6, alt: "아이오닉6" },
  { id: 2, src: ioniq6, alt: "아이오닉66" },
  { id: 3, src: ioniq6, alt: "아이오닉666" },
  { id: 4, src: ioniq6, alt: "아이오닉666" },
  { id: 5, src: ioniq6, alt: "아이오닉6666" },
  { id: 6, src: ioniq6, alt: "아이오닉66666" },
];

const StyledSwiper = styled(Swiper)`
  width: 100%; /* 슬라이더가 부모 컨테이너의 전체 너비를 차지하도록 설정 */
  height: 300px; /* 슬라이더의 높이를 300px로 고정 */

  .swiper-slide {
    display: flex; /* 슬라이드 내의 이미지 컨테이너들을 가로로 배치 */
    justify-content: space-between; /* 이미지 컨테이너들 사이의 간격을 균등하게 분배 */
    align-items: center; /* 이미지 컨테이너들이 슬라이드 내에서 수직으로 가운데 정렬되도록 설정 */
    background: black; /* 슬라이드의 배경색을 검정색으로 설정 */
  }

  .swiper-slide:hover {
    background-color: gray; /* 슬라이드 영역에 마우스를 올렸을 때 배경색 변경 */
  }

  .image-container {
    position: relative; /* 자식 요소인 .caption의 절대 위치를 이 요소를 기준으로 설정 */
    width: 40%; /* 각 이미지 컨테이너의 너비를 슬라이드 너비의 30%로 설정, 따라서 한 슬라이드에 3개의 이미지가 배치될 수 있음 */
    text-align: center; /* 이미지 및 캡션을 컨테이너 내에서 가운데 정렬 */
  }

  img {
    width: 100%; /* 이미지가 컨테이너의 전체 너비를 차지하도록 설정 */
    height: auto; /* 이미지의 원본 비율을 유지하면서 크기를 조절 */
  }

  .caption {
    position: absolute; /* 부모인 .image-container를 기준으로 절대 위치 지정 */
    top: 200px; /* 캡션이 이미지 위에 정확한 위치에 오도록 설정 */
    left: 50%; /* 캡션을 수평으로 가운데 정렬 */
    transform: translateX(
      -50%
    ); /* 캡션의 중심을 정확히 이미지 컨테이너의 수평 중앙에 맞추기 위해 왼쪽으로 50% 이동 */
    color: white; /* 캡션 텍스트의 색상을 검정색으로 설정 */
    padding: 5px 10px; /* 캡션 텍스트 주변에 약간의 여백을 추가 */
    font-size: 23px; /* 캡션 텍스트의 크기를 14px로 설정 */
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white; /* 슬라이드 네비게이션 버튼의 색상을 검정색으로 설정 */
  }
`;

function Hyundaimodel() {
  return (
    <div className="hyundai1">
      <h1 className="allmodel">전체 모델 보기</h1>
      <div className="hyundaiswiper">
        <div className="hyundailogo-container">
          <img
            src={hyundai}
            width="180px"
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
                    <div className="caption">{images[idx].alt}</div>
                  </div>
                  <div className="image-container">
                    <img
                      src={images[idx + 1]?.src}
                      alt={images[idx + 1]?.alt}
                    />
                    <div className="caption">{images[idx + 1]?.alt}</div>
                  </div>
                  <div className="image-container">
                    <img
                      src={images[idx + 2]?.src}
                      alt={images[idx + 2]?.alt}
                    />
                    <div className="caption">{images[idx + 2]?.alt}</div>
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
