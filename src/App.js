import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  // 第１3333333変数がstate, 第２変数がstateを変化させる関数
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);

  const addTodo = () => {
    // 意味ない。二重否定で　結局 if(input)と同じ。古い環境では、undefined（未定義）というキーワードが存在せず、
    //　未定義の変数がifの条件式の中でboolean型に変換されないため、if文がエラーになってしまう可能性がある。
    if (!!input) {
      setTodoList([...todoList, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    // 第一引数の　_ にはtodoList要素が入っている。使わないが省略できないので _ で表している
    setTodoList(todoList.filter((_, idx) => idx !== index));
  };

  const deleteFinishTodo = (index) => {
    setFinishedList(finishedList.filter((_, idx) => idx !== index));
  };

  const finishTodo = (index) => {
    // 2つの関数が同時に実行されている
    deleteTodo(index);
    setFinishedList([
      ...finishedList,
      todoList.find((_, idx) => idx === index),
    ]);
    console.log(todoList);
  };

  const reopenTodo = (index) => {
    deleteFinishTodo(index);
    setTodoList([...todoList, finishedList.find((_, idx) => idx === index)]);
  };

  return (
    <div className="App">
      <p>{todoList}</p>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Add new todo"
      />
      <button onClick={() => addTodo()}>追加</button>
      {/* todoListという変数とdeleteTodoという関数をpropsとしてTodoコンポーネントに渡している*/}
      <div>
        <h2>未完了</h2>
        <Todo
          todoList={todoList}
          deleteTodo={deleteTodo}
          finishTodo={finishTodo}
          type="todo"
        />
      </div>
      <div>
        <h2>完了済み</h2>
        <Todo
          todoList={finishedList}
          deleteTodo={deleteFinishTodo}
          reopenTodo={reopenTodo}
          type="done"
        />
      </div>
    </div>
  );
}

export default App;
