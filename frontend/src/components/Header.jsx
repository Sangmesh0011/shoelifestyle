import React from "react";
import { Navbar, Nav, Container, TabContainer } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Shoe Lifestyle</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="./cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="./login">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default header;
