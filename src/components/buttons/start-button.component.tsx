import { FC } from "react";
import clsx from "clsx";

import { useTimerState } from "@app/hooks/useTimerState";

import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/icons/pause.svg";

type StartButtonProps = {
  isRunning: boolean;
  handleClick: () => void;
};

export const StartButton: FC<StartButtonProps> = ({
  isRunning,
  handleClick,
}) => {
  const iconStyles = "w-[22px] flex-none";

  const { startButtonStyles } = useTimerState();

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "flex h-24 w-32 items-center justify-center rounded-4xl",
        startButtonStyles
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
