"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Products", href: "/products" },
		{ label: "About", href: "/about" },
		{ label: "Contact", href: "/contact" },
	];

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-500 ${
				isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : ""
			}`}
			// bg-white/10 backdrop-blur-sm
		>
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 group">
						<div className="p-2 bg-emerald-600 rounded-xl group-hover:bg-emerald-700 transition-colors">
							<Leaf className="w-5 h-5 text-white" />
						</div>
						<span
							className={`font-bold text-lg transition-colors ${
								isScrolled ? "text-emerald-600" : "text-white"
							}`}
						>
							Plants on Wheels
						</span>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`font-medium transition-colors relative group ${
									isScrolled
										? "text-gray-700 hover:text-emerald-600"
										: "text-white/90 hover:text-white"
								}`}
							>
								{item.label}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
							</Link>
						))}
						<Link
							href="/enquiry"
							className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-600/50 hover:scale-105"
						>
							Enquire Now
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className={`md:hidden p-2 rounded-lg transition-colors ${
							isScrolled
								? "text-gray-700 hover:bg-gray-100"
								: "text-white hover:bg-white/10"
						}`}
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="md:hidden overflow-hidden"
						>
							<div className="py-4 space-y-2 bg-white rounded-b-2xl shadow-xl mt-2">
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg mx-2 transition-colors font-medium"
										onClick={() => setIsOpen(false)}
									>
										{item.label}
									</Link>
								))}
								<div className="px-2 pt-2">
									<Link
										href="/enquiry"
										className="block text-center px-4 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-semibold shadow-lg"
										onClick={() => setIsOpen(false)}
									>
										Enquire Now
									</Link>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
}
