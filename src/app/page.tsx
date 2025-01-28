"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/layout/Header";

export default function Home() {
  const { authedUser, sessionStatus, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStatus === "loading") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      if (!authedUser) {
        redirect("/login");
      }
    }
  }, [authedUser, sessionStatus]);

  if (isLoading) {
    // TODO: Loading UI
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <section className="pt-10">
        <h1 className="text-2xl font-bold mb-4">
          안녕하세요, {authedUser?.name}!
        </h1>
        <p>Email: {authedUser?.email}</p>
        <button
          onClick={logout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          로그아웃
        </button>
      </section>
    </div>
  );
}
