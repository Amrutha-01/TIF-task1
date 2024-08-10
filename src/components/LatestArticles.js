import React from "react";
import Slider from "./Slider";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 108px;

  @media (max-width: 376px) {
    width: 271px;
    margin-left: 52px;
    margin-right: 52px;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  color: #0e2368;
  width: 381px;
  font-weight: 600;
  margin-bottom: 41px;
  margin-left: 108px;

  @media (max-width: 376px) {
    font-size: 28px;
    margin-left: 0px;
    width: 216px;
    text-align: center;
  }
`;

export default function LatestArticles() {
  return (
    <Container>
      <Title>Latest Articles</Title>
      <Slider />
    </Container>
  );
}
