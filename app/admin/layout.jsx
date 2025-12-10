import AdminNavbar from "@/components/Admin/AdminNavbar";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import LenisAdminScroll from "@/components/Admin/LenisAdminScroll";

export default function AdminLayout({ children }) {
	return (
		<div className="min-h-screen bg-gray-50">
			<AdminNavbar />
			<div className="pt-16 flex">
				<AdminSidebar />
				<LenisAdminScroll>
					<div className="p-4 pr-10">{children}</div>
				</LenisAdminScroll>
			</div>
		</div>
	);
}
