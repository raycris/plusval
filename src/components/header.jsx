import React from "react";
import styled from "styled-components";
import Button from "./button";

import Logo from "../assets/images/plusvalLogo.png";
import theme from "../lib/theme";

const Header = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={Logo} />
      </ImageContainer>
      <ButtonsContainer>
        <LabelContainer>
          <Label>Comprar</Label>
        </LabelContainer>

        <LabelContainer>
          <Label>Alquilar</Label>
        </LabelContainer>

        <LabelContainer>
          <Label>Vender</Label>
        </LabelContainer>

        <LabelContainer>
          <Label>Exclusivas</Label>
        </LabelContainer>

        <LabelContainer>
          <Label>Asociados</Label>
        </LabelContainer>
        <Button title="Registrate" kind="outline" />
      </ButtonsContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin: 0 16px;
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LabelContainer = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 16px;
  justify-content: center;
`;

const Label = styled.p`
  color: ${theme.color.secundary};
  font-size: ${theme.fontSize.normal};
  line-height: 24px;
  font-weight: 500;
  &:hover {
    color: ${theme.color.primary};
  }
`;

const ImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  max-width: 100%;
`;
