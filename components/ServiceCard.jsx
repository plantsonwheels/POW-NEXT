"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
	const Icon = LucideIcons[service.icon] || LucideIcons.Leaf;

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			whileHover={{ y: -8 }}
			className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
		>
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

			{/* Decorative Circle */}
			<div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full group-hover:scale-150 transition-transform duration-700" />

			{/* Content */}
			<div className="relative z-10">
				{/* Icon Container */}
				<div className="mb-6 inline-flex p-4 bg-emerald-100 rounded-2xl group-hover:bg-emerald-600 transition-colors duration-300">
					<Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
				</div>

				{/* Service Name */}
				<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
					{service.name}
				</h3>

				{/* Description */}
				<p className="text-gray-600 text-sm leading-relaxed mb-4">
					{service.description}
				</p>

				{/* Learn More Link */}
				<div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<span>Learn more</span>
					<ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
				</div>
			</div>

			{/* Bottom Border Accent */}
			<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
		</motion.div>
	);
}
