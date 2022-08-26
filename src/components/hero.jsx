import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

import HERO from "../assets/images/hero.jpg";

import Button from "./button";

import LocationSVG from "../assets/icons/location.svg";
import ButtonFilters from "./buttonFilters";
import MagnifyingGlassSVG from "../assets/icons/magnifying-glass.svg";

const Hero = () => {
  return (
    <Container
      style={{
        height: "100vh",
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundImage: `url(${HERO})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <CardContainer>
        <Title>¡Encuentra tu próximo Inmueble!</Title>
        <Card>
          <ButtonContainer>
            <LabelContainer>
              <Label>COMPRAR</Label>
            </LabelContainer>
            <LabelContainer>
              <Label>ALQUILAR</Label>
            </LabelContainer>
          </ButtonContainer>

          <SearchContainer>
            <Icon src={LocationSVG} style={{ marginRight: 8 }} />
            <SearchBar placeholder="Selectores o ciudades donde deseas buscar"></SearchBar>
            <SearchLabelContainer>
              <Icon src={MagnifyingGlassSVG} />
              <SearchLabel>BUSCAR</SearchLabel>
            </SearchLabelContainer>
          </SearchContainer>

          <ButtonFilters />
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Hero;

const Container = styled.section`
  max-width: 100%;
  max-height: 100%;
`;

const CardContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Card = styled.section`
  width: 676px;
  height: 236px;
  display: flex;
  padding: 40px;
  border-radius: 8px;
  flex-direction: column;
  background-color: ${theme.color.white};
`;

const Title = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.title};
  font-weight: bold;
  line-height: 56px;
`;
const ButtonContainer = styled.article`
  width: 244px;
  height: 36px;
  border: 1px solid ${theme.color.lightWhite};
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 68px;
  margin-bottom: 26px;
  justify-content: center;
`;

const Label = styled.p`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.normal};
  &:hover {
    color: ${theme.color.white};
  }
`;

const LabelContainer = styled.span`
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 68px;
  justify-content: center;
  background-color: ${theme.color.white};
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.primary};
  }
  &:focus {
    background: ${theme.color.primary};
  }
`;

const SearchLabel = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.normal};
`;

const SearchLabelContainer = styled.span`
  width: 150px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 68px;
  justify-content: space-evenly;
  background-color: ${theme.color.primary};
  &:hover {
    background-color: ${theme.color.hoverGreen};
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 56px;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
  background-color: transparent;
  &:focus {
    outline: none !important;
  }
`;

const SearchContainer = styled.div`
  border: 1px solid ${theme.color.lightWhite};
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
  background-color: ${theme.color.lightGreen};
  &:hover {
    border: 1px solid ${theme.color.primary};
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
