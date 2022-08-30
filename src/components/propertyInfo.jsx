import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

import IconButton from "./iconButton";

import BuildingSVG from "../assets/icons/building.svg";
import ChartSVG from "../assets/icons/chart.svg";
import PaperSVG from "../assets/icons/paper.svg";
import PeoplesSVG from "../assets/icons/peoples.svg";
import MapSVG from "../assets/icons/map.svg";
import UserSVG from "../assets/icons/user.svg";

const info = [
  {
    id: 1,
    icon: PaperSVG,
    title: "Compra y alquila con seguridad",
    description: `Adquiere una propiedad con seguridad y 
    confianza al buscar en nuestro inventario con +3,000 
    propiedades 100% depuradas y con el sello de calidad Plusval.`,
  },
  {
    id: 2,
    icon: ChartSVG,
    title: "Todos los servicios, una agencia en su inversión",
    description: `Realiza cualquier operación inmobiliaria que 
    necesites y cuando la necesites. Estaremos contigo hasta el final, 
    incluso después de la compra y venta de tu inmueble.`,
  },
  {
    id: 3,
    icon: BuildingSVG,
    title: "+60 Proyectos exclusivos",
    description: `Encuentra proyectos de apartamentos en plano 
    desarrollados por los mejores ingenieros y arquitectos del 
    país - solo disponibles en Plusval`,
  },
  {
    id: 4,
    icon: PeoplesSVG,
    title: "+9,000 Clientes satisfechos",
    description: `Compra, alquila o vende tu inmueble con una 
    empresa de más de 15 años de experiencia, miles de clientes 
    satisfechos y que te garantizan un proceso exitoso.`,
  },
  {
    id: 5,
    icon: UserSVG,
    title: "Asesórate con especialistas",
    description: `Recibe asesoría personalizada por parte de un equipo
     de agentes entrenados bajo un modelo de atención comercial que solo Plusval ofrece.`,
  },
  {
    id: 6,
    icon: `${MapSVG}`,
    title: "Cobertura Nacional",
    description: `Cuentas con una oficina Plusval cerca de ti. 
    Visítanos en Santiago, Punta Cana, Santo Domingo Este y el Distrito Nacional. 
    Además, dispondrás de +160 asesores para acompañarte en todo el proceso.`,
  },
];

const PropertyInfo = () => {
  return (
    <Container>
      <Title>
        ¿Por qué
        <strong style={{ color: "#000" }}> comprar, alquilar o vender </strong>
        un inmueble con nosotros?
      </Title>
      <ParentContainer>
        {info.map((item) => (
          <InfoContainer key={item.id}>
            <IconButton icon={item.icon} style={{ width: 64, height: 64 }} />
            <Cardtitle>{item.title}</Cardtitle>
            <Description>{item.description}</Description>
          </InfoContainer>
        ))}
      </ParentContainer>
    </Container>
  );
};

export default PropertyInfo;

const Container = styled.section`
  height: 100%;
  display: flex;
  padding: 60px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(118, 118, 118, 0.05);
`;

const Title = styled.h2`
  color: ${theme.color.labelGray};
  line-height: 32px;
  font-weight: bold;
`;

const ParentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  margin: 16px;
  width: 330px;
  height: 248px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const Cardtitle = styled.p`
  color: ${theme.color.black};
  margin: 0;
  font-size: ${theme.fontSize.base};
  line-height: 24px;
`;
const Description = styled.p`
  color: ${theme.color.labelGray};
  font-size: ${theme.fontSize.normal};
  line-height: 24px;
`;
