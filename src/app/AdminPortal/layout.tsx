import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "../components/AppSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="w-72 bg-white border-r border-gray-200 shadow-lg">
        <AppSidebar />
      </div>

      <div className="ml-4 flex-1 flex flex-col overflow-hidden bg-gray-50">
        <main className="flex-1 overflow-auto p-6 bg-gray-50">{children}</main>
      </div>
    </SidebarProvider>
  );
}
