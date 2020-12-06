import React from 'react';
import NavBar from '../components/NavBar';
import styled, { createGlobalStyle } from 'styled-components';
import MediaQuery from 'react-responsive';

const SMALL_SCREEN_WIDTH = 1200;
const MOBILE_SCREEN_WIDTH = 600;
const SUB_TITLE = '상상한 대로 만들어라';

const LandingPage = () => (
  <>
    <LandingPageStyle />
    <Content>
      <NavBar dark />
      <TitleWrapper>
        <Title>
          <LogoSymbol />
          IMPLUDE
          <br />
          <MediaQuery minWidth={SMALL_SCREEN_WIDTH + 1}>
            <SubTitle>{SUB_TITLE}</SubTitle>
          </MediaQuery>
          <MediaQuery maxWidth={SMALL_SCREEN_WIDTH}>
            <EqualSpaceSubTitle>
              {[...SUB_TITLE.replaceAll(' ', '')].map((char) => (
                <span>{char}</span>
              ))}
            </EqualSpaceSubTitle>
          </MediaQuery>
        </Title>
      </TitleWrapper>
      <MediaQuery minWidth={SMALL_SCREEN_WIDTH + 1}>
        <MockupWrapper>
          <Mockup src="./static/implude_app_mockup.png" />
        </MockupWrapper>
      </MediaQuery>
      <MediaQuery maxWidth={SMALL_SCREEN_WIDTH}>
        <MobileMockup />
        <MobileMockupCover />
      </MediaQuery>
    </Content>
  </>
);

export default LandingPage;

const LandingPageStyle = createGlobalStyle`
body {
  overflow: hidden;
}
`;

const gradientRatio = '40%';

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(52.5deg, var(--secondary-color) ${gradientRatio}, var(--primary-color) ${gradientRatio});
  @media (max-width: ${SMALL_SCREEN_WIDTH + 'px'}) {
    background: var(--secondary-color);
  }
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 3%;
  z-index: 5;
  @media (max-width: ${SMALL_SCREEN_WIDTH + 'px'}) {
    margin: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
`;

const Title = styled.div`
  display: inline-block;
  color: white;
  font-weight: bold;
  font-size: 4vw;
  line-height: 1;
  @media (max-width: ${SMALL_SCREEN_WIDTH + 'px'}) {
    font-size: 4rem;
  }
  @media (max-width: ${MOBILE_SCREEN_WIDTH + 'px'}) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.span`
  font-size: 70%;
`;

const EqualSpaceSubTitle = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
  justify-content: space-between;
  font-size: 30%;
  font-weight: 400;
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

const MobileMockup = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  bottom: 0;
  background-repeat: no-repeat;
  background-image: url('./static/implude_app_mockup.png');
  background-size: cover;
  background-position-x: center;
`;

const MobileMockupCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0b0b20;
  opacity: 0.7;
`;

const LogoSize = '2.6vw';
const LogoSymbol = styled.div`
  display: inline-block;
  width: ${LogoSize};
  height: ${LogoSize};
  margin-right: 0.5vw;
  background-image: url('./static/logo_symbol_dark.svg');
  background-repeat: no-repeat;
  filter: brightness(0) invert(1);
  @media (max-width: ${SMALL_SCREEN_WIDTH + 'px'}) {
    width: 3rem;
    height: 3rem;
  }
  @media (max-width: ${MOBILE_SCREEN_WIDTH + 'px'}) {
    width: 1.9rem;
    height: 1.9rem;
  }
`;
