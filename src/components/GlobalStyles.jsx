import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: #376ce6;
  --secondary-color: #28287b;
  --nav-height: 60px;
  --burger-button-size: 25px;
}

/* react-burger-menu styles */
.bm-burger-button {
  position: fixed;
  width: var(--burger-button-size);
  height: var(--burger-button-size);
  top: calc((var(--nav-height) - var(--burger-button-size)) / 2);
  right: calc((var(--nav-height) - var(--burger-button-size)) / 2);
}
.bm-burger-bars {
  height: 15% !important;
}
.bm-menu-wrap {
  top: 0;
}
.bm-menu {
  padding: 1rem;
  padding-top: 2rem;
}
.bm-overlay {
  top: 0;
  left: 0;
}
.bm-item-list a {
  padding: 1rem;
  outline: none;
}
`;

export const Constants = {
  tabletScreenWidth: 1200,
  mobileScreenWidth: 600,
};

export default GlobalStyles;
