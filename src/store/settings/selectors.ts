import { RootState } from "@app/store/store";

export const selectFocusLength = (state: RootState) =>
  state.setttings.focusLength;
export const selectShortBreakLength = (state: RootState) =>
  state.setttings.shortBreakLength;
export const selectLongBreakLength = (state: RootState) =>
  state.setttings.longBreakLength;
export const selectAreNotificationsEnabled = (state: RootState) =>
  state.setttings.notifications;
