import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import SmallLogo from "../assets/SmallLogo.svg";
import styled from "styled-components";

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
      <Navbar expand="md lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/the-situation">The Situation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/our-open-letter">The Open Letter</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/our-march">Our March</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/our-research">Our Research</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/resources">Resources</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/connect-with-us">Connect With Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
