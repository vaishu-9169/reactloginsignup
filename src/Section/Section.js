import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Section.css";
export default function Section(props) {
  return (
<div className="container-row">
    <Card style={{ width: '25rem' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      {props.text}
      </Card.Text>
      <Button variant="primary">  {props.link}</Button>
    </Card.Body>
  </Card >
    </div>
  );
}
