import React from 'react';
import './App.css';
import ControlTodos from './Components/ControlTodos';
import DisplayTodos from './Components/DisplayTodos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ControlTodos />
       <DisplayTodos />
      </header>
    </div>
  );
}

export default App;
