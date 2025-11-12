"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-emerald-50">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
          {product.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Benefits */}
        {product.benefits && product.benefits.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {product.benefits.slice(0, 2).map((benefit, idx) => (
                <span key={idx} className="inline-block text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-2xl font-bold text-emerald-600">₹{product.price}</div>
          <Link
            href={`/products/${product._id}`}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            View
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
