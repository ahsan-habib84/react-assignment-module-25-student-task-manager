import React from 'react';

function TaskFilter({ currentFilter, setFilter }) {
  return (
    <div className="filter-buttons">
      <button
        className={`btn-filter ${currentFilter === 'All' ? 'active' : ''}`}
        onClick={() => setFilter('All')}
      >
        All
      </button>
      <button
        className={`btn-filter ${currentFilter === 'Completed' ? 'active' : ''}`}
        onClick={() => setFilter('Completed')}
      >
        Completed
      </button>
      <button
        className={`btn-filter ${currentFilter === 'Pending' ? 'active' : ''}`}
        onClick={() => setFilter('Pending')}
      >
        Pending
      </button>
    </div>
  );
}

export default TaskFilter;
