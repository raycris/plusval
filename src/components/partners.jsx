import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

const Partners = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Partners;

const Container = styled.div`
  display: flex;
  padding: 60px;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 32px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  max-width: 1290px;
  background-color: #eff6ea;
`;

const Title = styled.h2`
  color: ${theme.color.labelGray};
  line-height: 40px;
  text-align: center;
`;
const Description = styled.p`
  text-align: center;
  font-size: ${theme.fontSize.normal};
  line-height: 24px;
  color: ${theme.color.labelGray};
`;

const LabelContainer = styled.div`
  flex-wrap: wrap;
  width: 52%;
`;
const ImagenContainer = styled.div`
display: grid;

`