import { useState } from "react";
import { ROUTES } from "@/constants/routes";

import DateInput from "./DateInput";
import TimeSelect from "./TimeSelect";
import AddLink from "./AddLink";

export function RecordsAddOptions() {
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");

  return (
    <section className="flex flex-col items-center pt-20 bg-white gap-4">
      <fieldset className="w-full max-w-md flex flex-col gap-4">
        <legend className="sr-only">운동 기록 입력</legend>

        <div className="flex gap-2 items-center">
          <label htmlFor="date" className="font-bold w-1/4">
            날짜
          </label>
          <div className="w-3/4 border p-2">
            <DateInput />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <label htmlFor="start-time" className="font-bold w-1/4">
            시작 시간
          </label>
          <div className="w-3/4 border p-2">
            <TimeSelect value={startAt} onChange={setStartAt} />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <label htmlFor="end-time" className="font-bold w-1/4">
            종료 시간
          </label>
          <div className="w-3/4 border p-2">
            <TimeSelect value={endAt} onChange={setEndAt} />
          </div>
        </div>
      </fieldset>

      <AddLink route={ROUTES.EXERCISE_SEARCH} title="운동 선택" />
    </section>
  );
}
