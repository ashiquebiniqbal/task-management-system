import React from "react";
import { tasks } from "../mockData";

const TaskDetail = ({ match }) => {
  const { taskId } = match.params;
  const task = tasks.find((task) => task.id === parseInt(taskId));

  const handleAddComment = () => {
    // Add comment logic here
  };

  return (
    <div>
      <h2>Task Detail</h2>
      {task ? (
        <div>
          <h3>{task.name}</h3>
          <p>Description: {task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>

          <div>
            <h4>Comments</h4>
            {task.comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.text}</p>
                <p>Commented by: {comment.user}</p>
                <p>Timestamp: {comment.timestamp}</p>
              </div>
            ))}
          </div>

          <div>
            <h4>Add Comment</h4>
            <textarea value="" onChange={handleAddComment} />
            <button>Add Comment</button>
          </div>
        </div>
      ) : (
        <p>Task not found.</p>
      )}
    </div>
  );
};

export default TaskDetail;
