import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CH2, CH5} from "../../style/FontStyle";

const MainBannerContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const MainBannerImage = styled.div`
  background-color: yellow;
  max-width: 71rem;
  height: 25rem;
`;

const MainContentTitle = styled(CH5)``;

const MainContentSubTitle = styled(CH2)``;

const MainBanner2: React.FC = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false
  }

  return (
    <MainBannerContainer>
      <MainContentTitle>기업 도서 관리 서비스 : 글조명</MainContentTitle>
      <MainContentSubTitle>임직원들과 비전을 공유해보세요!</MainContentSubTitle>
      <Slider {...settings}>
        <MainBannerImage>
          Slide 1
        </MainBannerImage>
        <MainBannerImage>
          Slide 2
        </MainBannerImage>
        <MainBannerImage>
          Slide 3
        </MainBannerImage>
      </Slider>
    </MainBannerContainer>
  );
};

export default MainBanner2;