import React from "react";
import styled from "styled-components";

import StartSVG from "../assets/icons/start.svg";

const Start = () => {
  return (
    <Container>
      <Icon src={StartSVG} />
      <Icon src={StartSVG} />
      <Icon src={StartSVG} />
      <Icon src={StartSVG} />
      <Icon src={StartSVG} />
    </Container>
  );
};

export default Start;

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin: 2px;
`;
