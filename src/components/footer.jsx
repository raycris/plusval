import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";
import Divider from "./divider";

import IgSVG from "../assets/icons/ig.svg";
import DarkLogo from "../assets/images/plusvalLogoDark.png";
import TwitterSVG from "../assets/icons/twitter.svg";
import YoutubeSVG from "../assets/icons/youtube.svg";
import FacebookSVG from "../assets/icons/facebook.svg";

const arrayInfo = [
  {
    id: 1,
    title: "Sobre nosotros",
    info: {
      one: "Nosotros",
      two: "Únete a nuestro equipo",
      three: "Políticas de privacidad",
      four: "Contacto",
    },
  },
  {
    id: 2,
    title: "Herramientas",
    info: {
      one: "Calculadora de préstamos",
      two: "Indice de precios",
      three: "Vende o alquila tu inmueble",
      four: "",
    },
  },
];

const Footer = () => {
  return (
    <Container>
      <Allinfo>
        <ImageContainer>
          <Image src={DarkLogo} />
          <IconContainer>
            <Icon src={FacebookSVG} />
            <Icon src={IgSVG} />
            <Icon src={TwitterSVG} />
            <Icon src={YoutubeSVG} />
          </IconContainer>
        </ImageContainer>

        <ParentInfoContainer>
          {arrayInfo.map((item) => (
            <InfoContainer key={item.id}>
              <LabelContainer>
                <Title>{item.title}</Title>
                <Label>{item.info.one}</Label>
                <Label>{item.info.two}</Label>
                <Label>{item.info.three}</Label>
                <Label>{item.info.four}</Label>
              </LabelContainer>
            </InfoContainer>
          ))}
        </ParentInfoContainer>
      </Allinfo>

      <Divider />

      <Allinfo>
        <InfoLabel>
          © 2022 Plusval Inmobiliaria. Todos los derechos reservados.
        </InfoLabel>
        <InfoLabel>
          Website por{" "}
          <NameLink href="https://github.com/raycris" target="_blank">
            Raycris Maldonado
          </NameLink>{" "}
        </InfoLabel>
      </Allinfo>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 0 36px;
  display: flex;
  min-height: 400px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.color.secundary};
`;

const InfoContainer = styled.div`
  display: flex;
  max-width: 100%;
  white-space: normal;
`;

const ParentInfoContainer = styled.div`
  display: flex;
  max-width: 100%;
  white-space: normal;
`;

const LabelContainer = styled.a`
  cursor: pointer;
  margin: 12px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.normal};
  line-height: 24px;
  margin-bottom: 14px;
  &:hover {
    color: ${theme.color.primary};
  }
`;

const ImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Image = styled.img`
  max-width: 100%;
`;

const Title = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.small};
  line-height: 16px;
  font-weight: 700;
  margin-bottom: 18px;
`;

const Allinfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Icon = styled.img`
  width: 26px;
  margin: 0 8px;
  height: 26px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameLink = styled.a`
  color: ${theme.color.orage};
  cursor: pointer;
  text-decoration: none;
`;

const InfoLabel = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.normal};
  line-height: 24px;
  margin-bottom: 14px;
`;
