import React, { useState } from "react";
import styled from "styled-components";
import { carouselData } from "./carouselData";

export const Pagination = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
  margin: 2px;
  cursor: pointer;
`;

export const PageNumber = styled.div`
  margin: 0 15px;
  color: #424961;
  font-family: Source Sans Pro;
  font-size: 22px;
  font-weight: 400;
  line-height: 27.22px;
  text-align: left;
  font-family: "Source Sans 3";
`;

const SliderContainer = styled.div`
  display: flex;
  width: 271px;
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
  }
`;

const SlideCard = styled.div`
  border: 1.37px solid rgba(147, 162, 211, 0.38);
  border-radius: 20.94px;
  width: 381px;
  height: 554px;
  display: flex;
  margin-right: 41px;
  flex-direction: column;
  align-items: center;
  padding: 28px 0 39.97px 28px;

  @media (max-width: 376px) {
    width: 271px;
    height: 484px;
    padding: 40px 28px;
    margin-bottom: 61px;
  }
`;

const SlideImage = styled.img`
  width: 326px;
  height: 257px;
  margin-bottom: 34.51px;
  margin-right: 28px;
  @media (max-width: 376px) {
    width: 204px;
    height: 166px;
    margin-right: 0px;
  }
`;

const SlideTitle = styled.h1`
  font-size: 21px;
  width: 285px;
  color: #0e2368;
  font-family: "Poppins", sans-serif;
  line-height: 27px;
  font-weight: bold;
  text-align: left;
  padding-bottom: 13.7px;
  @media (max-width: 376px) {
    font-size: 16px;
    text-align: center;
  }
`;

const SlideDescription = styled.p`
  font-size: 15px;
  color: #444957;
  width: 295px;
  text-align: left;
  font-family: "Open Sans", sans-serif;
  position: relative;
  margin-right: 42px;
  margin-left: 42px;
  @media (max-width: 376px) {
    font-size: 12px;
    width: 200px;
    text-align: center;
  }
`;

const ReadMoreButton = styled.button`
  border: 1px solid #424961;
  border-radius: 21px;
  padding: 3px 26px;
  color: #424961;
  font-family: "Source Sans 3";
  font-weight: 600;
  font-size: 16.44px;
  margin-top: 27.41px;
  display: flex;
  position: relative;
  float: left;
  justify-content: center;
  align-items: center;

  @media (max-width: 376px) {
    width: 118px;
    height: 26px;
    font-size: 11px;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 64px;
`;

const NavigationButton = styled.button`
  font-size: 20px;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  border: 1px solid #424961;
  width: 28px;
  height: 29px;
  border-radius: 5px;
`;

const Slider = () => {
  const slidesToShow = 3;
  const totalSlides = Math.ceil(carouselData.length / slidesToShow);
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousState = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const nextState = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const indexSlide = (id) => {
    setCurrentIndex(id - 1);
  };

  const startIndex = currentIndex * slidesToShow;
  const endIndex = Math.min(startIndex + slidesToShow, carouselData.length);
  const currentSlides = carouselData.slice(startIndex, endIndex);

  return (
    <>
      <SliderContainer>
        {currentSlides &&
          currentSlides.map((slide, ind) => (
            <SlideCard key={ind}>
              <SlideImage src={slide.image} />
              <SlideTitle>{slide.title}</SlideTitle>
              <SlideDescription>{slide.description}</SlideDescription>
              <ReadMoreButton>Read More</ReadMoreButton>
            </SlideCard>
          ))}
      </SliderContainer>
      <NavigationContainer>
        <NavigationButton onClick={previousState}>&lt;</NavigationButton>
        <PageNumber>
          {currentIndex + 1} / {totalSlides}
        </PageNumber>
        <NavigationButton onClick={nextState}>&gt;</NavigationButton>
      </NavigationContainer>
    </>
  );
};

export default Slider;
