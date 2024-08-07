// src/components/Navigation/PublicMenu.js
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "../../routes";

const PublicMenu = () => (
  <Nav variant="tabs" className="justify-content-end">
    <Nav.Item>
      <Link to={routes.login} className="nav-link">Login</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to={routes.register} className="nav-link">Register</Link>
    </Nav.Item>
  </Nav>
);

export default PublicMenu;
