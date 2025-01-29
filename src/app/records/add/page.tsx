"use client";

import FormHeader from "@/components/layout/Header/FormHeader";
import { RecordsAddOptions } from "./components/RecordsAddOptions";

export default function RecordsAdd() {
  return (
    <form className="flex flex-col min-h-screen bg-white">
      <FormHeader title="운동 기록 추가" />
      <RecordsAddOptions />
    </form>
  );
}
