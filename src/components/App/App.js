import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from '../../redux/auth/operations';
import { selectIsLoggedIn, selectIsFetchingCurrentUser } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Contacts from '../Contacts/Contacts'; // Create a Contacts component to wrap the contact-related components
import UserMenu from '../UserMenu/UserMenu';
import './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <div className="container">
        <Navigation />
        {isFetchingCurrentUser ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/contacts" />} />
            <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/contacts" />} />
            <Route path="/contacts" element={isLoggedIn ? <Contacts /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={isLoggedIn ? "/contacts" : "/login"} />} />
          </Routes>
        )}
        {isLoggedIn && <UserMenu />}
      </div>
    </Router>
  );
};

export default App;
