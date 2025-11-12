"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Hero from "@/components/Hero"
import ServiceCard from "@/components/ServiceCard"
import ProductCard from "@/components/ProductCard"
import EnquiryForm from "@/components/EnquiryForm"

export default function Home() {
  const [services, setServices] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, productsRes] = await Promise.all([fetch("/api/services"), fetch("/api/products?type=all")])

        if (servicesRes.ok) {
          const servicesData = await servicesRes.json()
          setServices(servicesData.data)
        }

        if (productsRes.ok) {
          const productsData = await productsRes.json()
          setFeaturedProducts(productsData.data.slice(0, 4))
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero onEnquireClick={() => setEnquiryOpen(true)} />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Plants on Wheels?</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A unique mobile green initiative that delivers curated, healthy, and vibrant plants directly to your
              doorstep. Our signature green scooters bring nature closer to homes, offices, balconies, and terraces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-emerald-50 rounded-xl p-8 border border-emerald-200"
          >
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Mission</h3>
            <p className="text-emerald-800 text-lg font-semibold">
              "Har Space Ko Banaye Green, Hassle-Free, and Clean."
            </p>
            <p className="text-emerald-700 mt-4">
              We cultivate greener spaces, simplify plant care, and make every Indian home and workplace bloom. We're
              not just delivering plants—we're driving a movement for a cleaner, healthier, and more mindful lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We're Needed Section */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why We're Needed Today</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Impact",
                description: "More plants mean cleaner air, healthier surroundings, and a greener future.",
              },
              {
                title: "Mindful Living",
                description: "Reduces stress, boosts mood, and enhances overall well-being.",
              },
              {
                title: "Community Building",
                description: "Promotes greener neighborhoods and cultivates shared nature appreciation.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-emerald-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
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
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Plants</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          {!loading && featuredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {featuredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading products...</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Go Green?</h2>
            <p className="text-emerald-50 text-xl mb-8 max-w-2xl mx-auto">
              Transform your space into a green oasis with our curated plants and professional gardening services.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
              >
                Get Started
              </button>
              <Link
                href="/contact"
                className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      <EnquiryForm isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </main>
  )
}
