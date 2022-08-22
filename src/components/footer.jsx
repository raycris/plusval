import React from "react";
import styled from "styled-components";

import DarkLogo from "../assets/images/plusvalLogoDark.png";

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
      <ImageContainer>
        <Image src={DarkLogo} />
      </ImageContainer>
      <Parent>
        {arrayInfo.map((item) => (
          <InfoContainer>
            <LabelContainer>
              <Title>{item.title}</Title>
              <Label>{item.info.one}</Label>
              <Label>{item.info.two}</Label>
              <Label>{item.info.three}</Label>
              <Label>{item.info.four}</Label>
            </LabelContainer>
          </InfoContainer>
        ))}
      </Parent>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
padding: 0 36px;
  display: flex;
  max-width: 100%;
  min-height: 400px;
  align-items: center;
  justify-content: space-between;
  background-color: #4c4c4c;
`;

const InfoContainer = styled.div`
  display: flex;
  white-space: normal;
  justify-content: center;
  align-items: center;
`;

const Parent = styled.div`
  flex-direction: row;
  display: flex;
  max-width: 550px;
  align-items: flex-start;
  justify-content: space-between;
  white-space: normal;
`;

const LabelContainer = styled.a`
  cursor: pointer;
  display: flex;
  margin: 12px;
  margin-right: 16px;
  flex-direction: column;
  /* justify-content: flex-start; */
`;

const Label = styled.text`
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 14px;
  &:hover {
    color: #86c458;
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

const Title = styled.text`
  color: #ffffff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  margin-bottom: 18px;
`;
