"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trash2, Plus } from "lucide-react";
import Link from "next/link";

export default function AdminProductsPage() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [deleting, setDeleting] = useState(null);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const res = await fetch("/api/products");
			if (res.ok) {
				const data = await res.json();
				setProducts(data.data);
			}
		} catch (error) {
			console.error("Error fetching products:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (id) => {
		if (!window.confirm("Are you sure you want to delete this product?"))
			return;

		setDeleting(id);
		try {
			const res = await fetch("/api/products", {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ id }),
			});

			if (res.ok) {
				setProducts(products.filter((p) => p._id !== id));
			}
		} catch (error) {
			console.error("Error deleting product:", error);
		} finally {
			setDeleting(null);
		}
	};

	return (
		<main className="h-fit bg-gray-50">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-4xl font-bold text-gray-900">
					Products Management
				</h1>
				<Link
					href="/admin/upload"
					className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
				>
					<Plus className="w-5 h-5" />
					Add Product
				</Link>
			</div>

			{/* Products Table */}
			{loading ? (
				<div className="text-center py-12">
					<p className="text-gray-600">Loading products...</p>
				</div>
			) : products.length > 0 ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="grid gap-6"
				>
					{products.map((product) => (
						<motion.div
							key={product._id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="bg-white rounded-lg shadow p-6 flex items-center justify-between"
						>
							<div className="flex items-center gap-6 flex-1">
								<img
									src={product.images[0] || "/placeholder.svg"}
									alt={product.name}
									className="w-24 h-24 object-cover rounded-lg"
								/>
								<div>
									<h3 className="text-lg font-bold text-gray-900">
										{product.name}
									</h3>
									<p className="text-gray-600 text-sm mb-2">
										{product.description}
									</p>
									<div className="flex gap-4 text-sm">
										<span className="text-emerald-600 font-semibold">
											₹{product.price}
										</span>
										<span className="capitalize text-gray-500">
											{product.type}
										</span>
									</div>
								</div>
							</div>
							<div className="flex gap-2">
								<button
									onClick={() => handleDelete(product._id)}
									disabled={deleting === product._id}
									className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
								>
									<Trash2 className="w-5 h-5" />
								</button>
							</div>
						</motion.div>
					))}
				</motion.div>
			) : (
				<div className="text-center py-12 bg-white rounded-lg">
					<p className="text-gray-600 mb-4">No products found</p>
					<Link
						href="/admin/upload"
						className="text-emerald-600 hover:text-emerald-700 font-semibold"
					>
						Add your first product
					</Link>
				</div>
			)}
		</main>
	);
}
