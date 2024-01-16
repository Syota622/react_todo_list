import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';
import useTodoList from './hooks/useTodoList'; // カスタムフックをインポート

function App() {
  const { todos, addToDo, editTodo, checkBoxComplete, deleteTodo } = useTodoList();

  // タスクの総数、完了済みのタスク数、未完了のタスク数を取得
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.isCompleted).length;
  const uncompletedTodos = totalTodos - completedTodos;

  return (
    <div>
      <ToDoForm addToDo={addToDo} />
      <ToDoList
        todos={todos}
        editTodo={editTodo}
        checkBoxComplete={checkBoxComplete}
        deleteTodo={deleteTodo}
      />
      <div>全てのタスク: {totalTodos} 完了済み: {completedTodos} 未完了: {uncompletedTodos}</div>
    </div>
  );
}

export default App;
