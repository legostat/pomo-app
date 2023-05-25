import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useTimerState } from "@app/hooks/useTimerState";
import clsx from "clsx";

import { selectOpenNotifications } from "@app/store/modals/selectors";
import { toggleShowNotification } from "@app/store/modals/reducer";
import { ReactComponent as CloseIcon } from "../../assets/icons/cross.svg";

interface NotificationProps {
  open: boolean;
  toggleShowNotification: (arg0: boolean) => void;
}

const NotificationComponent: FC<NotificationProps> = ({
  open,
  toggleShowNotification,
}) => {
  const { settingsModalStyles, labelText } = useTimerState();

  return (
    <div
      className={clsx(
        "absolute left-1/2 top-8 z-50 w-[448px] -translate-x-1/2 transform rounded-2xl shadow",
        settingsModalStyles,
        { hidden: !open }
      )}
    >
      <header className="flex items-center justify-between p-6">
        <h2 className="text-header">{labelText}</h2>
        <button
          onClick={() => {
            toggleShowNotification(false);
          }}
          className="flex h-[34px] w-[34px] flex-none items-center justify-center"
        >
          <CloseIcon className="w-[18px] flex-none" />
        </button>
      </header>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  open: selectOpenNotifications,
});

export const Notification = connect(mapStateToProps, {
  toggleShowNotification,
})(NotificationComponent);
