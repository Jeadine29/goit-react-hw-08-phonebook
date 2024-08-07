// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Contacts from './pages/Contacts/Contacts';
import Navigation from './components/Navigation';
import UserMenu from './components/UserMenu';
import PrivateRoute from './components/PrivateRoute';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Box>
      <Navigation />
      {isAuthenticated && <UserMenu />}
      <Box p="4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Use PrivateRoute for Contacts */}
          <Route path="/contacts" element={<PrivateRoute element={<Contacts />} />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
