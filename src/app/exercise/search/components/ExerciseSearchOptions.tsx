"use client";

import { ChangeEvent, useEffect, useState } from "react";
import uniqBy from "lodash.uniqby";
import { Exercise } from "@/lib/FirebaseService";

interface Props {
  data: Exercise[];
  setFilteredData: (data: Exercise[]) => void;
  areaOptions: string[];
  machineOptions: string[];
}

export default function ExerciseSearchOptions(props: Props) {
  const { data, setFilteredData, areaOptions, machineOptions } = props;

  const [selectedAreaOptions, setSelectedAreaOptions] = useState<string[]>([]);
  const [selectedMachineOptions, setSelectedMachineOptions] = useState<
    string[]
  >([]);

  const handleChangeAreaOptions = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedAreaOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  const handleChangeMachineOptions = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedMachineOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  useEffect(() => {
    if (data.length && setFilteredData) {
      setFilteredData(uniqBy(data, "id"));
    }
  }, [data, setFilteredData]);

  useEffect(() => {
    if (areaOptions.length && !selectedAreaOptions.length) {
      setSelectedAreaOptions([...areaOptions]);
    }
    if (machineOptions.length && !selectedMachineOptions.length) {
      setSelectedMachineOptions([...machineOptions]);
    }
  }, [areaOptions, machineOptions]);

  useEffect(() => {
    if (selectedAreaOptions || selectedMachineOptions) {
      let filtered: Exercise[] = [];
      if (selectedAreaOptions) {
        for (let option of selectedAreaOptions) {
          filtered.push(...data.filter((v) => v.area === option));
        }
      }
      if (selectedMachineOptions) {
        for (let option of selectedMachineOptions) {
          filtered.push(...data.filter((v) => v.machine === option));
        }
      }

      setFilteredData(uniqBy(filtered, "id"));
    }
  }, [selectedAreaOptions, selectedMachineOptions]);

  return (
    <div className="w-4/5 max-w-md flex flex-col pt-20 bg-white gap-4">
      <div className="w-full flex items-center gap-2">
        <div className="shrink-0 w-14 h-14 flex items-center justify-center text-lg rounded-full font-semibold bg-customGray-300 text-gray-700">
          부위
        </div>
        <ul className="flex flex-wrap">
          {areaOptions.map((option) => {
            return (
              <li key={option} className="flex gap-1 mr-3">
                <input
                  id={option}
                  type="checkbox"
                  value={option}
                  onChange={handleChangeAreaOptions}
                  checked={selectedAreaOptions.includes(option)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor={option} className="cursor-pointer" />
                {option}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full flex items-center gap-2">
        <div className="shrink-0 w-14 h-14 flex items-center justify-center text-lg rounded-full font-semibold bg-customGray-300 text-gray-700">
          기구
        </div>
        <ul className="flex flex-wrap">
          {machineOptions.map((option) => {
            return (
              <li key={option} className="flex gap-1 mr-3">
                <input
                  id={option}
                  type="checkbox"
                  value={option}
                  onChange={handleChangeMachineOptions}
                  checked={selectedMachineOptions.includes(option)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor={option} className="cursor-pointer" />
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
