import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImage1 from "../images/carousel-1.jpg";
import carouselImage2 from "../images/carousel-2.jpg";
import carouselImage3 from "../images/carousel-3.jpg";

const HeroCarousel = () => {
  return (
    <Carousel className="home-hero">
      <Carousel.Item>
        <img
          className="d-block w-100 home-hero__image "
          src={carouselImage1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home-hero__image"
          src={carouselImage2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home-hero__image"
          src={carouselImage3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
