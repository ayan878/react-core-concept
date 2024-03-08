import React from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCount } from './context/CountContext';
function Counter() {
  // Extract count state and functions from useCount hook
  const { count, increment, decrement, reset } = useCount();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Context-Counter</h1>
      <div className="card">
        <button onClick={decrement}>-</button>
        <h2 onClick={reset}>{count}</h2>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default Counter