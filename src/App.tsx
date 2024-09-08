import React from "react";
import "./App.css";
import ControlTodos from "./Components/ControlTodos";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ControlTodos />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
