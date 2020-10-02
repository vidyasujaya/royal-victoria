import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import TextLogo from "../assets/TextLogo.svg";

const Styles = styled.div``;

export const NavBar = () => {
  return (
    <Styles>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <a href="/">
            <img
              alt=""
              src={TextLogo}
              height="40"
              className="d-inline-block align-top"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/coalition">Our Coalition</Nav.Link>
            <Nav.Link href="/background">Background</Nav.Link>
            <Nav.Link href="/initiatives">Our Initiatives</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/media">Media</Nav.Link>
            <Nav.Link href="/connect-with-us">Connect With Us</Nav.Link>
            {/*IN CASE OF FUTURE NEED FOR DROPDOWN NAV COMPONENT
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
  </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
