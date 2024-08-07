import React, { Suspense, lazy, Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import {
  getUserToken,
  getErrorMessage,
} from "./redux/contacts/contactsSelectors";
import { getUser } from "./redux/contacts/contactsOperations";
import { registrationError } from "./redux/contacts/contactsActions";
import { getStatusLogOn } from "./redux/status/statusSelectors";
import ErrorMessage from "./components/AlertPage/ErrorMessage";
import Navigation from "./components/Navigation/Navigation";

const StartPage = lazy(() => import("./components/HomePage/StartPage"));
const UserPage = lazy(() => import("./components/HomePage/UserPage"));
const LoginPage = lazy(() => import("./components/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("./components/RegistrationPage/RegistrationPage")
);
const ContactList = lazy(() => import("./components/Contacts/ContactList"));
const LogOut = lazy(() => import("./components/AlertPage/LogOut"));

class App extends Component {
  componentDidMount() {
    this.props.getUser(this.props.token);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.message !== this.props.message && this.props.message) {
      setTimeout(() => {
        this.props.registrationError(null);
      }, 3000);
    }
  }

  render() {
    const { logOn, message } = this.props;

    return (
      <>
        <Layout>
          <Navigation />
          <Suspense
            fallback={
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            }
          >
            <Routes>
              <Route
                path={routes.home}
                element={logOn ? <UserPage /> : <StartPage />}
              />
              <Route
                path={routes.login}
                element={logOn ? <Navigate to={routes.home} /> : <LoginPage />}
              />
              <Route
                path={routes.register}
                element={logOn ? <Navigate to={routes.home} /> : <RegistrationPage />}
              />
              <Route
                path={routes.contacts}
                element={logOn ? <ContactList /> : <Navigate to={routes.login} />}
              />
              <Route
                path={routes.logout}
                element={logOn ? <LogOut /> : <Navigate to={routes.login} />}
              />
              <Route path="*" element={<Navigate to={routes.home} />} />
            </Routes>
          </Suspense>
        </Layout>
        {message && <ErrorMessage error={message} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: getUserToken(state),
  logOn: getStatusLogOn(state),
  message: getErrorMessage(state),
});

const mapDispatchToProps = {
  getUser,
  registrationError,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
