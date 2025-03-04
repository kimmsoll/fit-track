import Link from "next/link";
import PlusIcon from "@/components/icons/PlusIcon";
import { RouteType } from "@/constants/routes";

interface Props {
  route: RouteType;
  title: string;
  subTitle?: string;
}

export default function AddLink(props: Props) {
  const { route, title, subTitle } = props;

  return (
    <Link
      href={route}
      className={`w-4/5 max-w-md flex flex-col items-center bg-customGray-100 rounded-xl ${subTitle ? "pt-2 pb-5" : "p-5"}`}
    >
      {subTitle && <span className="text-sm">{subTitle}</span>}
      <div className="flex gap-1 items-center text-lg">
        <PlusIcon width={18} />
        <span className="font-bold">{title}</span>
      </div>
    </Link>
  );
}
