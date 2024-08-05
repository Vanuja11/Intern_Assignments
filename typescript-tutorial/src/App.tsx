import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    //  prevents refreshing the page when the button is clicked
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputFeild>
      <TodoList todos={todos} setTodos={setTodos} ></TodoList>

      {/* {todos.map((t) => (
        <li>{t.todo}</li>
      ))} */}
    </div>
  );
};

export default App;
