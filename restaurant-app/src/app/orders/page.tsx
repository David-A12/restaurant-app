"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, UtensilsCrossed } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <Button className="flex items-center gap-2">
            <UtensilsCrossed className="h-5 w-5" />
            New Order
          </Button>
        </div>

        {/* Active Orders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((order) => (
            <Card key={order} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Order #{2024000 + order}</h3>
                  <p className="text-sm text-gray-500">Table {order}</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  In Progress
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Items</span>
                  <span className="font-medium">{order + 2}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total</span>
                  <span className="font-medium">${(order * 25).toFixed(2)}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>15 mins ago</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button className="flex-1" variant="outline">View Details</Button>
                <Button className="flex-1">Mark Ready</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
