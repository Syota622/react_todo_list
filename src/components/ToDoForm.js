import React, { useState } from 'react';

//　{ addToDo } はコンポーネントに渡されるpropsで、新しいToDo項目を追加する関数
function ToDoForm({ addToDo }) {
  const [value, setValue] = useState('');

  // フォームが送信されたときの動作を定義する handleSubmit 関数
  const handleSubmit = (event) => {
    event.preventDefault(); // フォーム送信のデフォルトの動作（ページ再読み込みなど）を防止
    if (!value) return; // 入力値が空の場合は何もしない
    addToDo(value);     // addToDo 関数を呼び出して、現在の入力値 value をToDoリストに追加
    setValue('');       // 入力値をリセット
  };

  return (
    <form onSubmit={handleSubmit}> {/* フォームが送信されたときに handleSubmit 関数を呼び出す */}
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)}
        }
        placeholder="新しいToDoを入力"
      />
      <button type="submit">保存</button>
    </form>
  );
}

export default ToDoForm;
