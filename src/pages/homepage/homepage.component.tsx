import { Timer } from "@app/components/timer/timer.component";
import { ThemeContext } from "@app/context/context";
import clsx from "clsx";
import { useContext } from "react";

export const HomePage = () => {
  const theme = useContext(ThemeContext);
  return (
    <section
      className={clsx({
        dark: theme === "dark",
      })}
    >
      <Timer timerState={"focus"} />
    </section>
  );
};
