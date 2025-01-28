import CloseIcon from "@/components/icons/CloseIcon";
import { useSidebar } from "@/context/SidebarContext";
import { useAuth } from "@/hooks/useAuth";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { logout } = useAuth();

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-customGray-900 opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`fixed flex flex-col gap-4 top-0 left-0 h-full w-64 bg-white p-5 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg`}
      >
        <button
          className="text-black"
          onClick={toggleSidebar}
          aria-label="Close Menu"
        >
          <CloseIcon width={24} />
        </button>
        <nav>
          <ul className="flex flex-col gap-2 mt-5">
            <li>
              <a
                href="/"
                className="block text-black text-lg w-full p-3 transition-all hover:border-b hover:border-black"
              >
                대시보드
              </a>
            </li>
            <li>
              <a
                href="/analytics"
                className="block text-black text-lg w-full p-3 transition-all hover:border-b hover:border-black"
              >
                분석
              </a>
            </li>
            <li>
              <button className="text-black text-lg p-3" onClick={logout}>
                로그아웃
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
