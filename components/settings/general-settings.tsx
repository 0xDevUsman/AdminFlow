"use client"

import { motion } from "framer-motion"

export function GeneralSettings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card space-y-6"
    >
      <h2 className="text-2xl font-semibold text-white">General Settings</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">Site Title</label>
          <input type="text" placeholder="My Dashboard" className="input-field w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">Tagline</label>
          <input type="text" placeholder="Manage everything in one place" className="input-field w-full" />
        </div>

        <button className="btn-primary w-fit">Save Changes</button>
      </div>
    </motion.div>
  )
}
