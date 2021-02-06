import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

const Footer = () => {
  return (
    <footer className="main-footer mt-5">
      <Container className="main-footer-container md-flex md-flex-row justify-content-md-between">
        <Row className="justify-content-center d-flex align-items-md-end">
          <ul className="footer-nav d-flex align-items-center flex-md-row-reverse  main-footer-list">
            <li>
              <a
                className="main-footer-list__link"
                href="https://www.youtube.com"
              >
                <FontAwesomeIcon size="2x" icon={["fab", "youtube"]} />
              </a>
            </li>
            <li>
              <a
                className="main-footer-list__link"
                href="https://www.vimeo.com"
              >
                <FontAwesomeIcon size="2x" icon={["fab", "vimeo"]} />
              </a>
            </li>
          </ul>
        </Row>

        <Row className="main-footer-extra">
          <Col className="d-flex justify-content-between">
            <div className="main-footer-email">
              <a
                className="main-footer-email__link"
                href="mailto:someone@link.no"
              >
                hello@yay.com
              </a>
            </div>
            <div className="main-footer-copyright">
              <p>Copyright 2020</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
