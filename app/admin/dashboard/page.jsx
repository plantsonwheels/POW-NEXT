"use client";
import { LineChart, Package, MessageSquare, Gauge } from "lucide-react";

export default function AdminDashboardPage() {
	return (
		<div className="space-y-6">
			<h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="rounded-xl border bg-white p-6 shadow-sm">
						<div className="flex items-center gap-3 text-emerald-700 font-semibold">
							<Gauge className="w-5 h-5" /> Overview
						</div>
						<p className="text-gray-600 mt-3">
							Quick summary of admin activity.
						</p>
					</div>
					<div className="rounded-xl border bg-white p-6 shadow-sm">
						<div className="flex items-center gap-3 text-emerald-700 font-semibold">
							<Package className="w-5 h-5" /> Products
						</div>
						<p className="text-gray-600 mt-3">Manage inventory and pricing.</p>
					</div>
					<div className="rounded-xl border bg-white p-6 shadow-sm">
						<div className="flex items-center gap-3 text-emerald-700 font-semibold">
							<MessageSquare className="w-5 h-5" /> Enquiries
						</div>
						<p className="text-gray-600 mt-3">Track customer messages.</p>
					</div>
				</div>
				<div className="mt-10 rounded-xl border bg-white p-6 shadow-sm">
					<div className="flex items-center gap-3 text-emerald-700 font-semibold">
						<LineChart className="w-5 h-5" /> Activity
					</div>
					<p className="text-gray-600 mt-3">
						Analytics integration coming soon.
					</p>
			</div>
		</div>
	);
}
