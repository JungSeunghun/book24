import React from 'react';
import styled from "styled-components";
import {CB1, CH2} from "../../style/FontStyle";
import SizedBox from "../common/SizedBox";


const MainContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainContentCenterTitle = styled(CH2)`
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
  @media (max-width: 1080px) {
    position: absolute;
    z-index: 1;
  }
`;

const MainContentSection3: React.FC = () => {

  return (
    <>
      <SizedBox height={"3rem"}/>
      <MainContentCenterTitle>임직원들과 비전을 공유해보세요!</MainContentCenterTitle>
      <SizedBox height={"2.75rem"}/>
      <MainContentContainer>
        <MainContentImageContainer>
          <MainContentImage src={"/img/main/MainSection4Rect.png"}/>
        </MainContentImageContainer>
        <MainContentTitleContainer>
          <MainContentTitle>임직원들과 비전을 공유해보세요!</MainContentTitle>
          <MainContentSubTitle>내용 주절주절</MainContentSubTitle>
        </MainContentTitleContainer>
      </MainContentContainer>
      <SizedBox height={"3rem"}/>
    </>
  );
};

export default MainContentSection3;
