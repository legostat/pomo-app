import { FC } from "react";
import { connect } from "react-redux";
import { ControlButton, StartButton } from "@app/components/buttons";

import { toggleSettingsModal } from "@app/store/modals";
import { setNextState } from "@app/store/timer";

import { ReactComponent as SettingsIcon } from "../../assets/icons/dots-three.svg";
import { ReactComponent as ForwardIcon } from "../../assets/icons/fast-forward.svg";

type ControlsTypes = {
  isRunning: boolean;
  handleRunningState: () => void;
  toggleSettingsModal: () => void;
  setNextState: () => void;
};

const ControlsComponent: FC<ControlsTypes> = ({
  isRunning,
  handleRunningState,
  toggleSettingsModal,
  setNextState,
}) => {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <ControlButton handleClick={toggleSettingsModal}>
        <SettingsIcon className="w-[27px] flex-none" />
      </ControlButton>
      <StartButton handleClick={handleRunningState} isRunning={isRunning} />
      <ControlButton handleClick={setNextState}>
        <ForwardIcon className="w-[29px] flex-none" />
      </ControlButton>
    </div>
  );
};

export const Controls = connect(null, { toggleSettingsModal, setNextState })(
  ControlsComponent
);
