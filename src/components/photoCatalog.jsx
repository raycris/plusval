import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

import IconButton from "./iconButton";
import PhotoCarrusel from "./photoCarrusel";


import BackArrow from "../assets/images/backArrow.png";
import FowardArrow from "../assets/images/fowardArrow.png";

const PhotoCatalog = () => {
  return (
    <Container>
      <InfoContainer>
        <LabelContainer>
          <Title>Proyectos exclusivos</Title>
          <Subtitle>
            Propiedades y Proyectos que solo encontrarás en Plusval.
          </Subtitle>
        </LabelContainer>
        <ButtonContainer>
          <IconButton kind="outline" icon={BackArrow} cursor="pointer" />
          <IconButton
            kind="outline"
            icon={FowardArrow}
            cursor="pointer"
            style={{ marginLeft: 8 }}
          />
        </ButtonContainer>
      </InfoContainer>
      {/* <PhotoCarrusel/> */}
    </Container>
  );
};

export default PhotoCatalog;

const Container = styled.div`
  display: flex;
  padding: 60px;
  max-height: 324px;
  background: linear-gradient(
    180deg,
    rgba(83, 160, 25, 0.1) 0%,
    rgba(83, 160, 25, 0) 88.54%
  );
  align-items: center;
  border-color: ${theme.color.lightWhite};
  border-bottom: 1px;
  flex-direction: column;
  justify-content: space-around;
  border-bottom-style: solid;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LabelContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${theme.color.labelGray};
  margin: 0%;
  font-size: ${theme.fontSize.headerLabel};
  line-height: 40px;
  font-weight: bold;
`;
const Subtitle = styled.p`
  color: ${theme.color.labelGray};
  margin: 0%;
  font-size: ${theme.fontSize.normal};
  line-height: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
