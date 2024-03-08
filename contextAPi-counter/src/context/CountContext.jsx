import React, { createContext, useContext, useState } from "react";

// Create the context
const CountContext = createContext();

// Custom hook to use the count context
export const useCount = () => useContext(CountContext);

// Provider component to manage the count state
export const CountProvider = ({ children }) => {
  // Initialize count state
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => setCount((prevCount) => prevCount + 1);

  // Function to decrement count
  const decrement = () => setCount((prevCount) => prevCount - 1);

  // Function to reset count
  const reset = () => setCount(0);

  return (
    <CountContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CountContext.Provider>
  );
};
