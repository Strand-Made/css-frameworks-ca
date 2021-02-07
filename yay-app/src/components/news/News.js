import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BrowsePages from "../navigation/BrowsePages";
import Footer from "../navigation/Footer";
import Heading from "../typography/Heading";
import NewsCards from "./news-cards/NewsCards";


const News = () => {
  return (
    <>
      <Container>
        <Heading content="News" />

        <BrowsePages />
        <Row>
          <Col className="card-container d-flex flex-wrap">
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
