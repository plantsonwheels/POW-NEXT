import {
	Phone,
	Mail,
	Leaf,
	MapPin,
	Instagram,
	Facebook,
	Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-linear-to-br from-emerald-900 via-emerald-800 to-green-900 text-white overflow-hidden">
			{/* Decorative Elements */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full -translate-y-48 translate-x-48" />
			<div className="absolute bottom-0 left-0 w-64 h-64 bg-green-700/20 rounded-full translate-y-32 -translate-x-32" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
					{/* Brand */}
					<div className="space-y-4">
						<div className="flex items-center gap-2 mb-4">
							<div className="p-2 bg-emerald-600 rounded-xl">
								<Leaf className="w-6 h-6" />
							</div>
							<span className="font-bold text-xl">Plants on Wheels</span>
						</div>
						<p className="text-emerald-100 leading-relaxed">
							Making a Green India, one plant at a time. Delivering nature to
							your doorstep.
						</p>

						{/* Social Media Links */}
						<div className="flex gap-3 pt-4">
							<a
								href="#"
								className="p-2.5 bg-emerald-700/50 hover:bg-emerald-600 rounded-lg transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="p-2.5 bg-emerald-700/50 hover:bg-emerald-600 rounded-lg transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="p-2.5 bg-emerald-700/50 hover:bg-emerald-600 rounded-lg transition-colors"
								aria-label="Twitter"
							>
								<Twitter className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/products"
									className="text-emerald-100 hover:text-white transition-colors inline-flex items-center gap-2 group"
								>
									<span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>
									Products
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-emerald-100 hover:text-white transition-colors inline-flex items-center gap-2 group"
								>
									<span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-emerald-100 hover:text-white transition-colors inline-flex items-center gap-2 group"
								>
									<span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/enquiry"
									className="text-emerald-100 hover:text-white transition-colors inline-flex items-center gap-2 group"
								>
									<span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>
									Enquire Now
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-bold text-lg mb-6 text-white">Our Services</h3>
						<ul className="space-y-3 text-emerald-100">
							<li className="flex items-start gap-2">
								<span className="text-emerald-400 mt-1">•</span>
								<span>Plant Delivery</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-emerald-400 mt-1">•</span>
								<span>Gardening Services</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-emerald-400 mt-1">•</span>
								<span>Garden Design</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-emerald-400 mt-1">•</span>
								<span>Corporate Gifting</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-emerald-400 mt-1">•</span>
								<span>Plant Maintenance</span>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-bold text-lg mb-6 text-white">Get in Touch</h3>
						<ul className="space-y-4">
							<li>
								<a
									href="tel:+919354001873"
									className="flex items-start gap-3 text-emerald-100 hover:text-white transition-colors group"
								>
									<div className="p-2 bg-emerald-700/50 rounded-lg group-hover:bg-emerald-600 transition-colors">
										<Phone className="w-4 h-4" />
									</div>
									<div>
										<div className="text-xs text-emerald-200 mb-1">Call us</div>
										<div className="font-medium">+91 9354001873</div>
									</div>
								</a>
							</li>
							<li>
								<a
									href="mailto:plantsonwheelsind@gmail.com"
									className="flex items-start gap-3 text-emerald-100 hover:text-white transition-colors group"
								>
									<div className="p-2 bg-emerald-700/50 rounded-lg group-hover:bg-emerald-600 transition-colors">
										<Mail className="w-4 h-4" />
									</div>
									<div>
										<div className="text-xs text-emerald-200 mb-1">
											Email us
										</div>
										<div className="font-medium break-all">
											plantsonwheelsind@gmail.com
										</div>
									</div>
								</a>
							</li>
							<li className="flex items-start gap-3 text-emerald-100">
								<div className="p-2 bg-emerald-700/50 rounded-lg">
									<MapPin className="w-4 h-4" />
								</div>
								<div>
									<div className="text-xs text-emerald-200 mb-1">Location</div>
									<div className="font-medium">New Delhi, India</div>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-emerald-700/50 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
						<p className="text-emerald-100 text-sm">
							&copy; {currentYear} Plants on Wheels. All rights reserved.
						</p>
						<div className="flex gap-6 text-emerald-100 text-sm">
							<Link
								href="/privacy"
								className="hover:text-white transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="hover:text-white transition-colors"
							>
								Terms of Service
							</Link>
						</div>
					</div>
					<p className="text-center text-emerald-200 text-sm mt-4 font-medium">
						🌱 Making a Green India 🌱
					</p>
				</div>
			</div>
		</footer>
	);
}
