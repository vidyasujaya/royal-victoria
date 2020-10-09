import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import TextLogo from "../assets/TextLogo.svg";

const Styles = styled.div``;

export const NavBarFR = () => {
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
            <Nav.Link href="/">Page d'accueil</Nav.Link>
            <Nav.Link href="/fr/coalition">Notre Coalition</Nav.Link>
            <Nav.Link href="/fr/background">Historique</Nav.Link>
            <Nav.Link href="/fr/initiatives">Nos initiatives</Nav.Link>
            <Nav.Link href="/fr/resources">
              Ressources et renseignements additionnels
            </Nav.Link>
            <Nav.Link href="/fr/media">Médias</Nav.Link>
            <Nav.Link href="/fr/connect-with-us">Nous joindre</Nav.Link>
            <NavDropdown title="Languages" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Anglais</NavDropdown.Item>
              <NavDropdown.Item href="/fr/">Française</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
