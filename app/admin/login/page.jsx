"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Mail, Lock } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

export default function AdminLoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			const res = await fetch("/api/admin/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "same-origin",
				body: JSON.stringify({ email, password }),
			});
			const data = await res.json();
			if (!res.ok || !data.success) {
				const msg = data.error || "Invalid credentials";
				setError(msg);
				toast.error(msg);
			} else {
				toast.success("Logged in successfully");
				window.location.assign("/admin/dashboard");
			}
		} catch {
			setError("Something went wrong. Try again.");
			toast.error("Something went wrong. Try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="h-full bg-gradient-to-br from-emerald-700 via-emerald-500 to-green-300 flex items-center justify-center">
			<Toaster position="top-center" />
			<div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl w-full max-w-md p-8">
				<div className="flex items-center gap-3 mb-6">
					<div className="p-2 bg-emerald-600 rounded-xl">
						<Shield className="w-5 h-5 text-white" />
					</div>
					<h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
				</div>
				{error && <div className="mb-4 text-red-600 font-medium">{error}</div>}
				<form onSubmit={onSubmit} className="space-y-4">
					<div className="relative">
						<Mail className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
						/>
					</div>
					<div className="relative">
						<Lock className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
						<input
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
						/>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="w-full bg-emerald-600 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
					>
						{loading ? "Signing in..." : "Sign In"}
					</button>
				</form>
			</div>
		</main>
	);
}
