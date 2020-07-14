import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import NavBar from '../components/NavBar';
import HistoryItem from '../components/HistoryItem';
import historyData from '../data/history.json';

const HistoryPage = () => (
  <>
    <NavBar />
    <ParallaxMasthead />
    <SubTitle>{historyData.subTitle}</SubTitle>
    <History>
      {historyData.histories.map((data) => (
        <HistoryItem itemData={data} />
      ))}
    </History>
  </>
);

export default HistoryPage;

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
      <MastheadTitle>{historyData.title}</MastheadTitle>
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
  white-space: nowrap;
`;

const MastheadSubTitle = styled.span`
  display: block;
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;

const SubTitle = styled.span`
  display: block;
  font-weight: 300;
  margin: 3rem 5rem;
  text-align: center;
`;

const History = styled.div`
  max-width: 1300px;
  padding: 0 4rem;
  margin: 0 auto;
`;
