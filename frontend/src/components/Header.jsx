import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from '../resources/logo.jpg'

const header = () => {
  return (
    <header>
      <Navbar bg="opacity-0" variant="light" expand="lg" className="mx-0 my-0 border-bottom shadow-sm">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand><img src={logo} alt="Shoe Lifestyle" className='py-1 px-0 py-0' style={{ width: '220px', height: '40px' }}/></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default header;
