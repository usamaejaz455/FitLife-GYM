// src/pages/home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token'); // Make sure to use the same token name across the app

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center px-6 py-8"
        style={{ backgroundImage: 'url("https://example.com/your-background-image.jpg")' }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to FitLife Gym</h1>
          <p className="text-lg md:text-xl mb-6">Your journey to a healthier you starts here.</p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </header>
      <section className="flex flex-wrap justify-around p-8 bg-gray-800">
        <div className="max-w-sm text-center p-6 bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Personal Training</h2>
          <p className="text-base">Get personalized workouts and diet plans from our expert trainers.</p>
        </div>
        <div className="max-w-sm text-center p-6 bg-gray-700 rounded-lg shadow-lg mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Group Classes</h2>
          <p className="text-base">Join our group classes and stay motivated with like-minded individuals.</p>
        </div>
        <div className="max-w-sm text-center p-6 bg-gray-700 rounded-lg shadow-lg mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">State-of-the-Art Equipment</h2>
          <p className="text-base">Our gym is equipped with the latest fitness technology for all your needs.</p>
        </div>
      </section>
      <footer className="bg-gray-800 p-4 text-center">
        <button
          onClick={handleLogout}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
        >
          Logout
        </button>
      </footer>
    </div>
  );
};

export default Home;