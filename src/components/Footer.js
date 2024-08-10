import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const FooterContainer = styled.div`
    display: flex;
    background-color: #f8f8f8;

    @media (max-width: 376px) {
      display: flex;
      flex-direction: column;
    }
  `;
  const LogoComp = styled.img`
    width: 161px;
    height: 125px;
    margin-top: 123px;
    margin-left: 103px;
    @media (max-width: 376px) {
      width: 75px;
      height: 58px;
      margin-left: 150px;
      margin-right: 150px;
      margin-top: 52px;
    }
  `;
  const Heading = styled.h1`
    font-family: "Source Sans 3";
    font-size: 18.84px;
    margin-bottom: 15px;
    font-weight: 600;
    color: #0e2368;
    letter-spacing: 0.03em;
    text-align: left;

    @media (max-width: 376px) {
      width: 119px;
      font-size: 15.77px;
      margin-bottom: 10px;
    }
  `;
  const ContactText = styled.div`
    font-family: "Source Sans 3";
    font-size: 14.66px;
    font-weight: 400;
    line-height: 23.03px;
    color: #646874;
    text-align: left;
    width: 217px;
    margin-bottom: 15px;

    @media (max-width: 376px) {
      font-size: 8.76px;
      margin-bottom: 7px;
      line-height: 12.27px;
      width: 294px;
    }
  `;
  const ContactContainer = styled.div`
    width: 232px;
    height: 186px;
    margin-top: 84px;
    margin-left: 210px;
    margin-bottom: 91px;

    @media (max-width: 376px) {
      width: 294px;
      height: 116px;
      margin-left: 41px;
      margin-right: 41px;
      margin-bottom: 29px;
    }
  `;
  const Others = styled.div`
    display: flex;
    width: 438px;
    height: 186px;
    margin-top: 84px;
    margin-left: 192px;
    margin-right:104px
    margin-bottom: 92px;

    @media (max-width: 376px) {
      display:flex;
      flex-direction: column;
      width:294px;
      margin-left: 46px;
      margin-top: 0px;
    }
  `;
  const More = styled.div`
    @media (max-width: 376px) {
      width: 87px;
      margin-top: 0;
    }
  `;
  const Social = styled.div`
    margin-left: 147px;
    // margin-tolp: 84px;
    width: 197px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 376px) {
      width: 111px;
    }
  `;
  const Text = styled.p`
    font-family: "Source Sans 3";
    font-size: 14.66px;
    font-weight: 400;
    margin-top: 14px;
    color: #646874;
    line-height: 27.22px;
    text-align: left;

    @media (max-width: 376px) {
      font-size: 8.76px;
      line-height: 12px;
    }
  `;
  const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 376px) {
      display: flex;
      flex-direction: column-reverse;
      margin-bottom: 107px;
      margin-right: 132px;
    }
  `;
  const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    width: 197px;
  `;
  const SocialHeading = styled.div`
    font-family: "Source Sans 3";
    font-size: 18.84px;
    margin-bottom: 15px;
    font-weight: 600;
    color: #0e2368;
    letter-spacing: 0.03em;
    text-align: left;

    @media (max-width: 376px) {
      display: none;
    }
  `;
  const CopyRight = styled.p`
    font-family: "Roboto';
    font-size: 14.66px;
    font-weight: 400;
    line-height: 25.12px;
    text-align: center;
    color: #828b9c;
    margin-top:102px;
    width:200px;

    @media (max-width: 376px) {
      margin-bottom:15px;
    }
  `;

  return (
    <FooterContainer>
      <LogoComp src={Logo} alt="Logo" />
      <ContactContainer>
        <Heading>Contact Us</Heading>
        <ContactText>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </ContactText>
        <ContactText>example2020@gmail.com</ContactText>
        <ContactText>(904) 443-0343</ContactText>
      </ContactContainer>
      <Others>
        <More>
          <Heading>More</Heading>
          <Text>About Us</Text>
          <Text>Products</Text>
          <Text>Career</Text>
          <Text>Contact Us</Text>
        </More>
        <Social>
          <SocialHeading>Social Links</SocialHeading>
          <SocialContainer>
            <SocialIcons>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  width: "21px",
                  height: "21px",
                  marginRight: "30.22px",
                  color: "#0E2368",
                }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                style={{
                  width: "21px",
                  height: "21px",
                  marginRight: "30.22px",
                  color: "#0E2368",
                }}
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{
                  width: "21px",
                  height: "21px",
                  marginRight: "30.22px",
                  color: "#0E2368",
                }}
              />
            </SocialIcons>
            <CopyRight>© 2022 Food Truck Example</CopyRight>
          </SocialContainer>
        </Social>
      </Others>
    </FooterContainer>
  );
}
