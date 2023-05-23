import { FC } from "react";
import clsx from "clsx";

import { TimerState } from "@app/types/timer-state";

import { ReactComponent as FocusIcon } from "../../assets/icons/brain.svg";
import { ReactComponent as CoffeeIcon } from "../../assets/icons/coffee.svg";

interface LabelProps {
  timerState: TimerState;
}

export const Label: FC<LabelProps> = ({ timerState }) => {
  let labelClasses = "";
  let text = "";

  switch (timerState) {
    case "focus":
      labelClasses = "bg-red-500/10 dark:bg-red-500/10";
      text = "Focus";
      break;
    case "long":
      labelClasses = "bg-blue-500/10 dark:bg-blue-500/10";
      text = "Long Break";
      break;
    case "short":
      labelClasses = "bg-green-500/10 dark:bg-green-500/10";
      text = "Short Break";
      break;
  }

  return (
    <div
      className={clsx(
        "flex h-12 items-center gap-x-2 rounded-full border-2 border-solid border-current px-4",
        labelClasses
      )}
    >
      {timerState === "focus" ? (
        <FocusIcon className="w-8 flex-none" />
      ) : (
        <CoffeeIcon className="w-8 flex-none" />
      )}
      <span className="select-none text-label">{text}</span>
    </div>
  );
};
