"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Award, Users, Clock } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import EnquiryForm from "@/components/EnquiryForm";

export default function Home() {
	const [services, setServices] = useState([]);
	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [enquiryOpen, setEnquiryOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [servicesRes, productsRes] = await Promise.all([
					fetch("/api/services"),
					fetch("/api/products?type=all"),
				]);

				if (servicesRes.ok) {
					const servicesData = await servicesRes.json();
					setServices(servicesData.data);
				}

				if (productsRes.ok) {
					const productsData = await productsRes.json();
					setFeaturedProducts(productsData.data.slice(0, 4));
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<main className="overflow-hidden bg-white">
			{/* Hero Section */}
			<Hero onEnquireClick={() => setEnquiryOpen(true)} />

			{/* About Section */}
			<section className="py-20 bg-linear-to-b from-white to-emerald-50/30">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<span className="inline-block text-emerald-600 font-semibold mb-3 text-sm tracking-wider uppercase">
							About Us
						</span>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							What is Plants on Wheels?
						</h2>
						<div className="w-24 h-1.5 bg-linear-to-r from-emerald-600 to-green-500 mx-auto mb-8 rounded-full"></div>
						<p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
							A unique mobile green initiative that delivers curated, healthy,
							and vibrant plants directly to your doorstep. Our signature green
							scooters bring nature closer to homes, offices, balconies, and
							terraces.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative bg-linear-to-br from-emerald-600 to-green-600 rounded-3xl p-10 md:p-12 overflow-hidden shadow-2xl"
					>
						{/* Decorative Elements */}
						<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
						<div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />

						<div className="relative z-10">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
									<Leaf className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-3xl font-bold text-white">Our Mission</h3>
							</div>

							<p className="text-white text-xl md:text-2xl font-bold mb-6 leading-relaxed">
								"Har Space Ko Banaye Green, Hassle-Free, and Clean."
							</p>

							<p className="text-emerald-50 text-lg leading-relaxed">
								We cultivate greener spaces, simplify plant care, and make every
								Indian home and workplace bloom. We're not just delivering
								plants—we're driving a movement for a cleaner, healthier, and
								more mindful lifestyle.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Why We're Needed Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<span className="inline-block text-emerald-600 font-semibold mb-3 text-sm tracking-wider uppercase">
							Our Impact
						</span>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Why We're Needed Today
						</h2>
						<div className="w-24 h-1.5 bg-linear-to-r from-emerald-600 to-green-500 mx-auto rounded-full"></div>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								icon: Leaf,
								title: "Environmental Impact",
								description:
									"More plants mean cleaner air, healthier surroundings, and a greener future for generations.",
								color: "emerald",
							},
							{
								icon: Users,
								title: "Mindful Living",
								description:
									"Reduces stress, boosts mood, and enhances overall well-being through nature connection.",
								color: "green",
							},
							{
								icon: Award,
								title: "Community Building",
								description:
									"Promotes greener neighborhoods and cultivates shared nature appreciation.",
								color: "teal",
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
							>
								{/* Background linear */}
								<div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								{/* Content */}
								<div className="relative z-10">
									<div className="mb-6 inline-flex p-4 bg-emerald-100 rounded-2xl group-hover:bg-emerald-600 transition-colors duration-300">
										<item.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
									</div>

									<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
										{item.title}
									</h3>

									<p className="text-gray-600 leading-relaxed">
										{item.description}
									</p>
								</div>

								{/* Decorative Element */}
								<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 bg-linear-to-b from-emerald-50/30 to-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<span className="inline-block text-emerald-600 font-semibold mb-3 text-sm tracking-wider uppercase">
							What We Offer
						</span>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Our Services
						</h2>
						<div className="w-24 h-1.5 bg-linear-to-r from-emerald-600 to-green-500 mx-auto rounded-full"></div>
					</motion.div>

					{!loading && services.length > 0 && (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{services.map((service, idx) => (
								<ServiceCard key={service.id} service={service} index={idx} />
							))}
						</div>
					)}
				</div>
			</section>

			{/* Featured Products Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<span className="inline-block text-emerald-600 font-semibold mb-3 text-sm tracking-wider uppercase">
							Our Collection
						</span>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Featured Plants
						</h2>
						<div className="w-24 h-1.5 bg-linear-to-r from-emerald-600 to-green-500 mx-auto mb-6 rounded-full"></div>
						<p className="text-gray-600 max-w-2xl mx-auto text-lg">
							Handpicked selection of our most popular and beautiful plants
						</p>
					</motion.div>

					{!loading && featuredProducts.length > 0 ? (
						<>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
								{featuredProducts.map((product) => (
									<ProductCard key={product._id} product={product} />
								))}
							</div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="text-center"
							>
								<Link
									href="/products"
									className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-green-600 text-white px-10 py-4 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-600/50 group"
								>
									<span>View All Products</span>
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</Link>
							</motion.div>
						</>
					) : (
						<div className="text-center py-12">
							<div className="inline-block p-4 bg-emerald-50 rounded-full mb-4">
								<Leaf className="w-8 h-8 text-emerald-600 animate-pulse" />
							</div>
							<p className="text-gray-600">Loading our beautiful plants...</p>
						</div>
					)}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 relative overflow-hidden">
				{/* Background */}
				<div className="absolute inset-0 bg-linear-to-br from-emerald-600 via-green-600 to-emerald-700" />

				{/* Decorative Elements */}
				<div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48" />
				<div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32" />

				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Ready to Go Green?
						</h2>
						<p className="text-emerald-50 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
							Transform your space into a green oasis with our curated plants
							and professional gardening services.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<motion.button
								onClick={() => setEnquiryOpen(true)}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 shadow-2xl group"
							>
								<span className="flex items-center gap-2">
									Get Started
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</span>
							</motion.button>

							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link
									href="/contact"
									className="inline-block bg-emerald-800 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-900 transition-all duration-300 shadow-xl"
								>
									Contact Us
								</Link>
							</motion.div>
						</div>

						{/* Trust Badges */}
						<div className="flex flex-wrap justify-center gap-8 mt-16 text-emerald-100">
							<div className="flex items-center gap-3">
								<Clock className="w-5 h-5" />
								<span className="text-sm font-medium">24/7 Support</span>
							</div>
							<div className="flex items-center gap-3">
								<Award className="w-5 h-5" />
								<span className="text-sm font-medium">Quality Assured</span>
							</div>
							<div className="flex items-center gap-3">
								<Users className="w-5 h-5" />
								<span className="text-sm font-medium">
									500+ Happy Customers
								</span>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Enquiry Form Modal */}
			<EnquiryForm isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
		</main>
	);
}
