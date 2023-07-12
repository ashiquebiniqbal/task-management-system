import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles.css"; // Import CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send login request to the server
    // Implement your API request logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} className="input-field" />

        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} className="input-field" />

        <button type="submit" className="button">Login</button>
      </form>
      <p className="centered-text">
        Don't Have an Account? <Link to="/register">Register Now</Link>
      </p>
    </div>
  );
};

export default Login;
