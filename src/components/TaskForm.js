import React, { useState } from "react";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignee, setAssignee] = useState("");

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAssigneeChange = (e) => {
    setAssignee(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate task creation success
    alert("Task Created Successfully!");
    setTaskName("");
    setDescription("");
    setDueDate("");
    setAssignee("");
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Task Name</label>
        <input type="text" value={taskName} onChange={handleTaskNameChange} />

        <label>Description</label>
        <textarea value={description} onChange={handleDescriptionChange} />

        <label>Due Date</label>
        <input type="date" value={dueDate} onChange={handleDueDateChange} />

        <label>Assignee</label>
        <input type="text" value={assignee} onChange={handleAssigneeChange} />

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
