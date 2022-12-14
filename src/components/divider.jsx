import React from "react";
import styled from "styled-components";

const Divider = () => {
  return (
    <Container>
      <Line />
    </Container>
  );
};

export default Divider;

const Container = styled.div`
  width: 58%;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  margin-bottom: 50px;
  background-color: rgba(118, 118, 118, 0.4);
`;
