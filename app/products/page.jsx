"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "@/components/ProductCard"
import EnquiryForm from "@/components/EnquiryForm"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("all")
  const [loading, setLoading] = useState(true)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = filter === "all" ? "" : `?type=${filter}`
        const res = await fetch(`/api/products${query}`)
        if (res.ok) {
          const data = await res.json()
          setProducts(data.data)
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [filter])

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Plant Collection</h1>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our curated selection of indoor and outdoor plants, perfect for any space.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {["all", "indoor", "outdoor"].map((type) => (
            <button
              key={type}
              onClick={() => {
                setFilter(type)
                setLoading(true)
              }}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors capitalize ${
                filter === type ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        {!loading && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading plants...</p>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No plants found in this category.</p>
          </div>
        )}
      </div>

      <EnquiryForm isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </main>
  )
}
