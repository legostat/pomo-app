import { FC, ReactNode } from "react";
import clsx from "clsx";
import { TimerState } from "@app/types/timer-state";

type ControlButtonProps = {
  children: ReactNode;
  timerState: TimerState;
  handleClick: () => void;
};

export const ControlButton: FC<ControlButtonProps> = ({
  handleClick,
  timerState,
  children,
}) => {
  let buttonStyles = "";

  switch (timerState) {
    case "focus":
      buttonStyles = "bg-red-500/10 text-red-900 dark:text-red-100";
      break;
    case "long":
      buttonStyles = "bg-blue-500/10 text-blue-900 dark:text-blue-100";
      break;
    case "short":
      buttonStyles = "bg-green-500/10 text-green-900 dark:text-green-100";
      break;
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "flex h-20 w-20 items-center justify-center rounded-3xl",
        buttonStyles
      )}
    >
      {children}
    </button>
  );
};
