import React from 'react';
import { Header } from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards.jsx";
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  );
}
export default App;
