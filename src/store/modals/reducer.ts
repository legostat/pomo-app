import { createSlice } from "@reduxjs/toolkit";

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
    toggleNotification: (state) => {
      state.openNotification = !state.openNotification;
    },
  },
});

export const { toggleSettingsModal, toggleNotification } = modalsSlice.actions;

export default modalsSlice.reducer;
