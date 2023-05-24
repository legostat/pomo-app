import { FC } from "react";
import clsx from "clsx";
import { padTo2Digits } from "@app/utils/padToTwoDidgits";

type CounterProps = {
  time: number;
  isRunning: boolean;
};

export const CounterView: FC<CounterProps> = ({ time, isRunning }) => {
  const counterActivityClasses = isRunning
    ? "running font-extrabold"
    : "paused font-extralight";

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div
      className={clsx("timer select-none text-timer", counterActivityClasses)}
    >
      <div> {padTo2Digits(minutes)} </div>
      <div> {padTo2Digits(seconds)} </div>
    </div>
  );
};
