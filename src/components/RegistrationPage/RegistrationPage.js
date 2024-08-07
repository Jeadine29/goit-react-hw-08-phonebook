// src/components/RegistrationPage/RegistrationPage.js
import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { registrationUser } from "../../redux/contacts/contactsOperations";
import { registrationError } from "../../redux/contacts/contactsActions";

const initialState = {
  firstName: "",
  secondName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

class RegistrationPage extends Component {
  state = { ...initialState };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { firstName, secondName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.props.registrationError("Passwords do not match");
      return;
    }
    this.props.registrationUser({ name: `${firstName} ${secondName}`, email, password });
    this.setState({ ...initialState });
  };

  render() {
    const { firstName, secondName, email, password, confirmPassword } = this.state;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Registration</h2>
            <Form>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={firstName}
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="secondName">
                <Form.Label>Second Name</Form.Label>
                <Form.Control
                  type="text"
                  name="secondName"
                  value={secondName}
                  placeholder="Second Name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  registrationUser,
  registrationError,
};

export default connect(null, mapDispatchToProps)(RegistrationPage);
