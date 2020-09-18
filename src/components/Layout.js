import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .mt-3 {
    margin-top: 3 !important;
  }
`;

export const Layout = (props) => {
  return (
    <Styles>
      <Container className="mt-3">{props.children}</Container>
    </Styles>
  );
};
