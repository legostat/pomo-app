import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Modals {
  openSettings: boolean;
  openNotification: boolean;
}

const initialState: Modals = {
  openSettings: false,
  openNotification: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleSettingsModal: (state) => {
      state.openSettings = !state.openSettings;
    },
    toggleShowNotification: (state, action: PayloadAction<boolean>) => {
      state.openNotification = action.payload;
    },
  },
});

export const { toggleSettingsModal, toggleShowNotification } =
  modalsSlice.actions;

export default modalsSlice.reducer;
