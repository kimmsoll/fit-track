import MyCalendar from "./Calendar";
import RecordsAddButton from "./RecordsAddButton";

interface Props {
  userName: string;
}

export default function DashboardSection(props: Props) {
  const { userName } = props;

  return (
    <section className="h-full pt-10">
      <h1 className="text-2xl font-bold text-black p-5">
        {userName}님의 대시보드
      </h1>
      <div className="h-full flex flex-col items-center justify-center">
        <MyCalendar />
        <RecordsAddButton />
      </div>
    </section>
  );
}
