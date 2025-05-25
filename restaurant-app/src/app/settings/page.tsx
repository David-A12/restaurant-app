"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Globe, 
  Shield, 
  CreditCard,
  Printer,
  Database
} from "lucide-react";

const settingSections = [
  {
    title: "General Settings",
    icon: SettingsIcon,
    description: "Configure basic restaurant settings and preferences",
    items: [
      { name: "Restaurant Information", status: "Configured" },
      { name: "Operating Hours", status: "Configured" },
      { name: "Table Layout", status: "Needs Setup" },
    ]
  },
  {
    title: "Notifications",
    icon: Bell,
    description: "Manage alerts and notification preferences",
    items: [
      { name: "Order Notifications", status: "Enabled" },
      { name: "Staff Alerts", status: "Enabled" },
      { name: "Customer Notifications", status: "Disabled" },
    ]
  },
  {
    title: "Payment Settings",
    icon: CreditCard,
    description: "Configure payment methods and processing",
    items: [
      { name: "Payment Methods", status: "Configured" },
      { name: "Tax Rates", status: "Needs Review" },
      { name: "Receipt Settings", status: "Configured" },
    ]
  },
  {
    title: "System Settings",
    icon: Database,
    description: "Manage system configuration and backups",
    items: [
      { name: "Data Backup", status: "Enabled" },
      { name: "System Updates", status: "Available" },
      { name: "Performance", status: "Optimized" },
    ]
  },
];

export default function SettingsPage() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <Button className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Save Changes
          </Button>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {settingSections.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                    
                    <div className="mt-4 space-y-3">
                      {section.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">{item.name}</span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full
                            ${item.status === 'Configured' || item.status === 'Enabled' 
                              ? 'bg-green-100 text-green-800'
                              : item.status === 'Needs Setup' || item.status === 'Needs Review'
                              ? 'bg-yellow-100 text-yellow-800'
                              : item.status === 'Available'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full mt-4">
                      Configure
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Settings */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Additional Settings</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-gray-100">
                    <Printer className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Receipt Printer</h4>
                    <p className="text-sm text-gray-500">Configure receipt printer settings</p>
                  </div>
                </div>
                <Button variant="outline">Configure</Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-gray-100">
                    <Globe className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Language & Region</h4>
                    <p className="text-sm text-gray-500">Set language and regional preferences</p>
                  </div>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
