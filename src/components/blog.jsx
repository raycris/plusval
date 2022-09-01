import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

import Arrow from "../assets/images/fowardArrow.png";

const cardInfo = [
  {
    id: 1,
    width: "540px",
    location: "Bienes Raices",
    image:
      "https://i.pinimg.com/originals/58/13/1c/58131c7e3327a150075c8ad3af687ac4.jpg",
    title: "Plusval destaca en feria NY",
  },
  {
    id: 2,
    width: "252px",
    location: "Bienes Raices",
    image:
      "https://i.pinimg.com/originals/31/9e/b8/319eb8bbc246e920088ca7afa6f3e2dc.jpg",
    title: "Sé parte del equipo Plusval",
  },
  {
    id: 3,
    width: "252px",
    location: "Bienes Raices",
    image:
      "https://i.pinimg.com/originals/e1/e5/23/e1e523f2333f5116a27a982d22e786e6.jpg",
    title: "¿Tengo un certificado de título o una constancia anotada?",
  },
];

const Blog = () => {
  return (
    <Container>
      {/* <Parent> */}

      <InfoContainer>
        <HeadContainer>
          <LabelContainer>
            <Title>Blog Plusval</Title>
            <Subtitle>
              Nuestro expertos te asesoran con lo que necesitas.
            </Subtitle>
          </LabelContainer>
          <CardButton>
            <ButtonLabel>MAS ARTICULOS</ButtonLabel>
            <Icon src={Arrow} />
          </CardButton>
        </HeadContainer>
        <PhotoContainer>
          {cardInfo.map((item) => (
            <Photo
              style={{
                width: `${item.width}`,
                bjectFit: "contain",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                background: `linear-gradient(
                180deg, rgba(196, 196, 196, 0) 0%,
                rgba(0, 0, 0, 0.63) 74.17%),
                url(${item.image})`,
              }}
            >
              <LocationContainer>
                <LocationLabel>Bienes Raices</LocationLabel>
              </LocationContainer>
              <PhotoLabel>Plusval destaca en feria NY</PhotoLabel>
            </Photo>
          ))}
        </PhotoContainer>
      </InfoContainer>
      {/* </Parent> */}
    </Container>
  );
};

export default Blog;

const Container = styled.section`
  margin: 90px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* position: relative;
  background-color: black; */
  /* height: 900px; */
  background: linear-gradient(
    180deg,
    rgba(83, 160, 25, 0.1) 0%,
    rgba(83, 160, 25, 0) 88.54%
  );
`;

const Parent = styled.div`
background: linear-gradient(
    180deg,
    rgba(83, 160, 25, 0.1) 0%,
    rgba(83, 160, 25, 0) 88.54%
  );
/* height: 50%; */
display: flex;

`

const InfoContainer = styled.div`
  width: 66%;
  height: 400px;
  display: flex;
  /* margin: 20px; */
  flex-direction: column;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  /* align-items: flex-end; */
  
  /* background-color: red; */
`;
const LabelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  
`;

const Title = styled.h2`
  color: ${theme.color.secundary};
  margin: 0;
  font-size: 30px;
  font-weight: bold;
`;
const Subtitle = styled.p`
  color: ${theme.color.labelGray};
  margin: 0;
`;
const CardButton = styled.button`
  width: 150px;
  border: none;
  height: 40px;
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

const PhotoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: aquamarine; */
`;
const Photo = styled.a`
  height: 228px;
  margin: 8px;
  cursor: pointer;
  display: flex;
  padding: 26px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-end;
`;

const PhotoLabel = styled.h3`
  color: ${theme.color.white};
  font-size: 26px;
  margin: 0;
  font-weight: bold;
`;

const LocationContainer = styled.section`
  width: 92px;
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

const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
