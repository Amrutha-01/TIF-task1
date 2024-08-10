import React from "react";
import styled from "styled-components";
import AboutImg from "../assets/about-img.png";

const AboutSection = styled.div`
  display: flex;
  background: linear-gradient(
    90.07deg,
    rgba(30, 42, 93, 0.04) 30.91%,
    rgba(48, 62, 130, 0.04) 64.79%,
    rgba(60, 80, 157, 0.04) 91.94%
  );
  height: 467px;
  margin-top: 180px;
  margin-bottom: 157px;

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    // margin-top: 64px;
    padding: 140px 50px;
    background: #f0f1f7;
  }
`;

const AboutImage = styled.img`
  height: 467px;
  margin-left: 205px;

  @media (max-width: 376px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  width: 447px;
  height: 191.41px;
  text-align: left;
  margin-left: 200px;
  margin-top: 107px;
  @media (max-width: 376px) {
    margin-left: 0px;
    margin-top: 0px;
    width: 275px;
  }
`;

const Title = styled.h1`
  font-size: 45px;
  color: #0e2368;
  font-family: "Poppins";
  font-weight: 600;
  @media (max-width: 376px) {
    font-size: 26px;
    height: 35px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 15px;
  color: #444957;
  font-family: "Open Sans";
  margin-top: 27.41px;
  margin-bottom: 21.59px;
  @media (max-width: 376px) {
    font-size: 26px;
    width: 275px;
    font-size: 11px;
    line-height: 21px;
    text-align: center;
  }
`;

const ReadMoreButton = styled.button`
  background-color: #e23744;
  border-radius: 36px;
  width: 132px;
  font-family: "Open Sans";
  height: 42px;
  font-size: 18px;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 376px) {
    font-size: 11px;
    width: 96px;
    height: 25px;
    text-align: center;
    font-family: "Source Sans 3";
    margin-left: 100px;
  }
`;

export default function About() {
  return (
    <AboutSection>
      <AboutImage src={AboutImg} />
      <TextContainer>
        <Title>About Us</Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </Description>
        <ReadMoreButton>Read More</ReadMoreButton>
      </TextContainer>
    </AboutSection>
  );
}
