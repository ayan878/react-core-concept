import React, {  useState } from 'react'
import { createContext } from 'react';


export const Context=createContext();
function MyProvider({children}) {
    const [text,setText]=useState("Hi! I'm React")
  return (
    <Context.Provider value={{text,setText}}>
        {children}
    </Context.Provider>
  )
}

export default MyProvider;