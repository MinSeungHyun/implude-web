import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { Parallax } from 'react-parallax';

const HistoryPage = () => (
  <>
    <NavBar />
    <ParallaxMasthead />
  </>
);

const ParallaxMasthead = () => (
  <Parallax
    bgImage="./static/city_image.png"
    strength={500}
    bgImageStyle={{
      width: '100%',
      height: '200%',
      'object-fit': 'cover',
    }}
    style={{
      'margin-top': 'var(--nav-height)',
    }}
  >
    <Masthead>
      <MastheadSubTitle>History</MastheadSubTitle>
      <MastheadTitle>2016 - 2020</MastheadTitle>
    </Masthead>
  </Parallax>
);

const Masthead = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  backdrop-filter: brightness(80%) grayscale(50%);
  align-items: center;
  justify-content: center;
`;

const MastheadTitle = styled.span`
  color: white;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 8px;
`;

const MastheadSubTitle = styled.span`
  display: block;
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;

export default HistoryPage;
