"use client";

import { useState } from "react";
import { Sidebar } from "@/components/navigation/sidebar";
import { Header } from "@/components/navigation/header";

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header stays at the very top */}
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex h-[calc(100vh-5rem)]">
        {/* Static Sidebar for desktop - now starts below header */}
        <div className="hidden md:block fixed left-0 w-64" style={{ top: '5rem', height: 'calc(100vh - 5rem)' }}>
          <Sidebar />
        </div>

        {/* Mobile sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden" style={{ top: '5rem' }}>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
            <div className="fixed inset-y-0 left-0 flex w-64 transform bg-white">
              <Sidebar />
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 md:pl-64">
          <main className="min-h-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
