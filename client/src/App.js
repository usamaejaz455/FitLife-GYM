// src/App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import AuthRoute from './components/AuthRoute'; // Use ProtectedRoute instead of AuthRoute

const App = () => {
  return (
    <div className='App'>
      <Routes>
        {/* Redirect root path to /login */}
        <Route path='/' element={<Navigate to='/login' />} />
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
      </Routes>
    </div>
  );
};

export default App;
