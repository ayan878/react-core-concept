import React from "react";
import "./App.css";

import { Counter } from "./Counter";
import { CounterProvider } from "./MyContext";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
