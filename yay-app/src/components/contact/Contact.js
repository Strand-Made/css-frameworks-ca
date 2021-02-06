import React from "react";
import Heading from "../Heading";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../form/ContactForm"
import ContactInfo from "./contact-info/ContactInfo"

const Contact = () => {
  return (
    <>
      <Container fluid>
        <Col className="col-7 contact-info">
        <ContactInfo/>

        </Col>

        <Col className="welcome mt-5">
          <Heading content="Submit your details" />
          <ContactForm/>
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
