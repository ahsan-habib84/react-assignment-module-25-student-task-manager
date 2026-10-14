import React from 'react';

function TaskStats({ total, completed, remaining }) {
  return (
    <div className="stats-container">
      <div>Total Tasks: {total}</div>
      <div>Completed: {completed}</div>
      <div>Remaining: {remaining}</div>
    </div>
  );
}

export default TaskStats;
