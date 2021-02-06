import React from "react";
import Container from "react-bootstrap/Container";
import HeroCarousel from "../HeroCarousel";
import MobileAccordion from "../MobileAccordion";
import TabComponent from "../TabComponent";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Container>
        <div className="welcome mt-5">
          <Heading content="We do YAY things"></Heading>
          <Paragraph
            content="Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi,
            a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam me
            tus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, 
            pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa."
          ></Paragraph>
        </div>

        <MobileAccordion />
        <TabComponent />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
