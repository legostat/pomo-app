import { FC } from "react";
import clsx from "clsx";
import { padTo2Digits } from "@app/utils/padToTwoDidgits";

interface ICounterProps {
  initialTime: number;
  isRunning: boolean;
}

export const CounterView: FC<ICounterProps> = ({ initialTime, isRunning }) => {
  const counterActivityClasses = isRunning
    ? "running font-extrabold"
    : "paused font-extralight";

  const minutes = Math.floor(initialTime / 60);
  const seconds = initialTime % 60;

  return (
    <div
      className={clsx("timer select-none text-timer", counterActivityClasses)}
    >
      <div> {padTo2Digits(minutes)} </div>
      <div> {padTo2Digits(seconds)} </div>
    </div>
  );
};
