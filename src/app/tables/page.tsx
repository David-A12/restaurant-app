"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UtensilsCrossed, Clock } from "lucide-react";

const tables = [
  { id: 1, seats: 4, status: "occupied", orderCount: 2, timeElapsed: "45 mins" },
  { id: 2, seats: 2, status: "available", orderCount: 0, timeElapsed: null },
  { id: 3, seats: 6, status: "occupied", orderCount: 1, timeElapsed: "15 mins" },
  { id: 4, seats: 4, status: "reserved", orderCount: 0, timeElapsed: null },
  { id: 5, seats: 8, status: "available", orderCount: 0, timeElapsed: null },
  { id: 6, seats: 4, status: "occupied", orderCount: 3, timeElapsed: "1.5 hrs" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "occupied":
      return "bg-blue-100 text-blue-800";
    case "available":
      return "bg-green-100 text-green-800";
    case "reserved":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function TablesPage() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tables</h1>
          <Button className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Add Table
          </Button>
        </div>

        {/* Tables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tables.map((table) => (
            <Card key={table.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Table {table.id}</h3>
                  <p className="text-sm text-gray-500">{table.seats} seats</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(table.status)}`}>
                  {table.status}
                </span>
              </div>

              {table.status === "occupied" && (
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Active Orders</span>
                    <span className="font-medium">{table.orderCount}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Occupied for {table.timeElapsed}</span>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button 
                  className="flex-1" 
                  variant={table.status === "occupied" ? "default" : "outline"}
                  disabled={table.status === "reserved"}
                >
                  {table.status === "occupied" ? (
                    <>
                      <UtensilsCrossed className="h-4 w-4 mr-2" />
                      View Orders
                    </>
                  ) : (
                    "Assign Table"
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
