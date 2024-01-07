import React from "react";
import { Badge, Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from '../resources/logo.jpg'
import {useSelector} from "react-redux";

const Header = () => {
 const {cartItems}=useSelector((state)=> state.cart)
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
                  {cartItems.length > 0 && (<Badge pill bg="warning" className="mx-2">{cartItems.reduce((a,c)=>a+c.qty,0)}</Badge>)}
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

export default Header;
