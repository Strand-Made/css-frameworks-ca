import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
const MainNav = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className="navbar__logo" href="#home">
          The YAY Company
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navbar-nav">
            <Nav.Link className="navbar-nav__link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navbar-nav__link" href="#link">
              News
            </Nav.Link>
            <Nav.Link className="navbar-nav__link" href="#link">
              Contact
            </Nav.Link>
          </Nav>
          <Form inline className="navbar-form">
            <Col className="navbar-form-container d-flex justify-content-center">
              <FormControl
                type="text"
                placeholder="Search"
                className="navbar-form__input--search w-100 mr-sm-2"
              />
              <Button variant="primary">Go</Button>
            </Col>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
