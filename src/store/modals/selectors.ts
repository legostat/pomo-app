import type { RootState } from "@app/store/store";

export const selectOpenSettingsModal = (state: RootState) =>
  state.modals.openSettings;

export const selectOpenNotifications = (state: RootState) => {
  if (state.setttings.notifications) {
    return state.modals.openNotification;
  }
  return false;
};
