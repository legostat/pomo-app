import { FC, useState } from "react";
import clsx from "clsx";

import { Controls } from "@app/components/controls/controls.component";
import { CounterView } from "@app/components/counter-view/counter-view.component";
import { Label } from "@app/components/label/label.component";
import { TimerState } from "@app/types/timer-state";

interface ITimerProps {
  timerState: TimerState;
}

export const Timer: FC<ITimerProps> = ({ timerState }) => {
  const [isRunning, setIsRunning] = useState(false);

  let colorClasses = "";

  switch (timerState) {
    case "focus":
      colorClasses = "text-red-900 dark:text-red-50 bg-red-50";
      break;
    case "long":
      colorClasses = "text-blue-900 dark:text-blue-50 bg-blue-50";
      break;
    case "short":
      colorClasses = "text-green-900 dark:text-green-50 bg-green-50";
      break;
  }

  const handleRunning = () => {
    setIsRunning(!isRunning);
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
        <CounterView initialTime={205} isRunning={isRunning} />
        <Controls
          timerState={timerState}
          isRunning={isRunning}
          handleRunningState={handleRunning}
        />
      </div>
    </section>
  );
};
