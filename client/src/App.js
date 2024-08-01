// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import Welcome from './pages/welcome';
import About from './pages/About'; // Import About page
import Contact from './pages/Contact'; // Import Contact page
import AuthRoute from './components/AuthRoute'; // Import AuthRoute
import Navbar from './components/Navbar'; // Import Navbar
import { useAuth } from './context/AuthContext';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className='App'>
      {isAuthenticated && <Navbar />} {/* Render Navbar only if authenticated */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/home'
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route
          path='/welcome'
          element={
            <AuthRoute>
              <Welcome />
            </AuthRoute>
          }
        />
        <Route
          path='/about'
          element={
            <AuthRoute>
              <About />
            </AuthRoute>
          }
        />
        <Route
          path='/contact'
          element={
            <AuthRoute>
              <Contact />
            </AuthRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
