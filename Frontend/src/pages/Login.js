import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory hook for redirection
import './Login.css'; // Import custom CSS for styling

const Login = () => {
  const history = useHistory(); // Initialize useHistory hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate login request
      // You can replace this with actual login logic using axios
      // For now, just redirect to success page
      history.push('/login-success');
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error, e.g., show error message
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login-input"
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
