
// Step 1: Import createStore from Redux
import { createStore } from "redux";

// Initial state
const initialState = {
  counter: 0,
};

// Step 3: Create reducer and pass it as an argument to createStore
const reducer = (state = initialState, action) => {
    // Limited for reducer function  
    // function should be synchronous
    //  we should not mutate the original state
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + action.payload };
    case "DEC":
      return { ...state, counter: state.counter - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// Step 2: Create the store using the reducer
const store = createStore(reducer);

export default store;
