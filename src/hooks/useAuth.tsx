"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useFirebase } from "./useFirebase";
import type { Session } from "next-auth";

type AuthUser = Session["user"];

interface UseAuthReturnType {
  authedUser: AuthUser | null;
  sessionStatus: "loading" | "authenticated" | "unauthenticated";
  loginGoogle: () => void;
  logout: () => void;
}

export const useAuth = (): UseAuthReturnType => {
  const { data: session, status: sessionStatus } = useSession();
  const authedUser = session?.user;
  const firebase = useFirebase();

  // TODO: 로그아웃 하시겠습니까?
  const logout = () => signOut({ callbackUrl: "/login" });

  const loginGoogle = () => signIn("google", { callbackUrl: "/" });

  useEffect(() => {
    if (authedUser?.email) {
      const data = firebase.getExercises(authedUser.email);

      // TODO: 삭제
      console.log("useAuth", authedUser);
    }
  }, [authedUser]);

  return {
    authedUser,
    sessionStatus,
    loginGoogle,
    logout,
  };
};
