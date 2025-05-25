"use client";

import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 h-20 border-b bg-white shadow-sm">
      <div className="flex h-full items-center px-4 sm:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-4"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
            <span className="text-white text-xl font-bold">R</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-semibold text-gray-900">Restaurant App</h1>
            <p className="text-sm text-gray-500">Management System</p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                  3
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between border-b px-4 py-2">
                <span className="text-sm font-medium">Notifications</span>
                <Button variant="ghost" size="sm" className="text-xs">
                  Mark all as read
                </Button>
              </div>
              <DropdownMenuItem className="p-3">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">New order received</span>
                  <span className="text-xs text-gray-500">Table 5 - 3 items</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Order ready for service</span>
                  <span className="text-xs text-gray-500">Table 3 - Order #2024001</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Low inventory alert</span>
                  <span className="text-xs text-gray-500">3 items below threshold</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile */}
          <div className="hidden md:flex items-center gap-3 pl-3 border-l">
            <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">JS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
