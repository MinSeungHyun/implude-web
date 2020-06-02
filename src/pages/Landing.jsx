import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

const LandingPage = () => (
  <Content>
    <NavBar dark />
    <Title>
      상상한 대로 만들어라,
      <br />
      #IMPLUDE
    </Title>
    <MockupWrapper>
      <Mockup src="./static/implude_app_mockup.png" />
    </MockupWrapper>
  </Content>
);

export default LandingPage;

const gradientRatio = '45%';

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    52.5deg,
    var(--secondary-color) ${gradientRatio},
    var(--primary-color) ${gradientRatio}
  );
`;

const Title = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-weight: bold;
  font-size: 3.5vw;
  margin-left: 3%;
`;

const MockupWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: ${gradientRatio};
  height: 100%;
`;

const Mockup = styled.img`
  height: 100%;
  margin-left: -8%;
`;
