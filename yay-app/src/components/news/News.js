import React from "react";
import BrowsePages from "../BrowsePages";
import Heading from "../Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import NewsCards from "./news-cards/NewsCards"

const News = () => {
  return (
    <>
      <Container>
        <Heading content="News" />

        <BrowsePages />
        <Row>
          <Col className="card-container">
            <NewsCards/>
           
          </Col>
        </Row>

        <BrowsePages />
      </Container>
      <Footer />
    </>
  );
};

export default News;
