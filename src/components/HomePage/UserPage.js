import React from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../redux/contacts/contactsSelectors";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function UserPage({ user }) {
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          {user ? (
            <h1>Hello {user.name} on your Phonebook</h1>
          ) : (
            <Spinner animation="border" />
          )}
          <p>
            Welcome to the application for storing personal contacts. Go to the
            contacts tab to work with your phone book.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  user: getUserInfo(state),
});

export default connect(mapStateToProps, null)(UserPage);
