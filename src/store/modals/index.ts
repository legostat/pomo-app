import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@app/store/store";

interface Modals {
  openSettings: boolean;
}

const initialState: Modals = {
  openSettings: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleSettingsModal: (state) => {
      state.openSettings = !state.openSettings;
    },
  },
});

export const { toggleSettingsModal } = modalsSlice.actions;

export const selectOpenSettingsModal = (state: RootState) =>
  state.modals.openSettings;

export default modalsSlice.reducer;
