// src/pages/Contact.js

import React, { useState } from 'react';
import axios from '../api/axios'; // Use the axios instance from your axios.js file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure the API endpoint is correct
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setSuccessMessage(response.data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">Contact Us</h1>
        <p className="text-lg md:text-xl mb-6">
          We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white"
            required
          ></textarea>
          <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Send Message
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <p>123 ST:44 Bahria Town Rawalpindi</p>
          <p>Phone: 03087612061</p>
          <p>Email: contact@fitlifegym.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
