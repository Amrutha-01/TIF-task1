import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import MainImg from "../assets/MainImg.svg";
import Vector1 from "../assets/Vector 1.svg";

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 376px) {
    flex-direction: column-reverse;
  }
`;

const LeftContainer = styled.div`
  margin-left: 100px;
  margin-top: 33px;

  @media (max-width: 376px) {
    margin-top: 75.28px;
    margin-left: 67px;
    width: 240px;
    height: 130px;
  }
`;

const LogoImage = styled.img`
  @media (max-width: 376px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  width: 375px;
  margin-top: 111px;
  @media (max-width: 376px) {
    margin-top: 0px;
    width: 240px;
  }
`;

const Title = styled.h1`
  font-size: 62px;
  text-align: left;
  line-height: 69px;
  height: 207px;
  color: #0e2368;
  font-weight: bold;
  font-family: "Source Sans 3";

  span {
    color: #e23744;
  }
  @media (max-width: 376px) {
    font-size: 38px;
    line-height: 46px;
    width: 240px;
    height: 130px;
    text-align: center;
  }
`;

const Body = styled.p`
  font-size: 16.44px;
  color: #444957;
  font-family: "Open Sans";
  font-weight: normal;
  margin-top: 26px;
  margin-bottom: 41px;
  text-align: left;
  @media (max-width: 376px) {
    margin-top: 21px;
    font-size: 11px;
    width: 249px;
    margin-bottom: 28px;
    text-align: center;
  }
`;

const ExploreButton = styled.button`
  background-color: #e23744;
  border-radius: 36px;
  width: 190px;
  height: 63px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans";

  @media (max-width: 376px) {
    width: 120px;
    height: 40px;
    font-size: 12.27px;
    margin-left: 60px;
    margin-bottom: 64px;
  }
`;

const RightContainer = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  float: right;
  position: relative;
  width: 735px;
  height: 804px;

  @media (max-width: 376px) {
    width: 378.21px;
    height: 413.72px;
  }
`;

const VectorImage = styled.img`
  position: absolute;
  float: right;
  width: 752px;
  height: 839px;
  top: -10px;
  @media (max-width: 376px) {
    width: 375px;
    height: 426px;
    top: -3px;
  }
`;

const GetInTouchButton = styled.button`
  border-radius: 21px;
  border: 1px solid white;
  color: white;
  display: flex;
  padding: 3px 26px;
  font-size: 16px;
  width: 142px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  right: 0px;
  margin-right: 41px;
  position: absolute;
  float: right;
`;

export default function Hero() {
  return (
    <HeroSection>
      <LeftContainer>
        <LogoImage src={Logo} />
        <TextContainer>
          <Title>
            Discover the <span>Best</span> Food and Drinks
          </Title>
          <Body>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Body>
          <ExploreButton>Explore Now!</ExploreButton>
        </TextContainer>
      </LeftContainer>
      <RightContainer>
        <MainImage src={MainImg} />
        <VectorImage src={Vector1} />
        <GetInTouchButton>Get In Touch</GetInTouchButton>
      </RightContainer>
    </HeroSection>
  );
}
