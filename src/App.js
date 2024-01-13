import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  // ToDoリストの変数を定義
  const [todos, setTodos] = useState([]);

  // ToDoリストを追加する関数
  const addToDo = text => {
    const newTodos = [...todos, { id: uuidv4(), text, isCompleted: false }];
    setTodos(newTodos);
  };

  // ToDoリストを編集する関数
  const editTodo = (id, newValue) => {
    // newValueが空文字列の場合は更新しない
    if (!newValue) {return;}  

    // 指定されたIDのToDoリストを新しい値で更新
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newValue } : todo)));
  };

  // チェックボックスをクリックしたときに、完了済みと未完了を切り替える関数
  const checkBoxComplete = id => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // ToDoリストを削除する関数
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // タスクの総数、完了済みのタスク数、未完了のタスク数を取得
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.isCompleted).length;
  const uncompletedTodos = totalTodos - completedTodos;

  return (
    <div>
      <ToDoForm addToDo={addToDo} />
      <ToDoList todos={todos} checkBoxComplete={checkBoxComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
      <div>全てのタスク: {totalTodos} 完了済み: {completedTodos} 未完了: {uncompletedTodos}</div>
    </div>
  );
}

export default App;
