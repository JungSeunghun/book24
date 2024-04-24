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
        <MainContentSection1 />
        <MainContentSection2 />
        <MainSlider1 />
        <MainSlider2 />
        <MainContentSection3 />
        <MainContentSection4 />
        <MainContentSection5 />
        <MainBookGrid1 />
        <MainBookGrid2 />
      </Main>
      <Footer/>
    </div>
  );
};

export default MainPage;
