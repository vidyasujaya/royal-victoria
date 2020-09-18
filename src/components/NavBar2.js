import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import SmallLogo from "./SmallLogo.svg";
import BlueLogo from "../assets/BlueLogo.svg";

const Styles = styled.div`
  .navbar {
    background-color: #98b6b1;
  }
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavBar = () => {
  return (
    <Styles>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={BlueLogo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/the-situation">The Situation</Nav.Link>
            <Nav.Link href="/our-open-letter">Our Open Letter</Nav.Link>
            <Nav.Link href="/our-march">Our March</Nav.Link>
            <Nav.Link href="/our-research">Our Research</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/connect-with-us">Connect With Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
