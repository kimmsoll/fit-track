"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";
import SessionContext from "@/context/SessionContext";
import { SidebarProvider } from "@/context/SidebarContext";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SessionContext>
          <QueryClientProvider client={queryClient}>
            <SidebarProvider>{children}</SidebarProvider>
          </QueryClientProvider>
        </SessionContext>
      </body>
    </html>
  );
}
