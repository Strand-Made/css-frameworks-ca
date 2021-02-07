import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import tabImage1 from "../images/tab-1.jpg";
import tabImage2 from "../images/tab-2.jpg";
import tabImage3 from "../images/tab-3.jpg";
import SocialLinks from "./SocialLinks"

const MobileAccordion = () => {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none mt-5">
      <Card className="accordion-card">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            First
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Card.Text>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Card.Text>
            <Card.Img className="accordion-card__img" src={tabImage1} />
            <div className="mt-5 accordion-card-links">
              <SocialLinks className="card-link" />
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="accordion-card">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Second
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Card.Text>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Card.Text>
            <Card.Img className="accordion-card__img" src={tabImage2} />
            <div className="accordion-card-links">
              <SocialLinks className="card-link"/>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="accordion-card">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Third
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Card.Text>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Card.Text>
            <Card.Img className="accordion-card__img" src={tabImage3} />
            <div className="accordion-card-links">
             <SocialLinks  className="card-link"/>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default MobileAccordion;
