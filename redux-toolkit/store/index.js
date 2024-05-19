import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

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
      state.counter = initialState.counter;
    },
  },
});

// Extract action creators from the slice
export const { increment, decrement, reset } = counterSlice.actions;

// Create the Redux store with the slice reducer
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
