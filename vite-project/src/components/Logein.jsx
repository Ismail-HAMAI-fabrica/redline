import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
      if (response && response.data) {
        const { username, token, role } = response.data;

        // Save the token to local storage for persistent authentication
        localStorage.setItem('token', token);

        // Redirect the user based on their role
        if (role === 'admin') {
          navigate('/dashboard');
        } else if (role === 'customer') {
          navigate('/');
        } else {
          console.error('Invalid role:', role);
        }
      } else {
        console.error('Login error: Invalid response format');
      }
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input type="text" value={username} autoCapitalize='null' onChange={(e) => setUsername(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
