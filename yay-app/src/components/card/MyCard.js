import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const MyCard = (props) => {
  return (
    <Card className= {props.className} >
      <Card.Img variant="top" src={`${props.img}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button className="card__button" variant="primary">
          {props.buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
