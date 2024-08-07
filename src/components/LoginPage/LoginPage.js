// src/components/LoginPage/LoginPage.js
import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { loginUser } from "../../redux/contacts/contactsOperations";
import { statusRemember } from "../../redux/status/statusActions";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.loginUser(this.state);
    this.setState({ email: "", password: "" });
  };

  handleChecked = (e) => {
    this.props.statusRemember(e.target.checked);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  onChange={this.handleChecked}
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
  loginUser,
  statusRemember,
};

export default connect(null, mapDispatchToProps)(LoginPage);
