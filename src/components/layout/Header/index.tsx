import HamburgerMenuIcon from "@/components/icons/HamburgerMenuIcon";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { authedUser, sessionStatus } = useAuth();

  return (
    <header className="w-full flex place-content-between bg-customGray-100 p-2 border-b border-customGray-300 fixed">
      <button className="text-customGray-900">
        <HamburgerMenuIcon />
      </button>
      <img
        src={authedUser?.image ?? ""}
        alt="Profile Picture"
        width={24}
        height={24}
        className="rounded-full border border-customGray-900"
      />
    </header>
  );
}
