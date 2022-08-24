import React from "react";
import styled from "styled-components";
import theme from "../lib/theme";
import userSVG from "../assets/icons/user.svg";

const Button = ({ ...props }) => {
  return (
    <Container kind={props.kind}>
      <Icon src={userSVG} />
      <Label>{props.title}</Label>
    </Container>
  );
};

export default Button;

const Container = styled.button`
  border: ${(props) =>
    props.kind === "outline" ? `1px solid ${theme.color.primary}` : "none"};
  cursor: pointer;
  height: 30px;
  display: flex;
  min-width: 150px;
  align-items: center;
  border-radius: 68px;
  justify-content: space-around;
  background-color: ${(props) =>
    props.kind === "outline" ? "transparent" : `${theme.color.primary}`};
  &:hover {
    background-color: ${theme.color.primary};
  }
`;

const Label = styled.p`
  color: ${(props) =>
    props.kind === "outline"
      ? `${theme.color.white}`
      : `${theme.color.primary}`};
  font-size: ${theme.fontSize.small};
  text-align: center;
  font-weight: 500;
  &:hover {
    color: ${theme.color.white};
    font-weight: 500;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
