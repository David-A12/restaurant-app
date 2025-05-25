"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Coffee, Pizza, Salad } from "lucide-react";

const categories = [
  { name: "Hot Drinks", icon: Coffee, items: 12 },
  { name: "Main Course", icon: Pizza, items: 18 },
  { name: "Salads", icon: Salad, items: 8 },
];

const menuItems = [
  {
    name: "Classic Margherita",
    category: "Main Course",
    price: 14.99,
    description: "Fresh tomatoes, mozzarella, basil, olive oil",
    status: "available",
  },
  {
    name: "Cappuccino",
    category: "Hot Drinks",
    price: 4.99,
    description: "Espresso with steamed milk foam",
    status: "available",
  },
  {
    name: "Caesar Salad",
    category: "Salads",
    price: 11.99,
    description: "Romaine lettuce, croutons, parmesan cheese",
    status: "available",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Menu</h1>
          <Button className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add Item
          </Button>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.name} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.items} items</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Menu Items</h2>
          </div>
          <div className="p-6">
            <div className="divide-y divide-gray-200">
              {menuItems.map((item, index) => (
                <div key={index} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                      <span className="text-sm text-gray-600 mt-2 block">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-semibold">${item.price}</span>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
