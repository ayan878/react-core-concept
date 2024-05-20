import { createStore } from "react-redux";

const initalState = {
  counter: 0,
};
const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + action.payload };
    case "DEC":
      return { ...state, counter: state.counter - action.payload };
    case "RESET":
      return initalState;
  }
};
const store = createStore(counterReducer);
export default store;
