import { PointerEventHandler, ChangeEventHandler, FC } from "react";

import { ReactComponent as TriangleIcon } from "../../assets/icons/play.svg";

type InputProps = {
  title: string;
  value: number;
  handleChange: (value: number) => void;
};

export const InputControl: FC<InputProps> = ({
  title,
  value,
  handleChange,
}) => {
  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = Number(e.currentTarget.value);
    if (!isNaN(value)) handleChange(value);
  };

  const handleClickUp: PointerEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const newValue = ++value;
    handleChange(newValue);
  };

  const handleClickDown: PointerEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const newValue = --value;
    handleChange(newValue);
  };

  return (
    <label className="flex h-16 cursor-pointer items-center justify-between px-6">
      <span className="text-base">{title}</span>
      <div className="relative flex h-10 w-24 divide-x divide-black/10 overflow-hidden rounded-lg border border-black/10 dark:divide-white/10 dark:border-white/10">
        <input
          type="text"
          value={value}
          className="w-full border-none bg-transparent text-center text-base focus:outline-none"
          onChange={handleInput}
        />
        <div className="flex w-[30px] flex-none flex-col divide-y divide-black/10 dark:divide-white/10">
          <button
            onClick={handleClickUp}
            className="flex h-1/2 w-full items-center justify-center"
          >
            <TriangleIcon className="w-[10px] flex-none -rotate-90 transform" />
          </button>
          <button
            onClick={handleClickDown}
            className="flex h-1/2 w-full items-center justify-center"
          >
            <TriangleIcon className="w-[10px] flex-none rotate-90 transform" />
          </button>
        </div>
      </div>
    </label>
  );
};
