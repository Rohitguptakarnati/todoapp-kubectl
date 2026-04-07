import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  
  // Use VITE_API_URL if it exists (e.g. for production or when dockerized), 
  // otherwise fallback to localhost:5000 API server.
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/todos';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Error fetching todos:", err));
  }, [apiUrl])

  const addTodo = async (e) => {
    e.preventDefault();
    if (!title) return;
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      });
      const newTodo = await res.json();
      setTodos([...todos, newTodo]);
      setTitle('');
    } catch (err) {
      console.error(err);
    }
  }

  const toggleComplete = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT'
      });
      const updatedTodo = await res.json();
      setTodos(todos.map(t => t._id === id ? updatedTodo : t));
    } catch (err) {
      console.error(err);
    }
  }

  const deleteTodo = async (id) => {
    try {
      await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
      });
      setTodos(todos.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={addTodo} className="add-todo-form">
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="What needs to be done?" 
        />
        <button type="submit">Add Task</button>
      </form>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo._id} className={todo.completed ? 'completed' : ''}>
            <span className="todo-title" onClick={() => toggleComplete(todo._id)}>
              {todo.title}
            </span>
            <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p className="empty-state">No tasks yet. Add one above!</p>}
    </div>
  )
}

export default App
