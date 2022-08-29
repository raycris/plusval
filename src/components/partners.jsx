import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

import Arrow from "../assets/images/fowardArrow.png";

const people = [
  {
    id: 1,
    title: "Plusval Santo Domingo",
    subtitle: "Equipo de + de 120 asesores con especialidad en Santo Domingo.",
    width: "651px",
    image:
      "https://i.pinimg.com/originals/be/55/98/be559821d443b3964dce5e11b051e746.jpg",
  },
  {
    id: 2,
    title: "Plusval Punta Cana",
    subtitle: "Equipo de + de 30 asesores con especialidad en la region Este.",
    width: "456px",
    image:
      "https://i.pinimg.com/originals/26/95/4b/26954bc88fe97df8137939d0389ebbec.jpg",
  },
  {
    id: 3,
    title: "Plusval Venta Directa",
    subtitle:
      "Equipo de + de 50 asesores con especialidad en el Distrito Nacional.",
    width: "554px",
    image:
      "https://i.pinimg.com/originals/e1/e5/23/e1e523f2333f5116a27a982d22e786e6.jpg",
  },
  {
    id: 4,
    title: "Plusval Puente Azul",
    subtitle:
      "Equipo de + de 40 asesores con especialidad en Santo Domingo Este y Oeste.",
    width: "554px",
    image:
      "https://i.pinimg.com/originals/e1/e5/23/e1e523f2333f5116a27a982d22e786e6.jpg",
  },
  {
    id: 5,
    title: "Plusval Comercial",
    subtitle: "Local comerciales y negocios.",
    width: "456px",
    image:
      "https://i.pinimg.com/originals/97/4d/d0/974dd0bebe10c029ad363cf4ae66a3af.jpg",
  },
  {
    id: 6,
    title: "Plusval Norte",
    subtitle: "Equipo de + de 25 asesores con especialidad en la region norte.",
    width: "651px",
    image:
      "https://i.pinimg.com/originals/a1/96/c2/a196c275f4033795ae2077074adec96e.jpg",
  },
];

const Partners = () => {
  return (
    <Container
      style={{
        background: `linear-gradient(
      180deg,
      rgba(83, 160, 25, 0.1) 0%,
      rgba(83, 160, 25, 0) 88.54%
    )`,
      }}
    >
      <LabelContainer>
        <Title>Nuestras filiales</Title>
        <Description>
          Nuestas meta es llevar nuestro servicio de innovacion constante a
          todos los rincones del país. Si estás en el
          <strong> Norte, Este, Zona Oriental</strong> o en el Distrito Nacional
          tienes un
          <strong> Plusval muy cerca de ti!</strong>
        </Description>
      </LabelContainer>

      <ImagenContainer>
        <Card
          style={{
            width: "651px",
            objectFit: "contain",
            background: `linear-gradient(
            180deg,
            rgba(196, 196, 196, 0) 0%,
            rgba(0, 0, 0, 0.63) 74.17%
          ),
          url(https://i.pinimg.com/originals/be/55/98/be559821d443b3964dce5e11b051e746.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardInfo>
            <CardTitle>Plusval Santo Domingo</CardTitle>
            <CardStitle>
              Equipo de + de 120 asesores con especialidad en Santo Domingo.
            </CardStitle>
            <CardButton>
              <ButtonLabel>CONECE MAS</ButtonLabel>
              <Icon src={Arrow} />
            </CardButton>
          </CardInfo>
        </Card>
        <Card
          style={{
            width: "456px",
            background: `linear-gradient(
            180deg,
            rgba(196, 196, 196, 0) 0%,
            rgba(0, 0, 0, 0.63) 74.17%
          ),
          url(https://i.pinimg.com/originals/26/95/4b/26954bc88fe97df8137939d0389ebbec.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardInfo>
            <CardTitle>Plusval Punta Cana</CardTitle>
            <CardStitle>
              Equipo de + de 30 asesores con especialidad en ;a region Este.
            </CardStitle>
            <CardButton>
              <ButtonLabel>CONECE MAS</ButtonLabel>
              <Icon src={Arrow} />
            </CardButton>
          </CardInfo>
        </Card>
      </ImagenContainer>
      <ImagenContainer>
        <Card
          style={{
            width: "554px",
            background: `linear-gradient(
            180deg,
            rgba(196, 196, 196, 0) 0%,
            rgba(0, 0, 0, 0.63) 74.17%
          ),
          url(https://i.pinimg.com/originals/e1/e5/23/e1e523f2333f5116a27a982d22e786e6.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardInfo>
            <CardTitle>Plusval Venta Directa</CardTitle>
            <CardStitle>
              Equipo de + de 50 asesores con especialidad en el Distrito
              Nacional.
            </CardStitle>
            <CardButton>
              <ButtonLabel>CONECE MAS</ButtonLabel>
              <Icon src={Arrow} />
            </CardButton>
          </CardInfo>
        </Card>
        <Card
          style={{
            width: "554px",
            objectFit: "contain",
            background: `linear-gradient(
            180deg,
            rgba(196, 196, 196, 0) 0%,
            rgba(0, 0, 0, 0.63) 74.17%
          ),
          url(https://i.pinimg.com/originals/0d/43/4b/0d434b919d7f3090ad60cf55a70839ea.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardInfo>
            <CardTitle>Plusval Puente Azul</CardTitle>
            <CardStitle>
              Equipo de + de 40 asesores con especialidad en Santo Domingo Este
              y Oeste.
            </CardStitle>
            <CardButton>
              <ButtonLabel>CONECE MAS</ButtonLabel>
              <Icon src={Arrow} />
            </CardButton>
          </CardInfo>
        </Card>
      </ImagenContainer>
      <ImagenContainer>
        <Card
          style={{
            width: "456px",
            background: `linear-gradient(
            180deg,
            rgba(196, 196, 196, 0) 0%,
            rgba(0, 0, 0, 0.63) 74.17%
          ),
          url(https://i.pinimg.com/originals/97/4d/d0/974dd0bebe10c029ad363cf4ae66a3af.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardInfo>
            <CardTitle>Plusval Comercial</CardTitle>
            <CardStitle>Local comerciales y negocios.</CardStitle>
            <CardButton>
              <ButtonLabel>CONECE MAS</ButtonLabel>
              <Icon src={Arrow} />
            </CardButton>
          </CardInfo>
        </Card>
        <Card
          style={{
            width: "651px",
            background: `linear-gradient(
            180deg,
            rgba(196, 196, 196, 0) 0%,
            rgba(0, 0, 0, 0.63) 74.17%
          ),
          url(https://i.pinimg.com/originals/a1/96/c2/a196c275f4033795ae2077074adec96e.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardInfo>
            <CardTitle>Plusval Norte</CardTitle>
            <CardStitle>
              Equipo de + de 25 asesores con especialidad en la region norte.
            </CardStitle>
            <CardButton>
              <ButtonLabel>CONECE MAS</ButtonLabel>
              <Icon src={Arrow} />
            </CardButton>
          </CardInfo>
        </Card>
      </ImagenContainer>
    </Container>
  );
};

export default Partners;

const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  height: 100%;
  display: flex;
  padding: 60px;
  max-width: 1290px;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 32px;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  color: ${theme.color.labelGray};
  text-align: center;
  line-height: 40px;
`;
const Description = styled.p`
  color: ${theme.color.labelGray};
  font-size: ${theme.fontSize.normal};
  text-align: center;
  line-height: 24px;
`;

const LabelContainer = styled.div`
  width: 52%;
  flex-wrap: wrap;
`;
const ImagenContainer = styled.div`
  gap: 1rem;
  margin: 0 0 1rem 0;
  display: grid;
  flex-wrap: wrap;
  grid-auto-flow: column;
`;

const Card = styled.div`
  height: 255px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  min-width: 10px;
  border-radius: 8px;
`;
const CardInfo = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  color: ${theme.color.white};
  margin: 0;
  line-height: 32px;
  font-weight: 700;
`;

const CardStitle = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.normal};
  font-weight: 400;
`;

const CardButton = styled.button`
  width: 150px;
  border: none;
  height: 2rem;
  cursor: pointer;
  display: flex;
  background: ${theme.color.primary};
  align-items: center;
  border-radius: 16px;
  justify-content: center;
`;
const ButtonLabel = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.small};
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;
