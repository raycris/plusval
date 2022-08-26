import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

const IconButton = ({ ...props }) => {
  return (
    <Container kind={props.kind} cursor={props.cursor} style={props.style}>
      <Icon src={props.icon} />
    </Container>
  );
};

export default IconButton;

const Container = styled.button`
  border: ${(props) =>
    props.kind === "outline" ? `1px solid ${theme.color.primary}` : "none"};
  width: 40px;
  height: 40px;
  cursor: ${(props) => (props.cursor === "pointer" ? "pointer" : "auto")};
  display: flex;
  align-items: center;
  border-radius: 14px;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) =>
    props.kind === "outline" ? "transparent" : `${theme.color.primary}`};
  &:hover {
    background-color: ${theme.color.primary};
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
