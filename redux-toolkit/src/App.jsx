import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
    </div>
  );
}

export default App;
