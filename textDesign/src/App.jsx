import React from "react";
import MyProvider, { Context } from "./MyContext";
import { useContext } from "react";

function TextConsumer() {
  const { text, setText } = useContext(Context);

  return (
    <>
      <h1>{text}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}



function App() {
  return (
    <MyProvider>
      <TextConsumer/>
    </MyProvider>
  )
}

export default App