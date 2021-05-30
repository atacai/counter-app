import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value += action.payload.increaseValue;
    },
    decrease(state, action) {
      state.value -= action.payload.decreaseValue;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
