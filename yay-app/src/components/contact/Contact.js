import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Footer from "../navigation/Footer";
import ContactForm from "../form/ContactForm";
import Heading from "../typography/Heading";
import ContactInfo from "./contact-info/ContactInfo";

const Contact = () => {
  return (
    <>
      <Container fluid>
        <div className=" d-md-flex flex-row mt-3">
        <Col className="col order-2 mt-md-5 contact-info-container">
        <ContactInfo/>

        </Col>

        <Col className="welcome order-1">
          <Heading content="Submit your details" />
          <ContactForm/>
        </Col>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
