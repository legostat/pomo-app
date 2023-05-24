import { SettingsModal } from "@app/components/settings-modal/settings-modal.component";
import { Timer } from "@app/components/timer/timer.component";
import { ThemeContext } from "@app/context/context";
import clsx from "clsx";
import { useContext } from "react";

export const HomePage = () => {
  const theme = useContext(ThemeContext);
  return (
    <section
      className={clsx("relative", {
        dark: theme === "dark",
      })}
    >
      <Timer timerState={"focus"} />
      <SettingsModal timerState={"focus"} />
    </section>
  );
};
