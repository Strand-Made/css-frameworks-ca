import React from "react";
import BrowsePages from "../BrowsePages";
import Heading from "../Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import MyCard from "./card/MyCard";

const News = () => {
  return (
    <>
      <Container>
        <Heading content="News" />

        <BrowsePages />
        <Row>
          <Col className="card-container">
            <MyCard
              title="Card Heading"
              text="Some real creative text for a nice card"
              buttonText="More"
            ></MyCard>
          </Col>
        </Row>

        <BrowsePages />
      </Container>
      <Footer />
    </>
  );
};

export default News;
