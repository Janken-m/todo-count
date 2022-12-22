import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
  entities?: any;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    DecrementByAmount: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, DecrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
