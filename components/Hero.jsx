"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero({ onEnquireClick }) {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image with Overlay */}
			<motion.div
				className="absolute inset-0 z-0"
				initial={{ scale: 1.1 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
			>
				<div
					className="max-w-screen max-h-screen w-full h-full bg-contain bg-center"
					style={{
						backgroundImage: `url('/green-scooter-plants-delivery-service.jpg')`,
						objectFit: "contain",
						objectPosition: "center",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				>
					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-linear-to-br from-emerald-900/80 via-black/60 to-emerald-800/70"></div>
				</div>
			</motion.div>

			{/* Floating Particles Effect */}
			<div className="absolute inset-0 z-10">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
						initial={{
							x: Math.random() * window.innerWidth,
							y: Math.random() * window.innerHeight,
						}}
						animate={{
							y: [null, Math.random() * -100 - 50],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: Math.random() * 3 + 2,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="space-y-6"
				>
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-100 px-4 py-2 rounded-full text-sm font-medium mb-4"
					>
						<Sparkles className="w-4 h-4" />
						<span>India's Mobile Green Revolution</span>
					</motion.div>

					{/* Main Heading */}
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
						<span className="block">PLANTS ON</span>
						<span className="block bg-linear-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
							WHEELS
						</span>
					</h1>

					{/* Subheading */}
					<p className="text-2xl md:text-3xl text-emerald-100 font-medium mb-4">
						Bringing Nature to Your Doorstep
					</p>

					{/* Description */}
					<p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
						Transform your home, office, or balcony into a green paradise. We
						deliver fresh, curated plants—right at your doorstep with our
						signature green scooters.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
						<motion.button
							onClick={onEnquireClick}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="group relative bg-emerald-600 text-white px-10 py-4 rounded-xl font-semibold shadow-2xl shadow-emerald-600/50 hover:shadow-emerald-500/60 transition-all duration-300 overflow-hidden"
						>
							<span className="relative z-10 flex items-center gap-2">
								Enquire Now
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</span>
							<motion.div
								className="absolute inset-0 bg-emerald-700"
								initial={{ x: "-100%" }}
								whileHover={{ x: 0 }}
								transition={{ duration: 0.3 }}
							/>
						</motion.button>

						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link
								href="/products"
								className="inline-block bg-white/95 backdrop-blur-sm text-emerald-700 px-10 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 shadow-xl"
							>
								Shop Plants
							</Link>
						</motion.div>
					</div>

					{/* Trust Indicators */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
						className="flex flex-wrap justify-center gap-8 pt-12 text-emerald-100"
					>
						<div className="text-center">
							<div className="text-3xl font-bold text-white">500+</div>
							<div className="text-sm opacity-80">Happy Customers</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-white">1000+</div>
							<div className="text-sm opacity-80">Plants Delivered</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-white">50+</div>
							<div className="text-sm opacity-80">Plant Varieties</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
				>
					<div className="flex flex-col items-center gap-2">
						<div className="text-white/60 text-sm font-medium">
							Scroll to explore
						</div>
						<div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
							<motion.div
								className="w-1.5 h-1.5 bg-white rounded-full"
								animate={{ y: [0, 12, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
