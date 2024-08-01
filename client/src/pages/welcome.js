// src/pages/Welcome.js

import React from 'react';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">Welcome to Your Fitness Journey!</h1>
        <p className="text-lg md:text-xl mb-6">
          We're excited to have you on board. Start exploring our programs and make the most of your gym membership!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Workout Plans</h2>
            <p className="text-base">
              Discover personalized workout plans that fit your goals and schedule.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Nutrition Guides</h2>
            <p className="text-base">
              Get expert advice on nutrition and healthy eating habits to fuel your body.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Community Support</h2>
            <p className="text-base">
              Connect with fellow fitness enthusiasts and stay motivated together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
