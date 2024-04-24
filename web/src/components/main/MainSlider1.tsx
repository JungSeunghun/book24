import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainBannerContainer = styled.div`
  max-width: 71rem;
  max-height: 25rem;
`;

const MainBannerImageContainer = styled.div`
  width: 100%;
`;

const MainBannerImage = styled.img`
  width: 100%
`;

const MainSlider1: React.FC = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false
  }

  return (
    <MainBannerContainer>
      <Slider {...settings}>
        <MainBannerImageContainer>
          <MainBannerImage src={'/img/main/MainSliderImage.png'}/>
        </MainBannerImageContainer>
        <MainBannerImageContainer>
          <MainBannerImage src={'/img/main/MainSliderImage.png'}/>
        </MainBannerImageContainer>
        <MainBannerImageContainer>
          <MainBannerImage src={'/img/main/MainSliderImage.png'}/>
        </MainBannerImageContainer>
        <MainBannerImageContainer>
          <MainBannerImage src={'/img/main/MainSliderImage.png'}/>
        </MainBannerImageContainer>
      </Slider>
    </MainBannerContainer>
  );
};

export default MainSlider1;