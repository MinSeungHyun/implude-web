import React from 'react';
import styled from 'styled-components';

const navigations = [
  { name: 'About', href: '#' },
  { name: 'History', href: '#' },
  { name: 'Recruit', href: '#' },
  { name: 'Contact', href: '#' },
];

const NavBar = (props) => (
  <NavBarContainer dark={props.dark}>
    <LogoContainer href="/">
      <LogoSymbol dark={props.dark} />
      <LogoText dark={props.dark}>IMPLUDE</LogoText>
    </LogoContainer>

    <NavList>
      {navigations.map(({ name, href }) => (
        <NavItem dark={props.dark} href={href}>
          {name}
        </NavItem>
      ))}
    </NavList>
  </NavBarContainer>
);

export default NavBar;

const horizontalMargin = '40px';

const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  box-shadow: ${(props) =>
    props.dark ? 'unset' : '0 3px 6px 0 rgba(0, 0, 0, 0.16)'};
  background: ${(props) => (props.dark ? 'transparent' : '#fff')};
`;

const LogoContainer = styled.a`
  height: 70%;
  display: flex;
  margin-left: ${horizontalMargin};
  align-items: center;
`;

const LogoSymbol = styled.div`
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    props.dark
      ? 'url(./static/logo_symbol_dark.svg)'
      : 'url(./static/logo_symbol.svg)'};
`;

const LogoText = styled.span`
  margin-left: 10px;
  font-weight: bold;
  color: ${(props) => (props.dark ? 'white' : 'black')};
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
  color: ${(props) => (props.dark ? 'white' : 'black')};
`;
