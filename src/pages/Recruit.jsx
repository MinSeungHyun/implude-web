import React, { useState, useEffect } from 'react';
import TextTransition from 'react-text-transition';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const TEXTS = ['열정적인', '새로움을 두려워 하지 않는', '긍정적인', '배우는 것을 즐기는'];

const RecruitPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
  }, []);

  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Title>우리는</Title>
        <TextTransition text={TEXTS[index % TEXTS.length]} />
        <Title>사람을 원합니다.</Title>
        <ApplyButton href="https://dimigo.in">
          지원하기
          <img src="./static/arrow_forward.svg" alt="Arrow" />
        </ApplyButton>
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .text-transition {
    width: 100% !important;
  }

  div,
  span {
    width: 100%;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 3px;
    line-height: 1.3;
    text-align: center;
    white-space: nowrap;
  }

  div {
    color: var(--primary-color);
  }
`;

const Title = styled.span`
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 20%,
    rgba(255, 255, 255, 0.8) 80%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 1;
`;

const ApplyButton = styled.a`
  display: flex;
  margin-top: 3rem;
  background: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border-radius: 100px;
  line-height: 1.4;
  box-shadow: 0 3px 9px 0 rgba(55, 108, 230, 0.5);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 1px 5px 0 rgba(55, 108, 230, 0.5);
  }

  &:active {
    box-shadow: 0 1px 5px 0 rgba(55, 108, 230, 0.3);
  }

  img {
    margin-left: 5px;
  }
`;

export default RecruitPage;
