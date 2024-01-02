import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = todo => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      {/* addToDo関数をToDoFormコンポーネントに渡す */}
      <ToDoForm addToDo={addToDo} />
      {/* todos配列をToDoListコンポーネントに渡す */}
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
