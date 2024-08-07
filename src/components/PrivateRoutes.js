import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getStatusLogOn } from "../redux/status/statusSelectors";

const PrivateRoute = ({ element: Component, logOn, redirectTo, ...routeProps }) => (
  <Route
    {...routeProps}
    element={logOn ? <Component /> : <Navigate to={redirectTo} />}
  />
);

const mapStateToProps = (state) => ({
  logOn: getStatusLogOn(state),
});

export default connect(mapStateToProps)(PrivateRoute);
