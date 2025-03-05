"use client";

import ArrowBackIcon from "@/components/icons/ArrowBackIcon";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

export default function FormHeader({ title }: Props) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <header className="w-full flex items-center justify-center bg-white p-2 border-b border-customGray-300 fixed">
      <button
        type="button"
        className="absolute left-2 text-customGray-900"
        onClick={handleGoBack}
        aria-label="Router Back"
      >
        <ArrowBackIcon />
      </button>
      <h1 className="font-bold text-center">{title}</h1>
    </header>
  );
}
