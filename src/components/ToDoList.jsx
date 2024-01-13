import React, { useState } from "react";

function ToDoList({ todos, checkBoxComplete, deleteTodo, editTodo }) {
  // 編集中のToDoリストを管理するためのstate
  const [edit, setEdit] = useState({ id: null, value: "" });

  // ToDoリストを表示するための関数
  const renderDefaultView = (todo) => (
    <div className="todo-content">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => checkBoxComplete(todo.id)}
      />
      {todo.text}
      <div className="todo-buttons">
        <button onClick={() => startEdit(todo)}>編集</button>
        <button onClick={() => deleteTodo(todo.id)}>削除</button>
      </div>
    </div>
  );

  // 編集の開始
  const startEdit = (todo) => {
    setEdit({ id: todo.id, value: todo.text }); // editのstateを更新
  };

  // 編集中のToDoリストを表示するための関数
  const renderEditView = () => (
    <div className="todo-content">
      <input
        type="text"
        value={edit.value}
        onChange={(e) => setEdit({ ...edit, value: e.target.value })}
      />
      <div className="todo-buttons">
        <button onClick={saveEdit}>保存</button>
      </div>
    </div>
  );

  // 編集の保存
  const saveEdit = () => {
    editTodo(edit.id, edit.value); // ToDoリストを編集する関数を呼び出す
    setEdit({ id: null, value: "" });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {/* 編集ボタンをクリックするかしないかで判定 */}
          {edit.id === todo.id ? renderEditView() : renderDefaultView(todo)}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
