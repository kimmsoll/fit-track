"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import DashboardSection from "./dashboard/components/DashboardSection";

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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Sidebar />
      <DashboardSection userName={authedUser?.name ?? ""} />
    </div>
  );
}
