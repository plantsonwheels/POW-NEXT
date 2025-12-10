"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminUploadPage() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		type: "indoor",
		benefits: "",
		images: [],
		price: "",
		category: "Plants",
		size: "Medium",
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const fileInputRef = useRef(null);
	const [uploading, setUploading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFilesSelect = async (e) => {
		const files = Array.from(e.target.files || []);
		if (!files.length) return;
		setUploading(true);
		try {
			for (const file of files) {
				if (formData.images.length >= 5) break;
				const fd = new FormData();
				fd.append("file", file);
				fd.append("folder", "products");
				const res = await fetch("/api/uploads", { method: "POST", body: fd });
				const data = await res.json();
				if (res.ok && data.success && data.url) {
					setFormData((prev) => ({ ...prev, images: [...prev.images, data.url].slice(0, 5) }));
				} else {
					setError(data.message || "Upload failed");
					break;
				}
			}
		} catch {
			setError("Upload failed");
		} finally {
			setUploading(false);
			e.target.value = "";
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccess(false);

		try {
			const payload = {
				...formData,
				benefits: formData.benefits.split(",").map((b) => b.trim()),
				price: Number.parseFloat(formData.price),
			};

			if (!formData.images || formData.images.length === 0) {
				setError("Please upload at least one image");
				setLoading(false);
				return;
			}

			const res = await fetch("/api/products", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			const data = await res.json();

			if (data.success) {
						setSuccess(true);
						setFormData({
							name: "",
							description: "",
							type: "indoor",
							benefits: "",
							images: [],
							price: "",
							category: "Plants",
							size: "Medium",
						});
				setTimeout(() => {
					router.push("/admin/products");
				}, 2000);
			} else {
				setError(data.error || "Failed to create product");
			}
		} catch (err) {
			setError("Error creating product. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="min-h-screen bg-gray-50">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Form */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white rounded-xl shadow-lg p-8"
				>
					<h1 className="text-3xl font-bold text-gray-900 mb-8">
						Upload New Product
					</h1>

					{success && (
						<div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg">
							Product created successfully! Redirecting...
						</div>
					)}

					{error && (
						<div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
							{error}
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-2">
									Product Name
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									placeholder="e.g., Snake Plant"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
								/>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-2">
									Type
								</label>
								<select
									name="type"
									value={formData.type}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
								>
									<option value="indoor">Indoor</option>
									<option value="outdoor">Outdoor</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-2">
									Price (₹)
								</label>
								<input
									type="number"
									name="price"
									value={formData.price}
									onChange={handleChange}
									required
									step="0.01"
									placeholder="299"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
								/>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-2">
									Category
								</label>
								<input
									type="text"
									name="category"
									value={formData.category}
									onChange={handleChange}
									placeholder="Plants"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-semibold text-gray-900 mb-2">
								Description
							</label>
							<textarea
								name="description"
								value={formData.description}
								onChange={handleChange}
								required
								rows="4"
								placeholder="Describe the plant..."
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 resize-none"
							/>
						</div>

						<div>
							<label className="block text-sm font-semibold text-gray-900 mb-2">
								Benefits (comma-separated)
							</label>
							<input
								type="text"
								name="benefits"
								value={formData.benefits}
								onChange={handleChange}
								placeholder="Air purification, Low maintenance, Pet-friendly"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
							/>
						</div>
						<div>
							<label className="block text-sm font-semibold text-gray-900 mb-2">
								Size
							</label>
							<select
								name="size"
								value={formData.size}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
							>
								<option value="Small">Small</option>
								<option value="Medium">Medium</option>
								<option value="Large">Large</option>
								<option value="Extra Large">Extra Large</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-semibold text-gray-900 mb-2">
						Images
					</label>
					<div className="flex items-center gap-3 mb-3">
						<button
							type="button"
							onClick={() => fileInputRef.current?.click()}
							className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700"
						>
							{uploading ? "Uploading..." : "Upload Images"}
						</button>
						<input ref={fileInputRef} type="file" accept="image/*" multiple hidden onChange={handleFilesSelect} />
						{formData?.images.length > 0 && (
							<span className="text-sm text-gray-600">{formData.images.length}/5 uploaded</span>
						)}
					</div>
					{formData.images.length > 0 && (
						<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
							{formData.images.map((url, idx) => (
								<div key={idx} className="relative">
									<img src={url} alt={`Product ${idx + 1}`} className="w-full h-32 object-cover rounded-lg border" />
								</div>
							))}
						</div>
					)}
						</div>

						<button
							type="submit"
							disabled={loading || success}
							className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
						>
							{loading && <Loader className="w-5 h-5 animate-spin" />}
							{loading
								? "Creating..."
								: success
								? "Created!"
								: "Create Product"}
						</button>
					</form>
				</motion.div>
			</div>
		</main>
	);
}
