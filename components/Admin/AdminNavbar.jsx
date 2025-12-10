"use client";
import Link from "next/link";
import { Leaf, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
	const router = useRouter();
	const onLogout = () => {
		document.cookie = "admin_session=; Max-Age=0; path=/";
		router.push("/admin/login");
	};
	return (
		<nav className="fixed top-0 inset-x-0 z-40 h-16 bg-emerald-800 text-white shadow-lg">
			<div className="h-full px-10 flex items-center justify-between">
				<Link href="/admin/dashboard" className="flex items-center gap-2">
					<div className="p-2 bg-emerald-600 rounded-xl">
						<Leaf className="w-5 h-5 text-white" />
					</div>
					<span className="font-bold">Plants On Wheels</span>
				</Link>
				<div className="flex items-center gap-4">
					<button
						onClick={onLogout}
						className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 px-3 py-2 rounded-lg"
					>
						<LogOut className="w-4 h-4" /> Logout
					</button>
				</div>
			</div>
		</nav>
	);
}
