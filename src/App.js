import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import TaskDetail from "./components/TaskDetail";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/task/:taskId" element={<TaskDetail />} />
        <Route path="/create-task" element={<TaskForm />} />
      </Routes>
    </Router>
  );
};

export default App;
