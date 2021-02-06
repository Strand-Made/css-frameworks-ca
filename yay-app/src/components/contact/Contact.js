import React from "react";
import Heading from "../Heading";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <Container fluid>
        <Col className="welcome mt-5">
          <Heading content="Submit your details" />

          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
