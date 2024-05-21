import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  count: 0,
};

// Create a slice for counter
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.count += action.payload;
    },
    decrement(state, action) {
      state.count -= action.payload;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

// Extract the action creators and reducer
const { actions, reducer } = counterSlice;

// Configure the store
const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

// Export actions and store
export const { increment, decrement, reset } = actions;
export default store;

