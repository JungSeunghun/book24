import React from 'react';
import styled from "styled-components";
import {B1_600, B2_400} from "../style/FontStyle";
import SizedBox from "./common/SizedBox";

const FooterContainer = styled.footer`
  margin: 0 auto;
  max-width: 71rem;
  height: 10.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
`;

const Container = styled.section`
  text-align: right;
  padding: 1rem 2.5rem;
`;

const FooterTitle = styled(B1_600)``;

const FooterText = styled(B2_400)``;

const FooterIcon = styled.div``;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.black};
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterTitle>글조명</FooterTitle>
        <FooterText>제작: 권오현 / 심화영 / 정승훈</FooterText>
        <SizedBox height={"1rem"}/>
        <Link href={'https://www.instagram.com/writing.lighting?igsh=c2RmM3V6eHpuNGc2&utm_source=qr'}
              target={'_blank'}>
          <FooterIcon>
            <img src={'/icons/instagram.svg'}/>
          </FooterIcon>
        </Link>
        <SizedBox height={"1rem"}/>
        <Link>
          <FooterText>개인정보처리방침</FooterText>
        </Link>
      </Container>
    </FooterContainer>
  )
}

export default Footer;