import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

const Quantity = ({ ...props }) => {
  return (
    <Container>
      <Label>{props.title}</Label>
      <NumberContainer>
        <NumberLabel>1</NumberLabel>
        <NumberLabel>2</NumberLabel>
        <NumberLabel>3</NumberLabel>
        <NumberLabel>4</NumberLabel>
        <NumberLabel>5+</NumberLabel>
      </NumberContainer>
    </Container>
  );
};

export default Quantity;

const Container = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  background-color: red;
  padding: 24px;
  justify-content: space-between;
`;

const Label = styled.p`
  color: ${theme.color.labelGray};
  font-size: ${theme.fontSize.normal};
  line-height: 24px;
  margin-bottom: 8px;
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: center;
  border-left: 1px;
  border-radius: 4px;
  background-color: blue;
  &:hover :focus {
    ${theme.color.primary};
  }
`;
const NumberLabel = styled.p`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.normal};
  line-height: 24px;
  padding: 10px;
  font-weight: bold;
  /* border-radius: 4px; */
  border: 1px solid ${theme.color.secundary};
  &:hover :focus {
    ${theme.color.white};
  }
`;
