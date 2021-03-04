import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const AboutPage = () => (
  <Content>
    <NavBar dark />
    <Wrapper>
      <Logo src="./static/logo.svg" />
      <Title>상상한 대로 만들어라</Title>
      <Description>
        한국디지털미디어고등학교 안드로이드 동아리 #IMPLUDE
        <br />
        임플루드는 2016년에 설립되어 지금의 2021년까지 "상상한 대로 만들어라"라는 모토를 가지고 
        <br />
        많은 상상들을 애플리케이션으로 옮겨왔던 동아리입니다.
      </Description>
    </Wrapper>
  </Content>
);

export default AboutPage;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--secondary-color);
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled.img`
  display: block;
  height: 5rem;
  margin: 0 auto;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  color: white;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1rem;
  white-space: nowrap;
`;

const Description = styled.p`
  color: white;
  font-weight: 200;
  text-align: center;
  white-space: nowrap;
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
`;
