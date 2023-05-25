import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "@app/store/settings/reducer";
import modalsReducer from "@app/store/modals/reducer";
import timerReducer from "@app/store/timer/reducer";

export const store = configureStore({
  reducer: {
    setttings: settingsReducer,
    modals: modalsReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
