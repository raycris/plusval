import React from "react";
import styled from "styled-components";
import "./App.css";
import Footer from "./components/footer";

import Header from "./components/header";
import Hero from "./components/hero";
import PhotoCarrusel from "./components/photoCarrusel";
import PhotoCatalog from "./components/photoCatalog";


function App() {
  return (
    <Container>
      <PintureContainer>
        <Header />
        <Hero />
      </PintureContainer>
      {/* <InforContainer>
        klk
      </InforContainer> */}

     <PhotoCatalog/>
<PhotoCarrusel/>
      <Footer/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PintureContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
`;

// const FooterContainer = styled.section`
//   display: flex;
//   align-items: center;
//   padding-right: 10px;
//   justify-content: end;
// `;

// const InforContainer = styled.div`
//   height: 900px;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
//   background-color: red;
// `;
