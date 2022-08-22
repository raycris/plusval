import React from "react";
import styled from "styled-components";
import theme from "../lib/theme";

const Divider = () => {
  return (
    <Container>
      <Line />
    </Container>
  );
};

export default Divider;

const Container = styled.div`
  width: 100%;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${theme.color.laghtGray};
`;
