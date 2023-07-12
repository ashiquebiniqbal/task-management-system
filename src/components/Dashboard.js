import React, { useState } from "react";
import { tasks } from "../mockData";
import "../styles.css"; // Import CSS file

const Dashboard = () => {
  const [taskList, setTaskList] = useState(tasks);

  const markTaskComplete = (taskId) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: "Completed" } : task
      )
    );
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {taskList.map((task) => (
        <div className="task" key={task.id}>
          <h3>{task.name}</h3>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          {task.status !== "Completed" && (
            <button className="button" onClick={() => markTaskComplete(task.id)}>
              Mark Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
