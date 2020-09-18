import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .mt-3 {
    margin-top: 3 !important;
    padding-top: 5%;
    padding-bottom: 5%;
    min-height: 100vh !important;
  }
`;

export const Layout = (props) => {
  return (
    <Styles>
      <Container className="mt-3">{props.children}</Container>
    </Styles>
  );
};
