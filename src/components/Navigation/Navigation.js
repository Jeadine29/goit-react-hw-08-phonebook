// src/components/Navigation/Navigation.js
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "../../routes";
import UserMenu from "./UserMenu";
import PublicMenu from "./PublicMenu";
import { connect } from "react-redux";
import { getStatusLogOn } from "../../redux/status/statusSelectors";

const Navigation = ({ logOn }) => (
  <Nav variant="tabs" className="justify-content-end">
    <Nav.Item>
      <Link to={routes.home} className="nav-link">Home Page</Link>
    </Nav.Item>
    {logOn ? <UserMenu /> : <PublicMenu />}
  </Nav>
);

const mapStateToProps = (state) => ({
  logOn: getStatusLogOn(state),
});

export default connect(mapStateToProps)(Navigation);
