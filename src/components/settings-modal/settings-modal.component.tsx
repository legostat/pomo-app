import { FC, useState } from "react";
import clsx from "clsx";
import { TimerState } from "@app/types/timer-state";

import { ReactComponent as CloseIcon } from "../../assets/icons/cross.svg";
import { SwitchControl } from "@app/components/settings-control";

type SettingsProps = {
  timerState: TimerState;
};

export const SettingsModal: FC<SettingsProps> = ({ timerState }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  let colorStyles = "";

  switch (timerState) {
    case "focus":
      colorStyles = "bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-50";
      break;
    case "long":
      colorStyles =
        "bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-50";
      break;
    case "short":
      colorStyles =
        "bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-50";
      break;
  }

  return (
    <section
      className={clsx(
        "absolute left-1/2 top-1/2 z-50 w-[448px] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl shadow",
        colorStyles
      )}
    >
      <header className="flex items-center justify-between p-6">
        <h2 className="text-header">Settings</h2>
        <button className="flex h-[34px] w-[34px] flex-none items-center justify-center">
          <CloseIcon className="w-[11px] flex-none" />
        </button>
      </header>
      <div>
        <SwitchControl
          title="Dark mode"
          enabled={isDarkMode}
          handleChange={() => {
            setIsDarkMode(!isDarkMode);
          }}
          timerState={timerState}
        />
      </div>
    </section>
  );
};
