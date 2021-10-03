import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";

const News = (props) => {
  const { description, title, urlToImage } = props.news;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="btn btn-primary">Click Me</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default News;
