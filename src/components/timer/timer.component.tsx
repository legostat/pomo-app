import { FC, useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { connect } from "react-redux";

import useCountDown from "react-countdown-hook";
import { useTimerState } from "@app/hooks/useTimerState";

import { setNextState } from "@app/store/timer/reducer";
import { toggleShowNotification } from "@app/store/modals/reducer";

import { Controls } from "@app/components/controls/controls.component";
import { CounterView } from "@app/components/counter-view/counter-view.component";
import { Label } from "@app/components/label/label.component";

interface TimerProps {
  setNextState: () => void;
  toggleShowNotification: (arg0: boolean) => void;
}

const TimerComponent: FC<TimerProps> = ({
  setNextState,
  toggleShowNotification,
}) => {
  const [started, setStarted] = useState(false);
  const { timerStyles, initialTime } = useTimerState();
  const [isRunning, setIsRunning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const [time, { start, pause, resume }] = useCountDown(initialTime * 1000);

  const handleNextState = useCallback(() => {
    setNextState();
    toggleShowNotification(true);
  }, [setNextState, toggleShowNotification]);

  useEffect(() => {
    start(initialTime * 1000);
    setIsRunning(true);
    setIsPaused(false);
  }, [start, initialTime, timerStyles]);

  useEffect(() => {
    if (time <= 0 && started) {
      handleNextState();
    }
    setStarted(true);
  }, [handleNextState, time, started]);

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

export const Timer = connect(null, {
  setNextState,
  toggleShowNotification,
})(TimerComponent);
