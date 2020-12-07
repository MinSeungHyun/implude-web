import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { slide as BurgerMenu } from 'react-burger-menu';

const MAX_BURGER_MENU_WIDTH = 600;

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

const burgerButtonColor = theme('mode', {
  light: 'black',
  dark: 'white',
});

const burgerMenuBackground = theme('mode', {
  light: 'white',
  dark: '#181849',
});

const NavBar = (props) => {
  const navItems = navigations.map(({ name, href }) => (
    <NavItem>
      <Link to={href}>{name}</Link>
    </NavItem>
  ));

  return (
    <ThemeProvider theme={{ mode: props.dark ? 'dark' : 'light' }}>
      <LocalStyles />
      <NavBarContainer>
        <Link to="/">
          <LogoContainer>
            <LogoSymbol />
            <LogoText>IMPLUDE</LogoText>
          </LogoContainer>
        </Link>

        <MediaQuery minWidth={MAX_BURGER_MENU_WIDTH + 1}>
          <NavList>{navItems}</NavList>
        </MediaQuery>
        <MediaQuery maxWidth={MAX_BURGER_MENU_WIDTH}>
          <BurgerMenu right>{navItems}</BurgerMenu>
        </MediaQuery>
      </NavBarContainer>
    </ThemeProvider>
  );
};
export default NavBar;

const horizontalMargin = '40px';

const LocalStyles = createGlobalStyle`
.bm-burger-bars{
  background: ${burgerButtonColor}
}
.bm-menu {
  background: ${burgerMenuBackground}
}
.bm-cross {
  background: ${textColor}
}
`;

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: var(--nav-height);
  align-items: center;
  box-shadow: ${shadow};
  background: ${backgroundColor};
  z-index: 99;
`;

const LogoContainer = styled.a`
  height: 70%;
  display: flex;
  margin-left: ${horizontalMargin};
  align-items: center;
  @media (max-width: ${MAX_BURGER_MENU_WIDTH + 'px'}) {
    margin-left: calc((var(--nav-height) - var(--burger-button-size)) / 2);
  }
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
