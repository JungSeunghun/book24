import React from 'react';
import styled from "styled-components";
import {CH2, CH5, H2_400} from "../../style/FontStyle";


const MainContentContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const MainContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainContentTitle = styled(H2_400)`
  display: inline-flex;
  padding: 0.3125rem 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 1.25rem;
  
  background-color: #FFB443;
  border: 1px solid #3A3A3A;
  color: white;
`;

const MainContentLink = styled.a`
  cursor: pointer;
`;

const MainContentLinkText = styled(H2_400)``;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const MainContentImg = styled.img``;

const MainBookGrid1: React.FC = () => {

  return (
    <MainContentContainer>
      <MainContentHeaderContainer>
        <MainContentTitle>요즘 뜨는 추천 신간!</MainContentTitle>
        <MainContentLink>
          <MainContentLinkText>
            전체보기
          </MainContentLinkText>
        </MainContentLink>
      </MainContentHeaderContainer>
      <MainContent>
        <MainContentImg src={'/img/common/BookImage.png'}/>
        <MainContentImg src={'/img/common/BookImage.png'}/>
        <MainContentImg src={'/img/common/BookImage.png'}/>
        <MainContentImg src={'/img/common/BookImage.png'}/>
      </MainContent>
    </MainContentContainer>
  );
};

export default MainBookGrid1;
