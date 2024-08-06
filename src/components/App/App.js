import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'; // Adjusted path
import Home from 'pages/Home/Home'; // Adjusted path
import Login from '../pages/Login/Login';
import Register from 'pages/Register/Register'; // Adjusted path
import Phonebook from '../pages/Phonebook/Phonebook';
import NotFound from '../pages/NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute'; // Adjusted path
import PublicRoute from '../PublicRoute/PublicRoute'; // Adjusted path

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PublicRoute restricted><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute restricted><Register /></PublicRoute>} />
          <Route path="/phonebook" element={<PrivateRoute><Phonebook /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
