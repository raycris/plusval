import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

const StickeLocation = ({ ...props }) => {
  return (
    <Container withIcon>
      {props.withIcon === true ? (
        <>
          <Icon src={props.icon} />
          <Label>{props.title}</Label>
        </>
      ) : (
        <Label>{props.title}</Label>
      )}
    </Container>
  );
};

export default StickeLocation;

const Container = styled.section`
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

const Label = styled.p`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.small};
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
