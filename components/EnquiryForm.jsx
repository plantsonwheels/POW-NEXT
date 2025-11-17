"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader, CheckCircle, Send } from "lucide-react";

export default function EnquiryForm({
	isOpen,
	onClose,
	productId = null,
	productName = null,
}) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		productId: productId || "",
		productName: productName || "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccess(false);

		try {
			const response = await fetch("/api/enquiry", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...formData,
					type: productId ? "product" : "general",
				}),
			});

			const data = await response.json();

			if (data.success) {
				setSuccess(true);
				setFormData({
					name: "",
					email: "",
					phone: "",
					productId: productId || "",
					productName: productName || "",
					message: "",
				});
				setTimeout(() => {
					onClose();
					setSuccess(false);
				}, 2500);
			} else {
				setError(data.error || "Failed to submit enquiry");
			}
		} catch (err) {
			setError("Error submitting enquiry. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
					/>

					{/* Modal */}
					<motion.div
						initial={{ scale: 0.9, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.9, opacity: 0, y: 20 }}
						transition={{ type: "spring", duration: 0.5 }}
						className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
					>
						{/* Decorative Header Background */}
						<div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-br from-emerald-600 to-green-500" />

						{/* Header */}
						<div className="relative p-6 pb-4">
							<button
								onClick={onClose}
								className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
							>
								<X className="w-5 h-5" />
							</button>

							<div className="text-white">
								<h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
								<p className="text-emerald-50 text-sm">
									We'll get back to you within 24 hours
								</p>
							</div>
						</div>

						{/* Form */}
						<form
							onSubmit={handleSubmit}
							className="p-6 pt-2 space-y-4 overflow-y-auto max-h-[calc(90vh-8rem)]"
						>
							{/* Success Message */}
							<AnimatePresence>
								{success && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0 }}
										className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-4 flex items-center gap-3"
									>
										<CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
										<div>
											<p className="font-semibold text-emerald-900">Success!</p>
											<p className="text-sm text-emerald-700">
												We'll contact you soon.
											</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>

							{/* Error Message */}
							<AnimatePresence>
								{error && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0 }}
										className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl"
									>
										{error}
									</motion.div>
								)}
							</AnimatePresence>

							{/* Input Fields */}
							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Full Name *
									</label>
									<input
										type="text"
										name="name"
										placeholder="John Doe"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Email Address *
									</label>
									<input
										type="email"
										name="email"
										placeholder="john@example.com"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Phone Number *
									</label>
									<input
										type="tel"
										name="phone"
										placeholder="+91 98765 43210"
										value={formData.phone}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
									/>
								</div>

								{productName && (
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Interested In
										</label>
										<input
											type="text"
											value={productName}
											disabled
											className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-emerald-50 text-emerald-900 font-medium"
										/>
									</div>
								)}

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Your Message *
									</label>
									<textarea
										name="message"
										placeholder="Tell us about your requirements..."
										value={formData.message}
										onChange={handleChange}
										required
										rows="4"
										className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors resize-none"
									/>
								</div>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={loading || success}
								className="w-full bg-linear-to-r from-emerald-600 to-green-600 text-white py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-emerald-600/50 group"
							>
								{loading ? (
									<>
										<Loader className="w-5 h-5 animate-spin" />
										<span>Submitting...</span>
									</>
								) : success ? (
									<>
										<CheckCircle className="w-5 h-5" />
										<span>Submitted!</span>
									</>
								) : (
									<>
										<span>Submit Enquiry</span>
										<Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
									</>
								)}
							</button>

							<p className="text-xs text-center text-gray-500">
								By submitting, you agree to our Terms & Privacy Policy
							</p>
						</form>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
