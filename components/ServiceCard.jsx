"use client"

import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"

export default function ServiceCard({ service, index }) {
  const Icon = LucideIcons[service.icon] || LucideIcons.Leaf

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="text-emerald-600 mb-4">
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
      <p className="text-gray-600 text-sm">{service.description}</p>
    </motion.div>
  )
}
