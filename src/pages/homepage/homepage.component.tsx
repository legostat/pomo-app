import { useContext } from "react";
import clsx from "clsx";

import { SettingsModal } from "@app/components/settings-modal/settings-modal.component";
import { Timer } from "@app/components/timer/timer.component";
import { ThemeContext } from "@app/context/context";

export const HomePage = () => {
  const theme = useContext(ThemeContext);
  return (
    <section
      className={clsx("relative", {
        dark: theme.isDark,
      })}
    >
      <Timer timerState={"focus"} />
      <SettingsModal timerState={"focus"} />
    </section>
  );
};
