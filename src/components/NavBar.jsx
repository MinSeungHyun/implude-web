import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import { Link } from 'react-router-dom';

const navigations = [
  { name: 'About', href: '/about' },
  { name: 'History', href: '/history' },
  { name: 'Recruit', href: '/recruit' },
  { name: 'Contact', href: '/contact' },
];

const textColor = theme('mode', {
  light: 'black',
  dark: 'white',
});

const backgroundColor = theme('mode', {
  light: '#fff',
  dark: 'transparent',
});

const shadow = theme('mode', {
  light: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
  dark: 'unset',
});

const logo = theme('mode', {
  light: './static/logo_symbol.svg',
  dark: './static/logo_symbol_dark.svg',
});

const NavBar = (props) => (
  <ThemeProvider theme={{ mode: props.dark ? 'dark' : 'light' }}>
    <NavBarContainer>
      <Link to="/">
        <LogoContainer>
          <LogoSymbol />
          <LogoText>IMPLUDE</LogoText>
        </LogoContainer>
      </Link>

      <NavList>
        {navigations.map(({ name, href }) => (
          <NavItem>
            <Link to={href}>{name}</Link>
          </NavItem>
        ))}
      </NavList>
    </NavBarContainer>
  </ThemeProvider>
);

export default NavBar;

const horizontalMargin = '40px';

const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  box-shadow: ${shadow};
  background: ${backgroundColor};
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
  background-image: url(${logo});
`;

const LogoText = styled.span`
  margin-left: 10px;
  font-weight: bold;
  color: ${textColor};
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
  color: ${textColor};
`;
