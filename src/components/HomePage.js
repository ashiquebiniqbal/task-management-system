import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Task Management App pwered by  Meghna Cloud</h1>
      <p>
        This app helps you manage your tasks efficiently and stay organized.
      </p>
      <p>
        Login or register to create tasks, track their progress, and collaborate
        with your team.
      </p>
      <div className="button-container">
        <Link to="/login" className="button">
          Login
        </Link>
        <Link to="/register" className="button">
          Register
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
