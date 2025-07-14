"use client"

import { motion } from "framer-motion"
import { Camera } from "lucide-react"

export function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card flex items-center gap-6"
    >
      {/* Avatar */}
      <div className="relative group">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl font-bold text-white">
          JD
        </div>

        {/* Upload hover */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Camera className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-white">John Doe</h2>
        <p className="text-neutral-400">Administrator</p>
        <p className="text-sm text-neutral-500">john.doe@example.com</p>
      </div>
    </motion.div>
  )
}
