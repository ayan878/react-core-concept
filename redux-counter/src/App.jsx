import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  
  //! It allows functional components to extract and access data from the Redux store's state.
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // actions creators
  const increment = () => {
    //! dispatch is use for send action
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };
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
        <h2 onClick={reset}>{counter}</h2>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}

export default App;
