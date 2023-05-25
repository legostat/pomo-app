import clsx from "clsx";
import { useTimerState } from "@app/hooks/useTimerState";

export const Label = () => {
  const { labelStyles, labelText, LabelIcon } = useTimerState();

  return (
    <div
      className={clsx(
        "flex h-12 items-center gap-x-2 rounded-full border-2 border-solid border-current px-4",
        labelStyles
      )}
    >
      <LabelIcon className="w-8 flex-none" />
      <span className="select-none text-label">{labelText}</span>
    </div>
  );
};
