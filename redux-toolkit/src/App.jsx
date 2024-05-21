import React from "react";
import "./App.css";
// import { decrement, increment, reset } from "../store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch({type:"increment"})}>+</button>
      <button onClick={() => dispatch(({type:"reset"}))}>Reset</button>
      <button onClick={() => dispatch({type:"decrement"})}>-</button>
    </div>
  );
}

export default App;
