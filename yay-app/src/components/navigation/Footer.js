import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

const Footer = () => {
  return (
    <footer className="main-footer mt-5">
      <div className="d-flex p-3  main-footer-container">
        <Row className="mx-2 w-100">
          <Col className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start align-content-lg-end" >
          <ul className="footer-nav d-flex align-items-center  main-footer-list mb-lg-0">
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
          </Col>
          <Col className="d-flex align-self-end align-self-lg-center">
            <div className="main-footer-email">
              <a
                className="main-footer-email__link"
                href="mailto:someone@link.no"
              >
                hello@yay.com
              </a>
            </div>
            </Col>

            <Col className="d-flex justify-content-end align-self-end align-self-lg-center">
            <div className="main-footer-copyright">
              Copyright 2020
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
