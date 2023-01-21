import React from "react";
import { generateDatesFromYearBegining } from "../utils/generate-dates-from-year-begining";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBegining();

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => {
          return (
            <div key={index} className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold">
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date => <HabitDay key={date.toString()} />)}
      </div>
    </div>
  );
}