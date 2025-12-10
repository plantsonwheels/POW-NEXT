"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Package, MessageSquare } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <div className="flex items-center gap-3 text-emerald-700 font-semibold">
          <LineChart className="w-5 h-5" /> Activity
        </div>
        <p className="text-gray-600 mt-3">Analytics coming soon.</p>
      </Card>
      <Card className="p-6">
        <div className="flex items-center gap-3 text-emerald-700 font-semibold">
          <Package className="w-5 h-5" /> Products
        </div>
        <p className="text-gray-600 mt-3">Manage inventory and pricing.</p>
      </Card>
      <Card className="p-6">
        <div className="flex items-center gap-3 text-emerald-700 font-semibold">
          <MessageSquare className="w-5 h-5" /> Enquiries
        </div>
        <p className="text-gray-600 mt-3">Track customer messages.</p>
      </Card>
    </div>
  );
}