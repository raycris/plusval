import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

import BedSVG from "../assets/icons/bed.svg";
import LocationSVG from "../assets/icons/location.svg";
import Partners from "./partners";

const properties = [
  {
    id: 1,
    location: "Naco",
    buildingName: " C Y J X",
    roomNum: 2,
    space: 80,
    image:
      "https://i.pinimg.com/originals/9e/e1/fd/9ee1fd99715ce4f7c031c4d4cb5f3292.jpg",
    price: "113,000",
  },
  {
    id: 2,
    location: "Bavaro",
    buildingName: "Doral Residence",
    roomNum: 3,
    space: 45,
    image:
      "https://i.pinimg.com/originals/7f/45/17/7f451739af26c4c37bdbc39ee28359f4.jpg",
    price: "76,000",
  },
  {
    id: 3,
    location: "El Cortecito",
    buildingName: "Oceana",
    roomNum: 3,
    space: 65,
    image:
      "https://i.pinimg.com/originals/e1/4e/6b/e14e6ba1688e8891d19108dcce8f7ff3.jpg",
    price: "149,000",
  },
  {
    id: 4,
    location: "Bavaro",
    buildingName: "Sausalito",
    roomNum: 2,
    space: 84,
    image:
      "https://i.pinimg.com/originals/64/f0/a9/64f0a91dfd2935e2d401472fbe198d4b.jpg",
    price: "136,500",
  },
  {
    id: 5,
    location: "Bavaro",
    buildingName: "BEY GARDEN PLUS",
    roomNum: 3,
    space: 95,
    image:
      "https://i.pinimg.com/originals/5f/69/85/5f69857af95f11f6649e2999fae1526c.jpg",
    price: "145,000",
  },
];
const PhotoCarrusel = () => {
  return (
    <>
      <Container>
        {properties.map((item) => (
          <PhotoContainer
            key={item.id}
            style={{
              objectFit: "contain",
              background: ` linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.63) 74.17%), url(${item.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <LocationContainer>
              <Icon src={LocationSVG} />
              <LocationLabel>{item.location}</LocationLabel>
            </LocationContainer>
            <InfoContainer>
              <HouseTitle>{item.buildingName}</HouseTitle>
              <HouseInfo>
                <HouseInfo>
                  <Icon src={BedSVG} style={{ marginRight: 8 }} />
                  <HouseInfoLabel>{item.roomNum}</HouseInfoLabel>
                </HouseInfo>
                <HouseInfo>
                  <Icon src={LocationSVG} style={{ marginRight: 8 }} />
                  <HouseInfoLabel>Desde {item.space} Mts</HouseInfoLabel>
                </HouseInfo>
              </HouseInfo>
              <Price>Desde US${item.price}</Price>
            </InfoContainer>
          </PhotoContainer>
        ))}
      </Container>
      <PartnersContainer>
        <Partners />
      </PartnersContainer>
    </>
  );
};

export default PhotoCarrusel;

const Container = styled.div`
  display: flex;
  padding: 60px;
  /* top: 100; */
  /* position: absolute; */
  /* align-items: center; */
  /* justify-content: space-around; */
`;

const PartnersContainer = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const PhotoContainer = styled.div`
  width: 350px;
  height: 340px;
  margin: 0 8px;
  cursor: pointer;
  /* position: absolute;
  top: 0; */
  padding: 20px;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-between;
`;

const LocationContainer = styled.section`
  width: 62px;
  height: 22px;
  display: flex;
  opacity: 0.7;
  padding: 8px;
  align-items: center;
  border-radius: 4px;
  justify-content: space-around;
  background-color: ${theme.color.labelGray};
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const HouseTitle = styled.p`
  color: ${theme.color.white};
  margin: 0;
  font-size: 26px;
  font-weight: bold;
`;

const HouseInfo = styled.section`
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const HouseInfoLabel = styled.p`
  color: ${theme.color.white};
  margin: 8px 0;
  font-size: ${theme.fontSize.normal};
`;

const Price = styled.p`
  color: #cedc29;
  margin: 8px 0;
  opacity: 1;
  font-size: ${theme.fontSize.normal};
  font-weight: bold;
`;

const Line = styled.div`
  border-color: ${theme.color.lightWhite};
  border-bottom: 1px;
  justify-content: space-around;
  /* position: relative; */
  border-bottom-style: solid;
`;
