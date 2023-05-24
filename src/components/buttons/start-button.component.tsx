import { FC } from "react";
import clsx from "clsx";

import { TimerState } from "@app/types/timer-state";

import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/icons/pause.svg";

type StartButtonProps = {
  timerState: TimerState;
  isRunning: boolean;
  handleClick: () => void;
};

export const StartButton: FC<StartButtonProps> = ({
  timerState,
  isRunning,
  handleClick,
}) => {
  const iconStyles = "w-[22px] flex-none";
  let buttonStyles = "";

  switch (timerState) {
    case "focus":
      buttonStyles = "bg-red-500/70";
      break;
    case "long":
      buttonStyles = "bg-blue-500/60";
      break;
    case "short":
      buttonStyles = "bg-green-500/60";
      break;
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "flex h-24 w-32 items-center justify-center rounded-4xl",
        buttonStyles
      )}
    >
      {isRunning ? (
        <PauseIcon className={iconStyles} />
      ) : (
        <PlayIcon className={iconStyles} />
      )}
    </button>
  );
};
