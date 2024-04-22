import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from "styled-components";
import MainBanner from "../components/main/MainBanner";
import MainContentSection1 from "../components/main/MainContentSection1";
import MainContentSection2 from "../components/main/MainContentSection2";
import MainSlider from "../components/main/MainSlider";
import MainContentSection3 from "../components/main/MainContentSection3";
import MainContentSection4 from "../components/main/MainContentSection4";
import MainContentSection5 from "../components/main/MainContentSection5";
import MainContentSection6 from "../components/main/MainContentSection6";

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
        <MainSlider/>
        <MainContentSection3 />
        <MainContentSection4 />
        <MainContentSection5 />
        <MainContentSection6 />
      </Main>
      <Footer/>
    </div>
  );
};

export default MainPage;
