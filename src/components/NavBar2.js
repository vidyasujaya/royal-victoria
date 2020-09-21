import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import SmallLogo from "./SmallLogo.svg";
import BlueLogo from "../assets/BlueLogo.svg";

const Styles = styled.div``;

export const NavBar = () => {
  return (
    <Styles>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <a href="/">
            <img
              alt=""
              src={BlueLogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            <NavDropdown title="Publications" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/publications/our-open-letter">
                Our Open Letter
              </NavDropdown.Item>
              <NavDropdown.Item href="/publications/briefs">
                Briefs
              </NavDropdown.Item>
              <NavDropdown.Item href="/publications/reports">
                Reports
              </NavDropdown.Item>
              <NavDropdown.Item href="/publications/guides">
                Guides
              </NavDropdown.Item>
              <NavDropdown.Item href="/publications/others">
                Others
              </NavDropdown.Item>
            </NavDropdown>
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
