import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles.css"; // Import CSS file

const Register = () => {
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
    // Simulate registration success
    alert("Registration Successful!");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} className="input-field" />

        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} className="input-field" />

        <button type="submit" className="button">Register</button>
      </form>
      <p className="centered-text">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Register;
