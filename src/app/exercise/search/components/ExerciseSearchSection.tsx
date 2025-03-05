"use client";

import { Exercise } from "@/lib/FirebaseService";
import { useState } from "react";

import ExerciseSearchOptions from "./ExerciseSearchOptions";
import AddLink from "@/components/ui/AddLink";
import { ROUTES } from "@/constants/routes";

interface Props {
  userId: string;
}

export default function ExerciseSearchSection({ userId }: Props) {
  const [filteredData, setFilteredData] = useState<Exercise[]>();

  console.log(filteredData);

  return (
    <>
      <ExerciseSearchOptions
        userId={userId}
        setFilteredData={setFilteredData}
      />
      <AddLink
        route={ROUTES.EXERCISE_ADD}
        title="새로운 운동 추가하기"
        subTitle="찾는 운동이 없나요?"
      />
    </>
  );
}
