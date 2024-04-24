import React from 'react';
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
        <Menu>
          <StyledLink to="/book" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            <LinkText>도서</LinkText>
          </StyledLink>
        </Menu>
        <Menu>
          <StyledLink to="/basket" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            <LinkText>장바구니</LinkText>
          </StyledLink>
        </Menu>
        <Menu>
          <StyledLink to="/consult" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            <StyledLinkText>무료상담</StyledLinkText>
          </StyledLink>
        </Menu>
      </MenuList>
    </Header>
  );
};

export default MainHeader;
