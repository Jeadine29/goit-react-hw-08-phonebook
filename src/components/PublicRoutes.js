import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getStatusLogOn } from "../redux/status/statusSelectors";

const PublicRoute = ({ element: Component, logOn, restricted, redirectTo, ...routeProps }) => (
  <Route
    {...routeProps}
    element={logOn && restricted ? <Navigate to={redirectTo} /> : <Component />}
  />
);

const mapStateToProps = (state) => ({
  logOn: getStatusLogOn(state),
});

export default connect(mapStateToProps)(PublicRoute);
