"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Trash2, Mail, Phone, MessageSquare } from "lucide-react"

export default function AdminEnquiryPage() {
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(null)

  useEffect(() => {
    fetchEnquiries()
  }, [])

  const fetchEnquiries = async () => {
    try {
      const res = await fetch("/api/enquiry")
      if (res.ok) {
        const data = await res.json()
        setEnquiries(data.data)
      }
    } catch (error) {
      console.error("Error fetching enquiries:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return

    setDeleting(id)
    try {
      const res = await fetch(`/api/enquiry/${id}`, {
        method: "DELETE",
      })

      if (res.ok) {
        setEnquiries(enquiries.filter((e) => e._id !== id))
      }
    } catch (error) {
      console.error("Error deleting enquiry:", error)
    } finally {
      setDeleting(null)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Enquiries</h1>

        {/* Enquiries List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading enquiries...</p>
          </div>
        ) : enquiries.length > 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-4">
            {enquiries.map((enquiry, idx) => (
              <motion.div
                key={enquiry._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{enquiry.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{new Date(enquiry.createdAt).toLocaleDateString()}</p>
                  </div>
                  {enquiry.productName && (
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {enquiry.productName}
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-4 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a href={`mailto:${enquiry.email}`} className="hover:text-emerald-600">
                      {enquiry.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a href={`tel:${enquiry.phone}`} className="hover:text-emerald-600">
                      {enquiry.phone}
                    </a>
                  </div>
                </div>

                {enquiry.message && (
                  <div className="mb-4 p-3 bg-gray-50 rounded border border-gray-200">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{enquiry.message}</p>
                    </div>
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(enquiry._id)}
                    disabled={deleting === enquiry._id}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600">No enquiries yet</p>
          </div>
        )}
      </div>
    </main>
  )
}
