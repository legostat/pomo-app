import { useAppSelector } from "@app/hooks/reduxHooks";
import { TimerState, selectTimerState } from "@app/store/timer";

import { ReactComponent as FocusIcon } from "@app/assets/icons/brain.svg";
import { ReactComponent as CoffeeIcon } from "@app/assets/icons/coffee.svg";

export const useTimerState = () => {
  const timerState: TimerState = useAppSelector(selectTimerState);

  switch (timerState) {
    case "focus":
      return {
        timerStyles: "text-red-900 bg-red-50 dark:text-red-50 dark:bg-red-950",
        switchControlStyles: "after:bg-red-50 dark:after:bg-red-950",
        settingsModalStyles:
          "text-red-900 bg-red-50 dark:text-red-50 dark:bg-red-950",
        controlButtonStyles: "bg-red-500/10 text-red-900 dark:text-red-100",
        startButtonStyles: "bg-red-500/70",
        labelStyles: "bg-red-500/10 dark:bg-red-500/10",
        labelText: "Focus",
        LabelIcon: FocusIcon,
      };
    case "long":
      return {
        timerStyles:
          "text-blue-900 dark:text-blue-50 bg-blue-50 dark:bg-blue-950",
        switchControlStyles: "after:bg-blue-50 dark:after:bg-blue-950",
        settingsModalStyles:
          "text-blue-900 bg-blue-50 dark:text-blue-50 dark:bg-blue-950",
        controlButtonStyles: "bg-blue-500/10 text-blue-900 dark:text-blue-100",
        startButtonStyles: "bg-blue-500/60",
        labelStyles: "bg-blue-500/10 dark:bg-blue-500/10",
        labelText: "Long Break",
        LabelIcon: CoffeeIcon,
      };
    case "short":
      return {
        timerStyles:
          "text-green-900 dark:text-green-50 bg-green-50 dark:bg-green-950",
        switchControlStyles: "after:bg-green-50 dark:after:bg-green-950",
        settingsModalStyles:
          "text-green-900 bg-green-50 dark:text-green-50 dark:bg-green-950",
        controlButtonStyles:
          "bg-green-500/10 text-green-900 dark:text-green-100",
        startButtonStyles: "bg-green-500/60",
        labelStyles: "bg-green-500/10 dark:bg-green-500/10",
        labelText: "Short Break",
        LabelIcon: CoffeeIcon,
      };
  }
};
