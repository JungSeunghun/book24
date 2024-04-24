import React from 'react';
import styled from "styled-components";
import {CH2, CH5, H2_400} from "../../style/FontStyle";
import SizedBox from "../common/SizedBox";


const MainContentContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const MainContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainContentTitleContainer = styled.div`
  border-radius: 1.25rem;
  padding: 0.44rem 1rem;
  margin: 0 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const MainContentTitleText = styled(H2_400)`
  color: ${({ theme }) => theme.colors.white};
`;

const MainContentLink = styled.a`
  cursor: pointer;
  margin: 0 2rem;
`;

const MainContentLinkText = styled(H2_400)``;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 3.75rem 2.5rem;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainContentImgContainer = styled.div``;

const MainContentImg = styled.img``;

const MainBookGrid1: React.FC = () => {

  return (
    <MainContentContainer>
      <MainContentHeaderContainer>
        <MainContentTitleContainer>
          <MainContentTitleText>
            요즘 뜨는 추천 신간!
          </MainContentTitleText>
        </MainContentTitleContainer>
        <MainContentLink>
          <MainContentLinkText>
            전체보기
          </MainContentLinkText>
        </MainContentLink>
      </MainContentHeaderContainer>
      <SizedBox height={"1.25rem"}/>
      <MainContent>
        <MainContentImgContainer>
          <MainContentImg src={'/img/common/BookImage.png'}/>
        </MainContentImgContainer>
        <MainContentImgContainer>
          <MainContentImg src={'/img/common/BookImage.png'}/>
        </MainContentImgContainer>
        <MainContentImg src={'/img/common/BookImage.png'}/>
        <MainContentImg src={'/img/common/BookImage.png'}/>
      </MainContent>
    </MainContentContainer>
  );
};

export default MainBookGrid1;
