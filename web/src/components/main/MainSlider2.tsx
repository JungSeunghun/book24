import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CH2, CH5} from "../../style/FontStyle";
import SizedBox from "../common/SizedBox";

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
      <SizedBox height={"1.5rem"}/>
      <MainContentTitle>기업 도서 관리 서비스 : 글조명</MainContentTitle>
      <SizedBox height={"0.5rem"}/>
      <MainContentSubTitle>임직원들과 비전을 공유해보세요!</MainContentSubTitle>
      <SizedBox height={"2.8125rem"}/>
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
      <SizedBox height={"3.125rem"}/>
    </MainBannerContainer>
  );
};

export default MainBanner2;