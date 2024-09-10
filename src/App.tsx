import React from "react";
import "./App.css";
import ControlTodos from "./Components/ControlTodos";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your own personal Todo-list!</h1>
        <ControlTodos />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
