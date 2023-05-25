import { FC, ReactNode } from "react";
import clsx from "clsx";

import { useTimerState } from "@app/hooks/useTimerState";

type ControlButtonProps = {
  children: ReactNode;
  handleClick: () => void;
};

export const ControlButton: FC<ControlButtonProps> = ({
  handleClick,
  children,
}) => {
  const { controlButtonStyles } = useTimerState();

  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className={clsx(
        "flex h-20 w-20 items-center justify-center rounded-3xl",
        controlButtonStyles
      )}
    >
      {children}
    </button>
  );
};
