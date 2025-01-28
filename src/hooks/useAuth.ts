import { useSession, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status: sessionStatus } = useSession();

  const authedUser = session?.user;

  const logout = () => signOut({ callbackUrl: "/login" });

  const loginGoogle = () => signIn("google", { callbackUrl: "/" });

  return {
    authedUser,
    sessionStatus,
    loginGoogle,
    logout,
  };
};
