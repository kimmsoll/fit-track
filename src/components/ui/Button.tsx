import { ReactNode } from "react";

interface Props {
  size: "sm" | "lg";
  color: "gray" | "black";
  onClick: () => void;
  title: ReactNode;
  subtitle?: string;
}

export const Button = ({ size, color, onClick, title, subtitle }: Props) => {
  const sizeClass = size === "sm" ? "py-2 text-md" : "py-7 text-lg";
  const colorClass = color === "gray" ? "bg-gray-200" : "bg-gray-900";

  return (
    <button
      onClick={onClick}
      className={`${sizeClass} ${colorClass} w-full rounded-lg ${color === "gray" ? "text-customGray-900" : "text-white"}`}
    >
      {subtitle && <div className="text-sm">{subtitle}</div>}
      {title}
    </button>
  );
};
