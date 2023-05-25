import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "@app/store/settings";
import modalsReducer from "@app/store/modals";
import timerReducer from "@app/store/timer";

export const store = configureStore({
  reducer: {
    setttings: settingsReducer,
    modals: modalsReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
