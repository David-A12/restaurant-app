"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, TrendingDown, Clock, Receipt, CreditCard } from "lucide-react";

const transactions = [
  {
    id: "TRX-001",
    amount: 156.50,
    type: "payment",
    method: "credit_card",
    orderId: "ORD-2024001",
    timestamp: "2024-01-24 14:30",
    status: "completed"
  },
  {
    id: "TRX-002",
    amount: 89.99,
    type: "payment",
    method: "cash",
    orderId: "ORD-2024002",
    timestamp: "2024-01-24 15:15",
    status: "completed"
  },
  {
    id: "TRX-003",
    amount: 25.00,
    type: "refund",
    method: "credit_card",
    orderId: "ORD-2024003",
    timestamp: "2024-01-24 16:00",
    status: "completed"
  }
];

export default function CashRegisterPage() {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Cash Register</h1>
          <Button className="flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            New Transaction
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">$2,854.50</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>8% increase from yesterday</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Card Payments</p>
                <p className="text-2xl font-semibold text-gray-900">$1,967.80</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-600">
              <span>69% of total revenue</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cash Payments</p>
                <p className="text-2xl font-semibold text-gray-900">$886.70</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-600">
              <span>31% of total revenue</span>
            </div>
          </Card>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
          </div>
          <div className="p-6">
            <div className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{transaction.id}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize
                          ${transaction.type === 'payment' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'}`}
                        >
                          {transaction.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Order {transaction.orderId}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{transaction.timestamp}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className={`text-lg font-semibold 
                          ${transaction.type === 'payment' ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {transaction.type === 'payment' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </span>
                        <p className="text-sm text-gray-500 capitalize">{transaction.method.replace('_', ' ')}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
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
