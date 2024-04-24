import React from 'react';
import styled from "styled-components";

const MainBannerContainer = styled.div`
  width: 100%;
  
`;

const MainBannerImage = styled.img``;

const MainBanner: React.FC = () => {

  return (
    <MainBannerContainer>
      <MainBannerImage src={'/img/main/MainBanner.png'}/>
    </MainBannerContainer>
  );
};

export default MainBanner;
