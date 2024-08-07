// src/components/Navigation/UserMenu.js
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo } from "../../redux/contacts/contactsSelectors";
import { Spinner } from "react-bootstrap";
import routes from "../../routes";

const UserMenu = ({ user }) => (
  <>
    {!user ? (
      <Spinner animation="border" />
    ) : (
      <div>
        <p>{user.email}</p>
        <Link to={routes.logout} className="btn btn-primary">Logout</Link>
      </div>
    )}
  </>
);

const mapStateToProps = (state) => ({
  user: getUserInfo(state),
});

export default connect(mapStateToProps)(UserMenu);
