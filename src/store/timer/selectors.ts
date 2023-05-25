import type { RootState } from "@app/store/store";
import { StatesQueue } from "@app/store/timer/reducer";

export const selectTimerState = (state: RootState) =>
  StatesQueue[state.timer.currentState];
