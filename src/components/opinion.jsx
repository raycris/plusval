import React from "react";
import styled from "styled-components";

import theme from "../lib/theme";

import Start from "./start";
import IconButton from "./iconButton";

import BackArrow from "../assets/images/backArrow.png";
import FowardArrow from "../assets/images/fowardArrow.png";

const Opinion = () => {
  return (
    <Container>
      <ParentContainer>
        <CardContainer>
          <DateContainer>
            <Start />|<DateLabel>2019-12-05</DateLabel>
          </DateContainer>
          <PostTitle>Super, Excelente</PostTitle>
          <Line />

          <DateContainer>
            <People src="https://i.pinimg.com/originals/26/95/4b/26954bc88fe97df8137939d0389ebbec.jpg" />
            <PeopleInfo>
              <PeopleName>Manny Glez</PeopleName>
              <DateContainer>
                <Description>Testimonio sobre </Description>
                <PeopleRecomendation> Francesca Bonnelly</PeopleRecomendation>
              </DateContainer>
            </PeopleInfo>
          </DateContainer>

          <FooterContent>
            <ButtonContainer>
              <IconButton kind="outline" icon={BackArrow} cursor="pointer" />
              <IconButton
                kind="outline"
                icon={FowardArrow}
                cursor="pointer"
                style={{ marginLeft: 8 }}
              />
            </ButtonContainer>

            <Line style={{ width: "100%", marginLeft: 10 }} />
          </FooterContent>
        </CardContainer>

        <Publicity>
          <Description>PUBLICIDAD</Description>
        </Publicity>
      </ParentContainer>
    </Container>
  );
};

export default Opinion;

const Container = styled.section`
  height: 506px;
  display: flex;
  padding: 40px;
  align-items: flex-start;
  justify-content: center;
`;
const CardContainer = styled.section`
  width: 450px;
  display: flex;
  padding: 0 40px;
  flex-direction: column;
`;

const ParentContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const DateLabel = styled.time`
  color: ${theme.color.labelGray};
  font-size: 12px;
  margin-left: 2px;
`;

const PostTitle = styled.p`
  color: ${theme.color.labelGray};
  font-size: ${theme.fontSize.subtitle};
`;

const People = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 10px;
  background-size: cover;
`;

const PeopleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PeopleName = styled.p`
  color: ${theme.color.labelGray};
  margin: 0;
  font-size: ${theme.fontSize.normal};
`;

const Description = styled.h6`
  color: ${theme.color.labelGray};
  margin: 0;
  font-size: 12px;
`;
const PeopleRecomendation = styled.h6`
  color: ${theme.color.primary};
  margin: 0 4px;
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  margin: 8px 0;
  display: flex;
  margin-right: 8px;
`;

const FooterContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Publicity = styled.div`
  width: 350px;
  height: 320px;
  border: 1px solid rgba(118, 118, 118, 0.4);
  padding: 16px 24px 32px;
  display: flex;
  justify-content: center;
`;

const Line = styled.div`
  height: 1px;
  margin-bottom: 16px;
  background-color: rgba(118, 118, 118, 0.4);
`;
