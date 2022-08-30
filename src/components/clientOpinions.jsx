import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

const ClientOpinions = () => {
  return (
    <Container>
      <LabelContainer>
        <Title >Conoce qué opinan nuestros clientes</Title>
        <Subtitle>
          Nuestra mejor referencia son los clientes que han confiado en nuestro
          trabajo...
        </Subtitle>
      </LabelContainer>
    </Container>
  );
};

export default ClientOpinions;

const Container = styled.div`
  height: 50px;
  display: flex;
  padding: 60px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.color.darkGreen};
`;

const Title = styled.h2`
  color: ${theme.color.white};
  margin: 0;
  font-size: 30px;
  line-height: 40px;
`;
const Subtitle = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.normal};
`;

const LabelContainer = styled.div`
  margin: 0 174px;
  padding: 40px 24px 48px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;
