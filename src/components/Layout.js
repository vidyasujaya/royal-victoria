import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";
import BottomShortLines from "../assets/BottomShortLines.svg";

const Styles = styled.div`
  .mt-3 {
    margin-top: 3 !important;
    padding-top: 5%;
    padding-bottom: 5%;
    height: auto;
  }
  .imgwidth {
    width: 100vw;
  }
`;

export const Layout = (props) => {
  return (
    <Styles>
      <Container className="mt-3">{props.children}</Container>
      <Image fluid className="imgwidth" src={BottomShortLines}></Image>
    </Styles>
  );
};
