import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tabImage1 from "../images/tab-1.jpg";
import tabImage2 from "../images/tab-2.jpg";
import tabImage3 from "../images/tab-3.jpg";
import  SocialLinks from "./SocialLinks";

const TabComponent = () => {
  return (
    <Tabs
      className="tab-component mt-5"
      defaultActiveKey="first"
      id="uncontrolled-tab-example"
    >
      <Tab eventKey="first" title="First" className="mx-3">
        <Row>
          <Col className=" col-4 image-container">
            <img
              className="image-container__image"
              src={tabImage1}
              alt="tab 1"
            ></img>
          </Col>
          <Col className="tab-text-container">
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            < SocialLinks className="card-link"/>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="second" title="Second" className="mx-3">
        <Row>
          <Col className=" col-4 image-container">
            <img
              className="image-container__image"
              src={tabImage2}
              alt="tab 2"
            ></img>
          </Col>
          <Col className=" tab-text-container">
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            < SocialLinks className="card-link"/>

          </Col>
        </Row>
      </Tab>
      <Tab eventKey="third" title="Third" className="mx-3">
        <Row>
          <Col className=" col-4 image-container">
            <img
              className="image-container__image"
              src={tabImage3}
              alt="tab 3"
            ></img>
          </Col>
          <Col className=" tab-text-container">
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            < SocialLinks className="card-link"/>
          </Col>
        </Row>
      </Tab>
    </Tabs>
  );
};

export default TabComponent;
