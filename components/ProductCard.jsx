"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Leaf, Heart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }) {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500"
		>
			{/* Image Container */}
			<div className="relative h-72 overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50">
				<motion.img
					src={
						(product.images && product.images[0]) ||
						product.image ||
						"/placeholder.svg"
					}
					alt={product.name}
					className="w-full h-full object-cover"
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.6 }}
				/>

				{/* Overlay Gradient */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

				{/* Type Badge */}
				<div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold capitalize shadow-lg backdrop-blur-sm">
					{product.type}
				</div>

				{/* Like Button */}
				{/* <motion.button
					onClick={() => setIsLiked(!isLiked)}
					whileTap={{ scale: 0.9 }}
					className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-colors"
				>
					<Heart
						className={`w-5 h-5 transition-colors ${
							isLiked ? "fill-red-500 text-red-500" : "text-gray-400"
						}`}
					/>
				</motion.button> */}

				{/* Quick View on Hover */}
				<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
					<Link
						href={`/products/${product._id}`}
						className="w-full bg-white/95 backdrop-blur-sm text-emerald-700 py-2.5 rounded-lg font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg"
					>
						<Leaf className="w-4 h-4" />
						Quick View
					</Link>
				</div>
			</div>

			{/* Content */}
			<div className="p-6">
				{/* Plant Name */}
				<h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors">
					{product.name}
				</h3>

				{/* Description */}
				<p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
					{product.description}
				</p>

				{/* Benefits */}
				{product.benefits && product.benefits.length > 0 && (
					<div className="mb-4">
						<div className="flex flex-wrap gap-2">
							{product.benefits.slice(0, 1).map((benefit, idx) => (
								<span
									key={idx}
									className="inline-flex items-center text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full font-medium border border-emerald-100"
								>
									{benefit}
								</span>
							))}
							{product.benefits.length > 1 && (
								<span className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">
									+{product.benefits.length - 1} more
								</span>
							)}
						</div>
					</div>
				)}

				{/* Divider */}
				<div className="border-t border-gray-100 my-4" />

				{/* Price & CTA */}
				<div className="flex items-center justify-between">
					<div>
						<div className="text-xs text-gray-500 mb-1">Starting from</div>
						<div className="text-3xl font-bold text-emerald-600">
							₹{product.price}
						</div>
					</div>
					<Link
						href={`/products/${product._id}`}
						className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-600/50 group/btn"
					>
						<ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
						<span className="font-semibold">View</span>
					</Link>
				</div>
			</div>

			{/* Decorative Element */}
			<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
		</motion.div>
	);
}
