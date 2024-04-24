import React from 'react';
import styled from "styled-components";
import {CH2, CH5} from "../../style/FontStyle";


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
      <MainContentTitle>기업 도서 관리 서비스 : 글조명</MainContentTitle>
      <MainContentSubTitle>임직원들과 비전을 공유해보세요!</MainContentSubTitle>
      <MainContent>
        <MainContentImg src={'/img/main/MainSection2Rect.png'}/>
      </MainContent>
    </MainContentContainer>
  );
};

export default MainContentSection2;
