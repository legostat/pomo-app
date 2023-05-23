import { FC } from "react";
import { ControlButton } from "@app/components/control-button/control-button.component";
import { StartButton } from "@app/components/start-button/start-button.component";

import { ReactComponent as SettingsIcon } from "../../assets/icons/dots-three.svg";
import { ReactComponent as ForwardIcon } from "../../assets/icons/fast-forward.svg";

import { TimerState } from "@app/types/timer-state";

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
      <ControlButton timerState={timerState} handleClick={() => {}}>
        <SettingsIcon className="w-[27px] flex-none" />
      </ControlButton>
      <StartButton
        timerState={timerState}
        handleClick={handleRunningState}
        isRunning={isRunning}
      />
      <ControlButton timerState={timerState} handleClick={() => {}}>
        <ForwardIcon className="w-[29px] flex-none" />
      </ControlButton>
    </div>
  );
};
