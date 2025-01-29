import { useState } from "react";
import DateInput from "./DateInput";
import TimeSelect from "./TimeSelect";
import { Button } from "@/components/ui/Button";
import PlusIcon from "@/components/icons/PlusIcon";

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

      <div className="w-4/5 max-w-md">
        <Button
          size="lg"
          color="black"
          title={
            <div className="flex justify-center items-center gap-1">
              <PlusIcon width={18} />
              <span>운동 선택</span>
            </div>
          }
          //   TODO: onCLick
          onClick={() => {}}
        />
      </div>
    </section>
  );
}
