import { FC } from "react";
import { connect } from "react-redux";

import { ControlButton, StartButton } from "@app/components/buttons";
import { toggleSettingsModal } from "@app/store/modals/reducer";
import { setNextState } from "@app/store/timer/reducer";
import { toggleShowNotification } from "@app/store/modals/reducer";

import { ReactComponent as SettingsIcon } from "../../assets/icons/dots-three.svg";
import { ReactComponent as ForwardIcon } from "../../assets/icons/fast-forward.svg";

type ControlsTypes = {
  isRunning: boolean;
  handleRunningState: () => void;
  toggleSettingsModal: () => void;
  toggleShowNotification: (arg0: boolean) => void;
  setNextState: () => void;
};

const ControlsComponent: FC<ControlsTypes> = ({
  isRunning,
  handleRunningState,
  toggleSettingsModal,
  toggleShowNotification,
  setNextState,
}) => {
  const handleSettingsClick = () => {
    toggleSettingsModal();
  };

  const handleNextClick = () => {
    setNextState();
    toggleShowNotification(true);
  };

  return (
    <div className="flex items-center justify-center gap-x-4">
      <ControlButton handleClick={handleSettingsClick}>
        <SettingsIcon className="w-[27px] flex-none" />
      </ControlButton>
      <StartButton handleClick={handleRunningState} isRunning={isRunning} />
      <ControlButton handleClick={handleNextClick}>
        <ForwardIcon className="w-[29px] flex-none" />
      </ControlButton>
    </div>
  );
};

export const Controls = connect(null, {
  toggleSettingsModal,
  setNextState,
  toggleShowNotification,
})(ControlsComponent);
