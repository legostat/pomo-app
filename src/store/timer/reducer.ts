import { createSlice } from "@reduxjs/toolkit";

export type TimerState = "focus" | "short" | "long";

interface Timer {
  currentState: number;
}

export const StatesQueue: Array<TimerState> = [
  "focus",
  "short",
  "focus",
  "long",
];

const initialState: Timer = {
  currentState: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setNextState: (state) => {
      if (state.currentState === StatesQueue.length - 1) {
        state.currentState = 0;
      } else {
        state.currentState += 1;
      }
    },
  },
});

export const { setNextState } = timerSlice.actions;

export default timerSlice.reducer;
