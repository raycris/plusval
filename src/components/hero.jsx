import React from "react";
import styled from "styled-components";
import HERO from "../assets/images/hero.jpg";
import theme from "../lib/theme";
import Button from "./button";
import LocationSVG from "../assets/icons/location.svg";
import MagnifyingGlassSVG from "../assets/icons/magnifying-glass.svg";
import ButtonFilters from "./buttonFilters";

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

          <ButtonFilters/>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Hero;

const Container = styled.section`
  max-width: 100%;
  max-height: 100%;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  /* background-image: ${HERO}; */
`;

const HeroPiture = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: cover;
`;

const CardContainer = styled.section`
  height: 100%;
  /* background-color: ${theme.color.white}; */
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.section`
  width: 676px;
  height: 236px;
  background-color: ${theme.color.white};
  /* background-color: blue; */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const Title = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.title};
  font-weight: bold;
  line-height: 56px;
`;
const ButtonContainer = styled.article`
  border-radius: 68px;
  width: 244px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${theme.color.lightWhite};
`;

const Label = styled.p`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.normal};
  &:hover {
    color: ${theme.color.white};
  }
`;

const LabelContainer = styled.span`
  background-color: ${theme.color.white};
  border-radius: 68px;
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: ${theme.color.primary};
  border-radius: 68px;
  width: 150px;
  height: 44px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.hoverGreen};
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
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
