import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="dashboard-container"> {/* Apply the CSS class */}
        <h2>Dashboard</h2>
        {taskList.map((task) => (
          <div className="task-card" key={task.id}> {/* Apply the CSS class */}
            <h3>{task.name}</h3>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
            {task.status !== "Completed" && (
              <div className="task-actions"> {/* Apply the CSS class */}
                <button onClick={() => markTaskComplete(task.id)}>
                  Mark Complete
                </button>
                <Link to={`/task/${task.id}`}>View Details</Link>
              </div>
            )}
          </div>
        ))}
  
        <Link to="/create-task">Create Task</Link>
      </div>
    );
  };
  
  export default Dashboard;
  