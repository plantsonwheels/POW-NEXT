"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero({ onEnquireClick }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/green-scooter-plants-delivery-service.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">PLANTS ON WHEELS</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">Bringing Nature to Your Doorstep</p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Transform your home, office, or balcony into a green paradise. We deliver fresh, curated plants—right at
            your doorstep.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button
              onClick={onEnquireClick}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2 group shadow-md"
            >
              Enquire Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/products"
              className="bg-white/95 text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors shadow-md"
            >
              Shop Plants
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="text-white text-sm">Scroll to explore</div>
        </motion.div>
      </div>
    </section>
  )
}
