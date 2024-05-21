import React, { useContext } from "react";
import "./App.css";
import ContextProvider, { CountContext } from "./ContextProvider";

function App() {
  return (
    <main>
      <ContextProvider>
        <Component1 />
        <Component2 />
      </ContextProvider>
    </main>
  );
}

function Component1() {
  const { count, setCount } = useContext(CountContext);
  console.log("Component1 rendering...");
  return (
    <div>
      <p>Component1</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Component2() {
  console.log("Component2 rendering...");
  return <div>Component2</div>;
}

export default App;
