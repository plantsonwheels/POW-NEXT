"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WhatsAppButton() {
	const [isHovered, setIsHovered] = useState(false);
	const whatsappNumber = "919354001873";
	const message = "Hi, I am interested in Plants on Wheels services!";

	return (
		<motion.a
			href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
				message
			)}`}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 z-50 group"
			title="Chat with us on WhatsApp"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ delay: 1, type: "spring", stiffness: 200 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			{/* Pulsing Ring */}
			<motion.div
				className="absolute inset-0 bg-green-500 rounded-full"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.7, 0, 0.7],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Main Button */}
			<div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300">
				<MessageCircle className="w-7 h-7" />
			</div>

			{/* Tooltip */}
			<motion.div
				initial={{ opacity: 0, x: 10 }}
				animate={{
					opacity: isHovered ? 1 : 0,
					x: isHovered ? 0 : 10,
				}}
				className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-xl pointer-events-none"
			>
				Chat with us!
				<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900" />
			</motion.div>
		</motion.a>
	);
}
