import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from "styled-components";
const Main = styled.main`
  max-width: 71rem;
  margin: 0 auto;
`;

const BookPage: React.FC = () => {

  return (
    <div>
      <Header/>
      <Main>
      </Main>
      <Footer/>
    </div>
  );
};

export default BookPage;
