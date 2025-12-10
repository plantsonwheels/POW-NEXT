"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
	const [product, setProduct] = useState(null);
	const [relatedProducts, setRelatedProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [enquiryOpen, setEnquiryOpen] = useState(false);
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const params = useParams();
	const id = params?.id;

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!id || id === "undefined") return;
				const res = await fetch(`/api/products/${id}`);
				if (res.ok) {
					const data = await res.json();
					setProduct(data.data?.product || null);
					setRelatedProducts(data.data?.related || []);
				}
			} catch (error) {
				console.error("Error fetching product:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	if (loading) {
		return (
			<main className="min-h-screen bg-white pt-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<p className="text-gray-600">Loading...</p>
				</div>
			</main>
		);
	}

	if (!product) {
		return (
			<main className="min-h-screen bg-white pt-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<p className="text-gray-600">Product not found.</p>
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-white pt-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Back Button */}
				<Link
					href="/products"
					className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 font-semibold"
				>
					<ArrowLeft className="w-4 h-4" />
					Back to Products
				</Link>

				{/* Product Details */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
				>
					{/* Image */}
					{/* <motion.div
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						className="rounded-xl overflow-hidden bg-emerald-50 h-96 md:h-full"
					>
						<img
						src={
							(product.images && product.images[activeImageIndex]) ||
							product.image ||
							"/placeholder.svg"
						}
						alt={product.name}
						className="w-full h-full object-cover"
					/>
					</motion.div>

					{product.images && product.images.length > 1 && (
						<div className="mt-4 flex gap-3">
							{product.images.slice(0, 5).map((url, idx) => (
								<button
									key={idx}
									onClick={() => setActiveImageIndex(idx)}
									className={`relative rounded-lg overflow-hidden border ${idx === activeImageIndex ? "border-emerald-600 ring-2 ring-emerald-300" : "border-gray-200"}`}
									aria-label={`Image ${idx + 1}`}
								>
									<img src={url} alt={`thumb-${idx}`} className="h-16 w-16 object-cover" />
								</button>
							))}
						</div>
					)} */}

					{/* Image Gallery */}
					<div className="space-y-4">
						<motion.div
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							className="rounded-xl overflow-hidden bg-emerald-50 h-96 md:h-[500px]"
						>
							<img
								src={
									(product.images && product.images[activeImageIndex]) ||
									product.image ||
									"/placeholder.svg"
								}
								alt={product.name}
								className="w-full h-full object-cover"
							/>
						</motion.div>

						{product.images && product.images.length > 1 && (
							<div className="flex gap-3 flex-wrap">
								{product.images.slice(0, 5).map((url, idx) => (
									<button
										key={idx}
										onClick={() => setActiveImageIndex(idx)}
										className={`relative rounded-lg overflow-hidden border-2 transition-all ${
											idx === activeImageIndex
												? "border-emerald-600 ring-2 ring-emerald-300"
												: "border-gray-200 hover:border-emerald-400"
										}`}
										aria-label={`Image ${idx + 1}`}
									>
										<img
											src={url}
											alt={`thumb-${idx}`}
											className="h-20 w-20 object-cover"
										/>
									</button>
								))}
							</div>
						)}
					</div>

					{/* Info */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
					>
						<div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 capitalize">
							{product.type}
						</div>
						<h1 className="text-4xl font-bold text-gray-900 mb-4">
							{product.name}
						</h1>
						<p className="text-3xl font-bold text-emerald-600 mb-2">
							₹{product.price}
						</p>
						<div className="flex flex-wrap gap-2 mb-6">
							<span className="inline-flex items-center bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-emerald-100">
								Category: {product.category}
							</span>
							<span className="inline-flex items-center bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-emerald-100">
								Size: {product.size}
							</span>
							<span className="inline-flex items-center bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-emerald-100 capitalize">
								Type: {product.type}
							</span>
						</div>

						<p className="text-gray-700 text-lg mb-8">{product.description}</p>

						{/* Benefits */}
						{product.benefits && product.benefits.length > 0 && (
							<div className="mb-8">
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									Benefits
								</h3>
								<ul className="space-y-2">
									{product.benefits.map((benefit, idx) => (
										<li
											key={idx}
											className="flex items-center gap-3 text-gray-700"
										>
											<Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
											{benefit}
										</li>
									))}
								</ul>
							</div>
						)}

						{/* CTA */}
						<button
							onClick={() => setEnquiryOpen(true)}
							className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-colors"
						>
							Enquire Now
						</button>
					</motion.div>
				</motion.div>

				{/* Related Products */}
				{relatedProducts.length > 0 && (
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-8">
							Related Products
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{relatedProducts.map((p) => (
								<Link
									key={p._id}
									href={`/products/${p._id}`}
									className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
								>
									<div className="h-48 bg-emerald-50 overflow-hidden">
										<img
											src={
												(p.images && p.images[0]) ||
												p.image ||
												"/placeholder.svg"
											}
											alt={p.name}
											className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
										/>
									</div>
									<div className="p-4">
										<h3 className="font-bold text-gray-900">{p.name}</h3>
										<p className="text-emerald-600 font-semibold mt-2">
											₹{p.price}
										</p>
									</div>
								</Link>
							))}
						</div>
					</div>
				)}
			</div>

			<EnquiryForm
				isOpen={enquiryOpen}
				onClose={() => setEnquiryOpen(false)}
				productId={product._id}
				productName={product.name}
			/>
		</main>
	);
}
