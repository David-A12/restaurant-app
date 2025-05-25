"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Mail, Phone, Clock } from "lucide-react";

const staff = [
  {
    id: 1,
    name: "John Smith",
    role: "Manager",
    email: "john.smith@restaurant.com",
    phone: "+1 (555) 123-4567",
    shift: "Morning Shift",
    status: "active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Chef",
    email: "sarah.j@restaurant.com",
    phone: "+1 (555) 234-5678",
    shift: "Evening Shift",
    status: "active",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Waiter",
    email: "michael.b@restaurant.com",
    phone: "+1 (555) 345-6789",
    shift: "Night Shift",
    status: "off-duty",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Waitress",
    email: "emily.d@restaurant.com",
    phone: "+1 (555) 456-7890",
    shift: "Morning Shift",
    status: "active",
  }
];

export default function StaffPage() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Staff Management</h1>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Add Staff Member
          </Button>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member) => (
            <Card key={member.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${
                    member.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {member.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{member.shift}</span>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button variant="outline" className="flex-1">
                  Edit
                </Button>
                <Button variant="outline" className="flex-1">
                  Schedule
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
