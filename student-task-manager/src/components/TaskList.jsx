import React from 'react';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks available</div>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <div className="task-info">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <span className={`task-title ${task.completed ? 'completed' : ''}`}>
              {task.text}
            </span>
          </div>
          <button
            className="btn-delete"
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this task?')) {
                onDeleteTask(task.id);
              }
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
