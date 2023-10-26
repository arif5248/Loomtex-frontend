import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../images/LoomtexLogo3.PNG";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <Navbar className="navBar my-text" expand="lg">
        <Container className="container">
          <div className="navleft">
            <Navbar.Brand as={Link} to="/" className="nab-brand my-text">
              <img className="logoImage" src={Logo} alt="LoomTex" />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="navRight">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nab-item ml-auto">
                <div className="rightBoxOne">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/service">
                    Service
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products">
                    Products
                  </Nav.Link>
                </div>
                <div className="rightBoxTwo">
                  <Nav.Link href="tel:+971508810769">+971 50 881 0769</Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
