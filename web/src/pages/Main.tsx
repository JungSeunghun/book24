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

const Main = styled.main`
  max-width: 71rem;
  margin: 0 auto;
`;

const MainPage: React.FC = () => {

  return (
    <div>
      <Header/>
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
