import React from "react";
import styled from "styled-components";
import HERO from "../assets/images/hero.jpg"

const Hero = () => {
  return (
    <Container>
      <HeroPiture src={HERO} alt="house interior" />
    </Container>
  );
};

export default Hero;

const Container = styled.section`
  max-width: 100%;
  max-height: 100%;
`;

const HeroPiture = styled.img`
  width: 100%;
  max-height: 600px;
  flex-wrap: nowrap;
  object-fit: cover;
`;