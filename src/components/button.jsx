import React from "react";
import styled from "styled-components";

const Button = ({ ...props }) => {
  return (
    <Container kind={props.kind}>
      <Label>{props.title}</Label>
    </Container>
  );
};

export default Button;

const Container = styled.button`
  border: ${(props) =>
    props.kind === "outline" ? "1px solid #86c458" : "none"};
  cursor: pointer;
  height: 30px;
  min-width: 150px;
  align-items: center;
  border-radius: 68px;
  justify-content: center;
  background-color: ${(props) =>
    props.kind === "outline" ? "transparent" : "#86c458"};
  &:hover {
    background-color: #86c458;
  }
`;

const Label = styled.text`
  color: ${(props) => (props.kind === "outline" ? "#FFF" : "#86c458")};
  font-size: 16px;
  font-weight: 500;
  &:hover {
    color: #fff;
    font-weight: 500;
  }
`;
