import Link from "next/link";

export default function RecordsAddButton() {
  return (
    <div className="w-96 flex flex-col items-center py-4 bg-customGray-100 rounded-lg">
      <h2 className="font-bold">운동 기록 추가</h2>
      <p>기록하지 않은 운동이 있나요?</p>
      <Link
        href="/records/add"
        className="w-3/5 bg-customGray-900 text-white py-3 mt-4 rounded-full text-center"
      >
        추가하기
      </Link>
    </div>
  );
}
