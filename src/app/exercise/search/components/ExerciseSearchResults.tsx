import { Exercise } from "@/lib/FirebaseService";

interface Props {
  data: Exercise[];
}

export default function ExerciseSearchResults({ data }: Props) {
  return (
    <ul className="w-4/5 max-w-md flex flex-col gap-2 pb-20">
      {data.map((v) => (
        <li key={v.id} className="border rounded-xl p-2 flex gap-4">
          <div className="bg-customGreen-400 w-20 h-20 flex items-center justify-center text-center rounded-full p-2">
            <span className="block break-all font-bold">{v.area}</span>
          </div>
          <div className="flex flex-col justify-center">
            <span>{v.nameEn}</span>
            <span>{v.nameKo}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
