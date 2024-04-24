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

const MainContentSection5: React.FC = () => {

  return (
    <MainContentContainer>
      <SizedBox height={"3rem"}/>
      <MainContentImageContainer>
        <MainContentImage src={"/img/main/MainSection4Rect.png"}/>
      </MainContentImageContainer>
      <MainContentTitleContainer>
        <MainContentTitle>임직원들과 비전을 공유해보세요!</MainContentTitle>
        <MainContentSubTitle>내용 주절주절</MainContentSubTitle>
      </MainContentTitleContainer>
      <SizedBox height={"3rem"}/>
    </MainContentContainer>
  );
};

export default MainContentSection5;