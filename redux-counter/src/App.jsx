import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {setCount(count=>count-1)};
  const reset = () => {};
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
      <h1>Redux-Counter</h1>
      <div className="card">
        <button onClick={increment}>+</button>
        <h2>{count}</h2>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}

export default App;
