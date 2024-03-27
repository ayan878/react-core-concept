import { createContext, useState } from "react";
import MyComponent from "./MyComponent";
import { myContext } from "./MyContext";

function App() {
 
  const [count, setCount] = useState(0);
  return (
    <myContext.Provider value={{count, setCount}}>
      <MyComponent />
    </myContext.Provider>
  );
}

export default App;
