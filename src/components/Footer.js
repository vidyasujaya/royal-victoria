import React from "react";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

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

export const Footer = () => {
  return (
    <Navbar className="transparent" sticky="bottom">
      <p>footer info</p>
    </Navbar>
  );
};
