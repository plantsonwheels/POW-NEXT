"use client";
import Link from "next/link";
import { LayoutDashboard, Package, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";

const Item = ({ href, label, Icon, active }) => (
	<Link
		href={href}
		className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
			active
				? "bg-emerald-100 text-emerald-800 font-semibold"
				: "text-gray-700 hover:bg-gray-100"
		}`}
	>
		<Icon className="w-5 h-5" />
		{label}
	</Link>
);

export default function AdminSidebar() {
	const pathname = usePathname();
	return (
		<aside className="w-64 bg-white h-[calc(100vh-4rem)] sticky top-16 p-4 pl-10">
			<div className="space-y-2">
				<Item
					href="/admin/dashboard"
					label="Dashboard"
					Icon={LayoutDashboard}
					active={pathname === "/admin/dashboard"}
				/>
				<Item
					href="/admin/products"
					label="Products"
					Icon={Package}
					active={pathname?.startsWith("/admin/products")}
				/>
				<Item
					href="/admin/enquiry"
					label="Enquiries"
					Icon={MessageSquare}
					active={pathname?.startsWith("/admin/enquiry")}
				/>
			</div>
		</aside>
	);
}
