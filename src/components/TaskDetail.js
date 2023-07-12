import React from "react";
import { useParams } from "react-router-dom";
import { tasks } from "../mockData";
import "../styles.css";

const TaskDetail = () => {
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id === parseInt(taskId));

  const handleAddComment = () => {
    // Add comment logic here
  };

  if (!task) {
    return <p>Task not found.</p>;
  }

  return (
    <div className="task-detail">
      <h2>Task Detail</h2>
      <div className="task-detail-info">
        <h3>{task.name}</h3>
        <p>Description: {task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Status: {task.status}</p>

        <div className="task-comments">
          <h4>Comments</h4>
          {task.comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <p>{comment.text}</p>
              <p>Commented by: {comment.user}</p>
              <p>Timestamp: {comment.timestamp}</p>
            </div>
          ))}
        </div>

        <div className="add-comment">
          <h4>Add Comment</h4>
          <textarea value="" onChange={handleAddComment} />
          <button>Add Comment</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
