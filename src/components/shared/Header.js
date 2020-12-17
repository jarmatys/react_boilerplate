import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">React-Bootstrap</Navbar.Brand>
      <Nav className="ml-auto">
        <Button as={NavLink} to="first" variant="success" className="mr-3">Ekran 1</Button>
        <Button as={NavLink} to="second" variant="warning">Ekran 2</Button>
      </Nav>
      
    </Navbar>
  );
};

export default Header;
