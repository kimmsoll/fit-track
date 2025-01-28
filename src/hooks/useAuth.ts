import { useSession, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status: sessionStatus } = useSession();

  const authedUser = session?.user;

  // TODO: 로그아웃 하시겠습니까?
  const logout = () => signOut({ callbackUrl: "/login" });

  const loginGoogle = () => signIn("google", { callbackUrl: "/" });

  return {
    authedUser,
    sessionStatus,
    loginGoogle,
    logout,
  };
};
