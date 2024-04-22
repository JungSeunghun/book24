import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainBannerContainer = styled.div``;

const MainBannerImage = styled.div`
  background-color: yellow;
  max-width: 71rem;
  height: 45rem;
`;

const MainBanner: React.FC = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false
  }

  return (
    <MainBannerContainer>
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

export default MainBanner;
