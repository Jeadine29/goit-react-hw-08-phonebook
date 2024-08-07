import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function StartPage() {
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Hello on your Phonebook</h1>
          <p>Welcome to the application for storing personal contacts.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default StartPage;
