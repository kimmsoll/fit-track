"use client";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import uniqBy from "lodash.uniqby";

import { useFirebase } from "@/hooks/useFirebase";
import { ROUTES } from "@/constants/routes";
import AddLink from "@/components/ui/AddLink";
import ExerciseSearchOptions from "./ExerciseSearchOptions";
import ExerciseSearchResults from "./ExerciseSearchResults";
import { Exercise } from "@/lib/FirebaseService";

interface Props {
  userId: string;
}

export default function ExerciseSearchSection({ userId }: Props) {
  const [areaOptions, setAreaOptions] = useState<string[]>([]);
  const [machineOptions, setMachineOptions] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<Exercise[]>([]);

  const firebase = useFirebase();
  const { data, error, isLoading } = useQuery<Exercise[]>(
    ["exercises", userId],
    () => firebase.getExercises(userId),
    { enabled: !!userId }
  );

  useEffect(() => {
    if (!isLoading && data) {
      setFilteredData(uniqBy(data, "id"));
      setAreaOptions([...new Set(data.map((v) => v.area))]);
      setMachineOptions([...new Set(data.map((v) => v.machine))]);
    }
  }, [isLoading, data]);

  return (
    <section className="w-full flex flex-col items-center gap-4">
      <ExerciseSearchOptions
        data={data ?? []}
        setFilteredData={setFilteredData}
        areaOptions={areaOptions}
        machineOptions={machineOptions}
      />
      <AddLink
        route={ROUTES.EXERCISE_ADD}
        title="새로운 운동 추가하기"
        subTitle="찾는 운동이 없나요?"
      />
      <ExerciseSearchResults data={filteredData} />
    </section>
  );
}
