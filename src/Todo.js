import React from "react";

// todoListという変数とdeleteTodoという関数をpropsとして受け取る
const Todo = ({ todoList, deleteTodo, finishTodo, reopenTodo, type }) => (
  <div>
    {/*受け取ったtodoListを使って表示する*/}
    {todoList.map((todo, idx) => (
      <div>
        {todo}
        <button onClick={() => deleteTodo(idx)}>削除</button>

        {type === "todo" && (
          <button onClick={() => finishTodo(idx)}>完了済みにする</button>
        )}
        {type === "done" && (
          <button onClick={() => reopenTodo(idx)}>
            やっぱり完了してません
          </button>
        )}
      </div>
    ))}
  </div>
);

export default Todo;
