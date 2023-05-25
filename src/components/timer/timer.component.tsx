import { useEffect, useState } from "react";
import clsx from "clsx";

import useCountDown from "react-countdown-hook";
import { useTimerState } from "@app/hooks/useTimerState";

import { Controls } from "@app/components/controls/controls.component";
import { CounterView } from "@app/components/counter-view/counter-view.component";
import { Label } from "@app/components/label/label.component";

export const Timer = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const initialTime = 60 * 1000;

  const [time, { start, pause, resume }] = useCountDown(initialTime);

  const { timerStyles } = useTimerState();

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
        timerStyles
      )}
    >
      <div className="flex flex-col items-center gap-y-8">
        <Label />
        <CounterView time={time / 1000} isRunning={isRunning} />
        <Controls isRunning={isRunning} handleRunningState={handleRunning} />
      </div>
    </section>
  );
};
