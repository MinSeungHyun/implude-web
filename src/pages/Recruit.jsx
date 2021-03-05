import React, { useState, useEffect } from 'react';
import TextTransition from 'react-text-transition';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const TEXTS = ['당신도 앱 만들고싶다면?','앱 디자인에 관심이 있다면?','색조합 하나는 기가막히게 잘 뽑는다면?','C나 Python을 해본적 있다면?','기획의 장인이라면?','임플루드가 궁금하다면?','대회 나가서 수상하고싶다면?','가족같은 선배를 원한다면?','디자인을 배우고싶다면?','개발을 배우고싶다면?','백엔드 할 수 있다면?','프론트엔드 할 수 있다면?','도대체 일반동아리 동장은 어떻게 생겼을까 궁금하다면?'];

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
        <Title>혹시</Title>
        <TextTransition text={TEXTS[index % TEXTS.length]} />
        <Title>지금 바로 지원하세요.</Title>
        <ApplyButton href="https://dimigo.in/circle/">
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
