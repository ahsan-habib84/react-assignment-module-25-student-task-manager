import React, { useState } from 'react';
import Card from './components/Card';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import TaskFilter from './components/TaskFilter';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React Components & JSX', completed: true },
    { id: 2, text: 'Understand Props and State', completed: false },
    { id: 3, text: 'Build Student Task Manager', completed: false }
  ]);
  const [filter, setFilter] = useState('All');

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="app-container">
      <h1>Student Task Manager</h1>
      <Card>
        <TaskStats
          total={totalTasks}
          completed={completedTasks}
          remaining={remainingTasks}
        />
        <TaskForm onAddTask={handleAddTask} />
        <TaskFilter currentFilter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </Card>
    </div>
  );
}

App.ErrorBoundary = class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div className="no-tasks">Something went wrong. Please refresh the page.</div>;
    }
    return this.props.children;
  }
};

export default App;
