import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

import BedSVG from "../assets/icons/bed.svg";
import LocationSVG from "../assets/icons/location.svg";

const properties = [
  {
    id: 1,
    location: "Naco",
    buildingName: " C Y J X",
    roomNum: 2,
    space: 80,
    image: ,
    price: "113,000",
  },
];
const PhotoCarrusel = () => {
  return (
    <Container>
      <PhotoContainer>
        <LocationContainer>
          <Icon src={LocationSVG} />
          <LocationLabel>Naco</LocationLabel>
        </LocationContainer>
        <InfoContainer>
          <HouseTitle>Mineri XIX</HouseTitle>
          <HouseInfo>
            <HouseInfo>
              <Icon src={BedSVG} style={{ marginRight: 8 }} />
              <HouseInfoLabel>2</HouseInfoLabel>
            </HouseInfo>
            <HouseInfo>
              <Icon src={LocationSVG} style={{ marginRight: 8 }} />
              <HouseInfoLabel>Desde 80 Mts</HouseInfoLabel>
            </HouseInfo>
          </HouseInfo>
          <Price>Desde US$444,440</Price>
        </InfoContainer>
      </PhotoContainer>
    </Container>
  );
};

export default PhotoCarrusel;

const Container = styled.div`
  display: flex;
  padding: 60px;
  align-items: center;
  justify-content: space-around;
`;

const PhotoContainer = styled.div`
  border-color: ${theme.color.lightWhite};
  border-bottom: 1px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 350px;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  justify-content: space-between;
  height: 360px;
  border-bottom-style: solid;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 0%,
    rgba(0, 0, 0, 0.63) 74.17%
  );
  /* background: red; */
`;

const LocationContainer = styled.section`
  background-color: ${theme.color.labelGray};
  opacity: 0.7;
  border-radius: 4px;
  align-items: center;
  padding: 8px;
  width: 62px;
  height: 22px;
  display: flex;
  justify-content: space-around;
`;

const LocationLabel = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.small};
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const InfoContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const HouseTitle = styled.p`
  font-size: 26px;
  color: ${theme.color.white};
  margin: 0;
`;

const HouseInfo = styled.section`
  display: flex;
  align-items: center;
  margin: 0 8px;
  justify-content: space-around;
`;
const HouseInfoLabel = styled.p`
  color: ${theme.color.white};
  margin: 8px 0;
  font-size: ${theme.fontSize.normal};
`;

const Price = styled.p`
  /* color: ${theme.color.primary}; */
  color: #cedc29;
  font-size: ${theme.fontSize.normal};
  font-weight: bold;
  opacity: 1;
  margin: 8px 0;
`;
