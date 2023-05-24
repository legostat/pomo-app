import { TimerState } from "@app/types/timer-state";
import clsx from "clsx";
import { FC } from "react";

type SwitchProps = {
  timerState: TimerState;
  title: string;
  enabled: boolean;
  handleChange: () => void;
};

export const SwitchControl: FC<SwitchProps> = ({
  title,
  enabled,
  handleChange,
  timerState,
}) => {
  let colorStyles = "";

  switch (timerState) {
    case "focus":
      colorStyles = "after:bg-red-50 dark:after:bg-red-950";
      break;
    case "long":
      colorStyles = "after:bg-blue-50 dark:after:bg-blue-950";
      break;
    case "short":
      colorStyles = "after:bg-green-50 dark:after:bg-green-950";
      break;
  }

  return (
    <label className="flex h-16 cursor-pointer items-center justify-between px-6">
      <span className="text-base">{title}</span>
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={enabled}
          readOnly
        />
        <div
          onClick={handleChange}
          className={clsx(
            "peer h-5 w-[34px] rounded-full bg-black/20 after:absolute  after:left-[2px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:transition-all after:content-['']  peer-checked:bg-current peer-checked:after:translate-x-[calc(100%-2px)] peer-focus:ring-current dark:bg-white/20",
            colorStyles
          )}
        ></div>
      </div>
    </label>
  );
};
