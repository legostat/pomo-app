import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Settings {
  focusLength: number;
  shortBreakLength: number;
  longBreakLength: number;
  notifications: boolean;
}

const initialState: Settings = {
  focusLength: 25,
  shortBreakLength: 25,
  longBreakLength: 25,
  notifications: true,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setFocusLength: (state, action: PayloadAction<number>) => {
      state.focusLength = action.payload;
    },
    setShortBreakLength: (state, action: PayloadAction<number>) => {
      state.shortBreakLength = action.payload;
    },
    setLongBreakLength: (state, action: PayloadAction<number>) => {
      state.longBreakLength = action.payload;
    },
    toggleNotifications: (state) => {
      state.notifications = !state.notifications;
    },
  },
});

export const {
  setFocusLength,
  setLongBreakLength,
  setShortBreakLength,
  toggleNotifications,
} = settingsSlice.actions;

export default settingsSlice.reducer;
