import React from 'react';
import styled from "styled-components";
import {CH2, CH5} from "../../style/FontStyle";
import SizedBox from "../common/SizedBox";


const MainContentContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const MainContentTitle = styled(CH5)``;

const MainContentSubTitle = styled(CH2)``;

const MainContent = styled.div``;

const MainContentImg = styled.img``;

const MainContentSection2: React.FC = () => {

  return (
    <MainContentContainer>
      <SizedBox height={"1.5rem"}/>
      <MainContentTitle>기업 도서 관리 서비스 : 글조명</MainContentTitle>
      <SizedBox height={"0.5rem"}/>
      <MainContentSubTitle>임직원들과 비전을 공유해보세요!</MainContentSubTitle>
      <SizedBox height={"2.8125rem"}/>
      <MainContent>
        <MainContentImg src={'/img/main/MainSection2Rect.png'}/>
      </MainContent>
      <SizedBox height={"3.125rem"}/>
    </MainContentContainer>
  );
};

export default MainContentSection2;
