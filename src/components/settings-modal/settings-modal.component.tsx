import { FC, useState } from "react";
import clsx from "clsx";
import { TimerState } from "@app/types/timer-state";

import { SwitchControl, InputControl } from "@app/components/settings-control";
import { ReactComponent as CloseIcon } from "../../assets/icons/cross.svg";

type SettingsProps = {
  timerState: TimerState;
};

export const SettingsModal: FC<SettingsProps> = ({ timerState }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [focus, setFocus] = useState(25);

  let colorStyles = "";
  let bgLight = "";
  let bgDark = "";

  switch (timerState) {
    case "focus":
      colorStyles = "text-red-900 dark:text-red-50";
      bgLight = "bg-red-50";
      bgDark = "dark:bg-red-950";
      break;
    case "long":
      colorStyles = "text-blue-900 dark:text-blue-50";
      bgLight = "bg-blue-50";
      bgDark = "dark:bg-blue-950";
      break;
    case "short":
      colorStyles = "text-green-900 dark:bg-green-950";
      bgLight = "bg-green-50";
      bgDark = "dark:bg-green-950";
      break;
  }

  return (
    <section
      className={clsx(
        "absolute left-1/2 top-1/2 z-50 w-[448px] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl shadow",
        colorStyles,
        bgLight,
        bgDark
      )}
    >
      <header className="flex items-center justify-between p-6">
        <h2 className="text-header">Settings</h2>
        <button className="flex h-[34px] w-[34px] flex-none items-center justify-center">
          <CloseIcon className="w-[18px] flex-none" />
        </button>
      </header>
      <div>
        <SwitchControl
          title="Dark mode"
          enabled={isDarkMode}
          handleChange={() => {
            setIsDarkMode(!isDarkMode);
          }}
          sliderLight={bgLight}
          sliderDark={bgDark}
        />
        <InputControl
          title="Focus length"
          value={focus}
          handleChange={(value) => {
            setFocus(value);
          }}
        />
        <InputControl
          title="Short break length"
          value={focus}
          handleChange={(value) => {
            setFocus(value);
          }}
        />
        <InputControl
          title="Long break length"
          value={focus}
          handleChange={(value) => {
            setFocus(value);
          }}
        />
        <SwitchControl
          title="Notifications"
          enabled={isDarkMode}
          handleChange={() => {
            setIsDarkMode(!isDarkMode);
          }}
          sliderLight={bgLight}
          sliderDark={bgDark}
        />
      </div>
    </section>
  );
};
