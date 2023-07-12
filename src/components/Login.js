import React, { useState } from "react";

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

