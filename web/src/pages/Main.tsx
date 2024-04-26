import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from "styled-components";
import MainBanner from "../components/main/MainBanner";
import MainContentSection1 from "../components/main/MainContentSection1";
import MainContentSection2 from "../components/main/MainContentSection2";
import MainSlider1 from "../components/main/MainSlider1";
import MainContentSection3 from "../components/main/MainContentSection3";
import MainContentSection4 from "../components/main/MainContentSection4";
import MainContentSection5 from "../components/main/MainContentSection5";
import MainSlider2 from "../components/main/MainSlider2";
import MainBookGrid1 from "../components/main/MainBookGrid1";
import MainBookGrid2 from "../components/main/MainBookGrid2";
import SizedBox from "../components/common/SizedBox";
import {CB1} from "../style/FontStyle";

const Main = styled.main`
  max-width: 71rem;
  margin: 0 auto;
`;

const BookRequestButton = styled.button`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 30rem;
  height: 3.5rem;
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 999;
  cursor: pointer;
`;

const BookRequestButtonText = styled(CB1)`
  color: ${({ theme }) => theme.colors.white};
`;

const MainPage: React.FC = () => {

  return (
    <div>
      <Header/>
      <BookRequestButton>
        <BookRequestButtonText>
          도서 신청하기
        </BookRequestButtonText>
      </BookRequestButton>
      <Main>
        <MainBanner />
        <SizedBox height={"1.25rem"} />
        <MainContentSection1 />
        <SizedBox height={"1.25rem"} />
        <MainContentSection2 />
        <SizedBox height={"1.25rem"} />
        <MainSlider1 />
        <SizedBox height={"1.25rem"} />
        <MainSlider2 />
        <SizedBox height={"1.25rem"} />
        <MainContentSection3 />
        <SizedBox height={"1.25rem"} />
        <MainContentSection4 />
        <SizedBox height={"1.25rem"} />
        <MainContentSection5 />
        <SizedBox height={"1.25rem"} />
        <MainBookGrid1 />
        <SizedBox height={"1.25rem"} />
        <MainBookGrid2 />
      </Main>
      <SizedBox height={"7.5rem"} />
      <Footer/>
    </div>
  );
};

export default MainPage;
