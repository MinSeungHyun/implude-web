import React from 'react';
import styled from 'styled-components';

const NavBar = () => (
  <NavBarContainer>
    <LogoContainer href="/">
      <LogoSymbol src="./static/logo_symbol.svg" />
      <LogoText>IMPLUDE</LogoText>
    </LogoContainer>

    <NavList>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">History</NavItem>
      <NavItem href="#">Recruit</NavItem>
      <NavItem href="#">Contact</NavItem>
    </NavList>
  </NavBarContainer>
);

export default NavBar;

const horizontalMargin = '40px';

const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  align-items: center;
`;

const LogoContainer = styled.a`
  height: 70%;
  display: flex;
  margin-left: ${horizontalMargin};
  align-items: center;
`;

const LogoSymbol = styled.img`
  width: 25px;
  height: 25px;
`;

const LogoText = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

const NavList = styled.nav`
  display: flex;
  width: 100%;
  height: 70%;
  margin-right: ${horizontalMargin};
  justify-content: flex-end;
  align-items: center;
`;

const NavItem = styled.a`
  padding: 5px 0 5px 20px;
  font-weight: 300;
  vertical-align: center;
`;
