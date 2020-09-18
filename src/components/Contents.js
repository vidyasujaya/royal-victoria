import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div``;

export const Layout = (props) => {
  return (
    <Styles>
      <Container>
        <Col>
          <Image src="../assets/Logo.svg" />
        </Col>
        <Col></Col>
      </Container>
    </Styles>
  );
};
