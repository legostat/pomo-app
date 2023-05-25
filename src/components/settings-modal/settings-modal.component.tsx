import { FC, useContext } from "react";
import clsx from "clsx";
import { createStructuredSelector } from "reselect";

import { useTimerState } from "@app/hooks/useTimerState";

import { toggleSettingsModal } from "@app/store/modals/reducer";

import { selectOpenSettingsModal } from "@app/store/modals/selectors";

import {
  setFocusLength,
  setLongBreakLength,
  setShortBreakLength,
  toggleNotifications,
} from "@app/store/settings/reducer";

import {
  selectAreNotificationsEnabled,
  selectFocusLength,
  selectLongBreakLength,
  selectShortBreakLength,
} from "@app/store/settings/selectors";

import { SwitchControl, InputControl } from "@app/components/settings-control";
import { ReactComponent as CloseIcon } from "../../assets/icons/cross.svg";
import { ThemeContext } from "@app/context/context";
import { connect } from "react-redux";

type SettingsModalProps = {
  open: boolean;
  notificationsEnabled: boolean;
  focusLength: number;
  longBreakLength: number;
  shortBreakLength: number;
  toggleSettingsModal: () => void;
  toggleNotifications: () => void;
  setFocusLength: (length: number) => void;
  setLongBreakLength: (length: number) => void;
  setShortBreakLength: (length: number) => void;
};

export const SettingsModalComponent: FC<SettingsModalProps> = ({
  open,
  notificationsEnabled,
  focusLength,
  longBreakLength,
  shortBreakLength,
  toggleSettingsModal,
  toggleNotifications,
  setFocusLength,
  setLongBreakLength,
  setShortBreakLength,
}) => {
  const { isDark, toggleIsDark } = useContext(ThemeContext);

  const { settingsModalStyles } = useTimerState();

  return (
    <section
      className={clsx(
        "absolute left-1/2 top-1/2 z-50 w-[448px] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl shadow",
        settingsModalStyles,
        { hidden: !open }
      )}
    >
      <header className="flex items-center justify-between p-6">
        <h2 className="text-header">Settings</h2>
        <button
          onClick={() => {
            toggleSettingsModal();
          }}
          className="flex h-[34px] w-[34px] flex-none items-center justify-center"
        >
          <CloseIcon className="w-[18px] flex-none" />
        </button>
      </header>
      <div>
        <SwitchControl
          title="Dark mode"
          enabled={isDark}
          handleChange={toggleIsDark}
        />
        <InputControl
          title="Focus length"
          value={focusLength}
          handleChange={(value) => {
            setFocusLength(value);
          }}
        />
        <InputControl
          title="Short break length"
          value={shortBreakLength}
          handleChange={(value) => {
            setShortBreakLength(value);
          }}
        />
        <InputControl
          title="Long break length"
          value={longBreakLength}
          handleChange={(value) => {
            setLongBreakLength(value);
          }}
        />
        <SwitchControl
          title="Notifications"
          enabled={notificationsEnabled}
          handleChange={() => {
            toggleNotifications();
          }}
        />
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  open: selectOpenSettingsModal,
  focusLength: selectFocusLength,
  longBreakLength: selectLongBreakLength,
  shortBreakLength: selectShortBreakLength,
  notificationsEnabled: selectAreNotificationsEnabled,
});

export const SettingsModal = connect(mapStateToProps, {
  toggleSettingsModal,
  toggleNotifications,
  setFocusLength,
  setLongBreakLength,
  setShortBreakLength,
})(SettingsModalComponent);
