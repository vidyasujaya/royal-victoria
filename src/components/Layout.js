import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";
import Wave from "../assets/Wave.svg";
import BottomDesign from "../assets/BottomDesign.svg";

const Styles = styled.div`
  .mt-3 {
    margin-top: 3 !important;
    padding-top: 5%;
    padding-bottom: 5%;
    min-height: 100vh !important;
  }
  .imgwidth {
    width: 100vw;
  }
`;

export const Layout = (props) => {
  return (
    <Styles>
      <Container className="mt-3">{props.children}</Container>
      <Image className="imgwidth" src={BottomDesign}></Image>
    </Styles>
  );
};
