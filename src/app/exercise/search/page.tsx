import FormHeader from "@/components/layout/Header/FormHeader";
import { getServerSession } from "next-auth";
import ExerciseSearchSection from "./components/ExerciseSearchSection";

export default async function ExerciseSearch() {
  const session = await getServerSession();
  const userId = session?.user?.email ?? "";

  return (
    <form className="flex flex-col items-center min-h-screen bg-white gap-4">
      <FormHeader title="운동 종류 선택" />
      <ExerciseSearchSection userId={userId} />
    </form>
  );
}
