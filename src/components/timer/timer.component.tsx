import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import useCountDown from "react-countdown-hook";

import { Controls } from "@app/components/controls/controls.component";
import { CounterView } from "@app/components/counter-view/counter-view.component";
import { Label } from "@app/components/label/label.component";
import { TimerState } from "@app/types/timer-state";

type TimerProps = {
  timerState: TimerState;
};

export const Timer: FC<TimerProps> = ({ timerState }) => {
  const [isRunning, setIsRunning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const initialTime = 60 * 1000;

  const [time, { start, pause, resume }] = useCountDown(initialTime);

  let colorClasses = "";

  switch (timerState) {
    case "focus":
      colorClasses = "text-red-900 bg-red-50 dark:text-red-50 dark:bg-red-950";
      break;
    case "long":
      colorClasses =
        "text-blue-900 dark:text-blue-50 bg-blue-50 dark:bg-blue-950";
      break;
    case "short":
      colorClasses =
        "text-green-900 dark:text-green-50 bg-green-50 dark:bg-green-950";
      break;
  }

  useEffect(() => {
    start();
  }, [start]);

  const handleRunning = () => {
    if (isPaused) {
      resume();
      setIsPaused(false);
      setIsRunning(true);
    } else {
      pause();
      setIsPaused(true);
      setIsRunning(false);
    }
  };

  return (
    <section
      className={clsx(
        "flex h-screen w-full items-center justify-center",
        colorClasses
      )}
    >
      <div className="flex flex-col items-center gap-y-8">
        <Label timerState={timerState} />
        <CounterView time={time / 1000} isRunning={isRunning} />
        <Controls
          timerState={timerState}
          isRunning={isRunning}
          handleRunningState={handleRunning}
        />
      </div>
    </section>
  );
};
