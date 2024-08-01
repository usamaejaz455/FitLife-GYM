import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">About Us</h1>
        <p className="text-lg md:text-xl mb-6">
          Welcome to FitLife Gym, where your fitness journey begins! We are dedicated to providing top-notch facilities and services to help you achieve your fitness goals. Our team of expert trainers and nutritionists are here to guide you every step of the way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-base">
              To empower individuals to lead healthier lives by offering comprehensive fitness programs and state-of-the-art facilities.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-base">
              To be the leading fitness center in the community, recognized for our commitment to excellence and innovation in the fitness industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
