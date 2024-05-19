
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

const { increment, decrement, reset } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export { increment, decrement, reset };
export default store;
