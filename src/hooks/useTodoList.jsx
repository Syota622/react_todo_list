// src/useTodoList.js
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useTodoList = () => {
  // ToDoリストを管理するためのstate
  const [todos, setTodos] = useState([]);

  // 新しいToDoリストを追加する関数
  const addToDo = (text) => {
    const newTodo = { id: uuidv4(), text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  // ToDoリストを編集する関数
  const editTodo = (id, newValue) => {
    if (!newValue) return;
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newValue } : todo))
    );
  };

  // チェックボックスの状態を変更する関数
  const checkBoxComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // ToDoリストを削除する関数
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, addToDo, editTodo, checkBoxComplete, deleteTodo };
};

export default useTodoList;
