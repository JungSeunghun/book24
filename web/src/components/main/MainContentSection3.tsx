import React from 'react';
import styled from "styled-components";
import {CB1, CH2} from "../../style/FontStyle";


const MainContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
`;

const MainContentCenterTitle = styled(CH2)`
  width: 100%;
  text-align: center;
`;

const MainContentTitle = styled(CH2)``;

const MainContentSubTitle = styled(CB1)``;

const MainContentImageContainer = styled.div``;

const MainContentImage = styled.img``;

const MainContentTitleContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainContentSection3: React.FC = () => {

  return (
    <MainContentContainer>
      <MainContentCenterTitle>임직원들과 비전을 공유해보세요!</MainContentCenterTitle>
      <MainContentImageContainer>
        <MainContentImage src={"/img/main/MainSection4Rect.png"}/>
      </MainContentImageContainer>
      <MainContentTitleContainer>
        <MainContentTitle>임직원들과 비전을 공유해보세요!</MainContentTitle>
        <MainContentSubTitle>내용 주절주절</MainContentSubTitle>
      </MainContentTitleContainer>
    </MainContentContainer>
  );
};

export default MainContentSection3;
