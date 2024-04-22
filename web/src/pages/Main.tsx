import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from "styled-components";

const Main = styled.main`
  max-width: 1136px;
  height: 1134px;
`;

const MainBannerContainer = styled.div``;

const Section = styled.div``;

const SectionTitle = styled.div``;


const MainPage: React.FC = () => {

  return (
    <div>
      <Header/>
      <Main>
        <MainBannerContainer>
        </MainBannerContainer>

      </Main>
      <Footer/>
    </div>
  );
};

export default MainPage;
