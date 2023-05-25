import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import useCountDown from "react-countdown-hook";
import { useTimerState } from "@app/hooks/useTimerState";

import { setNextState } from "@app/store/timer/reducer";

import { Controls } from "@app/components/controls/controls.component";
import { CounterView } from "@app/components/counter-view/counter-view.component";
import { Label } from "@app/components/label/label.component";
import { selectAreNotificationsEnabled } from "@app/store/settings/selectors";

interface TimerProps {
  showNotifications: boolean;
  setNextState: () => void;
}

const TimerComponent: FC<TimerProps> = ({ setNextState }) => {
  const { timerStyles, initialTime } = useTimerState();
  const [isRunning, setIsRunning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const [time, { start, pause, resume }] = useCountDown(initialTime * 1000);

  useEffect(() => {
    start(initialTime * 1000);
    setIsRunning(true);
    setIsPaused(false);
  }, [start, initialTime]);

  useEffect(() => {
    if (time <= 0) {
      setNextState();
    }
  }, [time, setNextState]);

  /* useEffect(() => {
    if (showNotifications) {
      alert(labelText);
    }
  }, [labelText]); */

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

const mapStateToProps = createStructuredSelector({
  showNotifications: selectAreNotificationsEnabled,
});

export const Timer = connect(mapStateToProps, { setNextState })(TimerComponent);
