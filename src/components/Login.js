import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css"; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simulate login success
    if (email === "mock@example.com" && password === "password") {
      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      // Simulate login failure
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} />

        <button type="submit">Login</button>
      </form>
      <p className="centered-text">
        Don't Have an Account? <Link to="/register">Register Now</Link>
      </p>
    </div>
  );
};

export default Login;
