import React, { useState } from "react";
import { tasks } from "../mockData";

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
    <div>
      <h2>Dashboard</h2>
      {taskList.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          {task.status !== "Completed" && (
            <button onClick={() => markTaskComplete(task.id)}>
              Mark Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
