import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

import PhoneSVG from "../assets/icons/telefono.svg";
import WhatsAppSVG from "../assets/icons/whatsapp.svg";

const info = [
  {
    id: 1,
    title: "Plusval HQ",
    description: "Máximo Avilés Blonda No.32, Ens. Julieta. Distrito Nacional",
    phoneNumer: "(809) 540-1234",
  },
  {
    id: 2,
    title: "Venta Directa",
    description:
      "Winston Churchill #1550, Plaza Orleans, Urbanización Fernández",
    phoneNumer: "(809) 378-1500",
  },
  {
    id: 3,
    title: "Punta Cana",
    description:
      "Bulevard Turístico Del Este km#5, Edificio Conydra, Punta Cana",
    phoneNumer: "(809) 468-1800",
  },
  {
    id: 4,
    title: "Zona Norte",
    description: "Plaza Bella Terra Mall, 1er Nivel, Mod. A, Santiago",
    phoneNumer: "(809) 612-3333",
  },
  {
    id: 5,
    title: "Zona Oriental",
    description: "Plaza Monaco, Autop. de San Isidro, Santo Domingo Este",
    phoneNumer: "(809) 534-5059",
  },
];

const Locations = () => {
  return (
    <Container>
      <InfoContainer>
        {info.map((item) => (
          <Card key={item.id}>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <Line />
            <ContactContainer>
              <Icon src={WhatsAppSVG} />
              <LabelContact>WhatsApp</LabelContact>
            </ContactContainer>
            <ContactContainer>
              <Icon src={PhoneSVG} />
              <LabelContact>{item.phoneNumer}</LabelContact>
            </ContactContainer>
          </Card>
        ))}
      </InfoContainer>
    </Container>
  );
};

export default Locations;

const Container = styled.div`
  display: flex;
  background: linear-gradient(
    180deg,
    rgba(83, 160, 25, 0.1) 0%,
    rgba(83, 160, 25, 0) 88.54%
  );
  align-items: center;
  justify-content: center;
`;
const InfoContainer = styled.section`
  display: flex;
  padding: 40px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const Card = styled.section`
  width: 300px;
  margin: 18px;
  height: 178px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
`;
const Title = styled.h5`
  color: ${theme.color.secundary};
  margin: 0;
  font-size: ${theme.fontSize.base};
`;
const Description = styled.p`
  color: ${theme.color.labelGray};
  font-size: ${theme.fontSize.normal};
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  justify-content: center;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const LabelContact = styled.a`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.normal};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
  background-color: rgba(118, 118, 118, 0.4);
`;
