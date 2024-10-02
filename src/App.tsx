import React from "react";
import "./App.css";
import ControlTodos from "./Components/ControlTodos";
import TodoList from "./Components/TodoListContainer";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Your own personal shoppingList!</h3>
        <Box>
          <ControlTodos />
          <TodoList />
        </Box>
      </header>
    </div>
  );
}

export default App;
