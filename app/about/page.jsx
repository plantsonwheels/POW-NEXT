"use client"

import { motion } from "framer-motion"
import { Target, Globe, Heart, Leaf } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Plants Delivered" },
    { number: "50+", label: "Gardens Designed" },
    { number: "100+", label: "Happy Customers" },
  ]

  const values = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "We believe every plant matters in creating a greener India.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction and the health of your plants are our priorities.",
    },
    {
      icon: Target,
      title: "Quality & Reliability",
      description: "We deliver only the healthiest plants with expert guidance.",
    },
    {
      icon: Globe,
      title: "Community Building",
      description: "Creating mindful, green communities across India.",
    },
  ]

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About Plants on Wheels</h1>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making India bloom, one plant at a time. Our mission is to bring nature closer to every home and create
              greener, healthier communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Plants on Wheels is a unique mobile green initiative dedicated to simplifying plant shopping and making
                plant care accessible to everyone. We deliver fresh, curated plants directly to your doorstep via our
                eco-friendly scooters.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Beyond delivery, we provide professional gardener services (Maali on Call), helping you maintain your
                green spaces with expertise and care.
              </p>
              <p className="text-gray-700 text-lg">
                Our goal is to create a movement towards greener, healthier, and more mindful living across India.
              </p>
            </div>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img src="/placeholder.svg?key=abouthero" alt="Our team" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl font-semibold text-emerald-50 mb-8">
              "Har Space Ko Banaye Green, Hassle-Free, and Clean."
            </p>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
              We are committed to cultivating greener spaces, simplifying plant care, and making every Indian home and
              workplace bloom with vibrant, healthy plants. We're not just delivering plants—we're driving a movement
              for a cleaner, healthier, and more mindful way of living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-emerald-50 rounded-xl p-8 text-center border border-emerald-200"
                >
                  <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center text-white"
              >
                <p className="text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg text-emerald-50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Plants on Wheels?</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Curation",
                description: "Every plant is carefully selected for quality, health, and suitability.",
              },
              {
                title: "Hassle-Free Delivery",
                description: "Eco-friendly scooter delivery right to your doorstep.",
              },
              {
                title: "Professional Care",
                description: "Police-verified, trained gardeners for personalized guidance.",
              },
              {
                title: "Transparent Pricing",
                description: "No hidden costs—clear, upfront rates for all services.",
              },
              {
                title: "Community Focus",
                description: "Part of a movement towards greener, mindful living in India.",
              },
              {
                title: "Sustainable Mission",
                description: "Every plant contributes to cleaner air and healthier surroundings.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-600"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
