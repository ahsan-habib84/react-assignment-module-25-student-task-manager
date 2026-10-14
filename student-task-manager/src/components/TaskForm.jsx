import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') {
      setError('Task cannot be empty!');
      return;
    }
    setError('');
    onAddTask(taskText.trim());
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
            if (error) setError('');
          }}
        />
        <button type="submit" className="btn-primary">Add Task</button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
}

export default TaskForm;
