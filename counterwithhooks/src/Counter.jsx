import { useContext } from "react";
import { CounterContext } from "./MyContext";

export function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}
