import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const baseURL = "/api/employees";

  const [todos, setTodos] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      // fetch(baseURL)
      .then((response) => response.json())
      .then((res) => setTodos(res.slice(0, 10)))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <div className="App">HELLOING!</div>
      <div>
        <h1>Employees</h1>
        {todos.map((todo: any) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
