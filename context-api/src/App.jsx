import React, { createContext, useContext, useState } from "react";

// Create context outside the component
const MyContext = createContext(0);

const MyComponent = () => {
  // Use context inside component
  const { count, setCount } = useContext(MyContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

function App() {
  // Manage state in App component
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      <div>
        <MyComponent />
      </div>
    </MyContext.Provider>
  );
}

export default App;
