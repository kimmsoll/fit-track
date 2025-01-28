"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  const { authedUser, sessionStatus } = useAuth();
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
      <Sidebar />
      <section className="pt-10 bg-customGray-100">
        <h1 className="text-2xl font-bold text-black p-5">
          {authedUser?.name}님의 대시보드
        </h1>
      </section>
    </div>
  );
}
