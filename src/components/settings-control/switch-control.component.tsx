import { FC } from "react";
import clsx from "clsx";
import { useTimerState } from "@app/hooks/useTimerState";

type SwitchProps = {
  title: string;
  enabled: boolean;
  handleChange: () => void | undefined;
};

export const SwitchControl: FC<SwitchProps> = ({
  title,
  enabled,
  handleChange,
}) => {
  const { switchControlStyles } = useTimerState();

  return (
    <label className="flex h-16 cursor-pointer items-center justify-between px-6">
      <span className="text-base">{title}</span>
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={enabled}
          readOnly
        />
        <div
          onClick={handleChange}
          className={clsx(
            "peer h-5 w-[34px] rounded-full bg-black/20 after:absolute  after:left-[2px] after:top-0.5 after:block after:h-4 after:w-4 after:rounded-full  after:transition-all after:content-[''] peer-checked:bg-current peer-checked:after:translate-x-[calc(100%-2px)] peer-focus:ring-current dark:bg-white/20",
            switchControlStyles
          )}
        ></div>
      </div>
    </label>
  );
};
