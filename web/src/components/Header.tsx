import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { B1_600 } from "../style/FontStyle";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 71rem;
  height: 3.75rem;
`;

const Logo = styled.img`
  width: 5rem;
  height: 3.75rem;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: hidden;
  gap: 1.25rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 100%;
    height: 0.25rem;
    background-color: black;
  }
`;

const MobileMenuList = styled(MenuList)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 3.75rem;
    right: 0;
    background-color: white;
    width: 100%;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`;

const Menu = styled.li`
  text-align: center;
  align-content: center;
  min-width: 5rem;
  height: 3.75rem;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const LinkText = styled(B1_600)``;

const StyledLinkText = styled(LinkText)`
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1.65rem;
`;

const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Header>
      <StyledLink to="/">
        <Logo src={'logo/header_logo.svg'} />
      </StyledLink>
      <MenuList>
        <Menu>
          <StyledLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            <LinkText>홈</LinkText>
          </StyledLink>
        </Menu>
        {/*<Menu>*/}
        {/*  <StyledLink to="/book" className={({ isActive }) => (isActive ? 'active' : undefined)}>*/}
        {/*    <LinkText>도서</LinkText>*/}
        {/*  </StyledLink>*/}
        {/*</Menu>*/}
        {/*<Menu>*/}
        {/*  <StyledLink to="/basket" className={({ isActive }) => (isActive ? 'active' : undefined)}>*/}
        {/*    <LinkText>장바구니</LinkText>*/}
        {/*  </StyledLink>*/}
        {/*</Menu>*/}
        <Menu>
          <StyledLink to="/consult" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            <StyledLinkText>무료상담</StyledLinkText>
          </StyledLink>
        </Menu>
      </MenuList>
      <MobileMenuIcon onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </MobileMenuIcon>
      {mobileMenuOpen && (
        <MobileMenuList>
          <Menu>
            <StyledLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              <LinkText>홈</LinkText>
            </StyledLink>
          </Menu>
          {/*<Menu>*/}
          {/*  <StyledLink to="/book" className={({ isActive }) => (isActive ? 'active' : undefined)}>*/}
          {/*    <LinkText>도서</LinkText>*/}
          {/*  </StyledLink>*/}
          {/*</Menu>*/}
          {/*<Menu>*/}
          {/*  <StyledLink to="/basket" className={({ isActive }) => (isActive ? 'active' : undefined)}>*/}
          {/*    <LinkText>장바구니</LinkText>*/}
          {/*  </StyledLink>*/}
          {/*</Menu>*/}
          <Menu>
            <StyledLink to="/consult" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              <StyledLinkText>무료상담</StyledLinkText>
            </StyledLink>
          </Menu>
        </MobileMenuList>
      )}
    </Header>
  );
};

export default MainHeader;
