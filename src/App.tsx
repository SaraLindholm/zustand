import React from "react";
import "./App.css";
import ControlTodos from "./Components/ControlTodos";
import TodoList from "./Components/TodoListContainer";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Din egna To-do lista!</h3>
        <Box>
          <ControlTodos />
          <TodoList />
        </Box>
      </header>
    </div>
  );
}

export default App;
