import { MainButton } from "@app/components/main-button/main-button.component";
import { TimerState } from "@app/types/timer-state";
import { FC } from "react";

interface IControlsTypes {
  isRunning: boolean;
  timerState: TimerState;
  handleRunningState: () => void;
}

export const Controls: FC<IControlsTypes> = ({
  isRunning,
  timerState,
  handleRunningState,
}) => {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <MainButton
        timerState={timerState}
        handleClick={handleRunningState}
        isRunning={isRunning}
      />
    </div>
  );
};
