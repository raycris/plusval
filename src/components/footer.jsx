import React from "react";
import styled from "styled-components";

import DarkLogo from "../assets/images/plusvalLogoDark.png";
import theme from "../lib/theme";
import Divider from "./divider";


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
   
   <Divider/>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 0 36px;
  display: flex;
  /* max-width: 100%; */
  min-height: 400px;
  align-items: center;
  justify-content: space-between;
  /* background-color: ${theme.color.secundary}; */
  background-color: red;
`;

const InfoContainer = styled.div`
  display: flex;
  max-width: 100%;
  /* align-items: flex-start; */
  white-space: normal;
  flex-direction: row;
  /* justify-content: space-between; */
`;

const ParentInfoContainer = styled.div`
  display: flex;
  max-width: 100%;
  /* align-items: flex-start; */
  white-space: normal;
  flex-direction: row;
  /* justify-content: space-between; */
  /* background-color: red; */
`;

const LabelContainer = styled.a`
  cursor: pointer;
  margin: 12px;
  display: flex;
  /* margin-right: 16px; */
  flex-direction: column;
  /* justify-content: flex-start; */
`;

const Label = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.normal};
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 14px;
  &:hover {
    color: ${theme.color.primary};
  }
`;

const ImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  /* flex-direction: row; */
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

