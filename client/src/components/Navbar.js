import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/home" className="text-orange-500 hover:text-orange-400">
            FitLife Gym
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/home" className="hover:text-orange-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-400">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
