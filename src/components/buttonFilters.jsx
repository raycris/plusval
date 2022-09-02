import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

import BedSVG from "../assets/icons/bed.svg";
import CarSVG from "../assets/icons/car.svg";
import DollarSVG from "../assets/icons/dollar.svg";
import BuildingSVG from "../assets/icons/building.svg";

const array = [
  {
    id: 1,
    img: BuildingSVG,
    title: "Tipo de Inmuble",
    options: [
      "Apartamentos",
      "PentHouse",
      "Casa",
      "Locales y Oficinas",
      "Solares",
      "Hoteles",
      "Villas",
      "fincas",
      "Propiedades Turisticas",
      "Edificios",
      "Negocios",
    ],
  },
  {
    id: 2,
    img: BedSVG,
    title: "Habitaciones",
    options: [],
  },
  {
    id: 3,
    img: CarSVG,
    title: "Parqueos",
    options: [],
  },
  {
    id: 4,
    img: DollarSVG,
    title: "Precio",
    options: [],
  },
];


const ButtonFilters = () => {
  return (
    <Container>
      {array.map((item) => (
        <div key={item.id}>
          {item.id === 1 || item.id === 4 ? (
            <ComboBoxContainer style={{ width: "158px" }}>
              <Icon src={item.img} />
              <ComboBox>
                <ComboOptions selected disabled>
                  {item.title}
                </ComboOptions>
                {item.id === 1 ? (
                  item.options.map((element) => (
                    <ComboOptions key={element}>{element}</ComboOptions>
                  ))
                ) : (
                  <>
                    <ComboOptions>1</ComboOptions>
                    <ComboOptions>2</ComboOptions>
                    <ComboOptions>3</ComboOptions>
                  </>
                )}
              </ComboBox>
            </ComboBoxContainer>
          ) : (
            <ComboBoxContainer style={{ width: 108 }} key={item.title}>
              <Icon src={item.img} />
              <ComboBox>
                <ComboOptions selected disabled>
                  {item.title}
                </ComboOptions>
                <ComboOptions>1</ComboOptions>
                <ComboOptions>2</ComboOptions>
                <ComboOptions>3</ComboOptions>
              </ComboBox>
            </ComboBoxContainer>
          )}
        </div>
      ))}
    </Container>
  );
};

export default ButtonFilters;

const Container = styled.section`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  margin-top: 26px;
  justify-content: space-between;
`;

const ComboBox = styled.select`
  width: 100%;
  height: 28px;
  border: none;
  outline: none;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const ComboBoxContainer = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 8px;
  &:hover {
    border: 1px solid ${theme.color.primary};
  }
  border: 1px solid ${theme.color.lightWhite};
`;
const ComboOptions = styled.option`
  width: 100%;
  height: 50px;
  cursor: pointer;
  &:focus {
    border: ${theme.color.primary};
  }

  &:hover {
    background-color: ${theme.color.primary};
  }
`;
