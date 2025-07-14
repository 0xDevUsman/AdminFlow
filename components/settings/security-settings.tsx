"use client"

import { motion } from "framer-motion"

export function SecuritySettings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card space-y-6"
    >
      <h2 className="text-2xl font-semibold text-white">Security Settings</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-neutral-300">Two-Factor Authentication</p>
          <button className="btn-secondary">Enable</button>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-neutral-300">Login Alerts</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:bg-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white peer-checked:after:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
          </label>
        </div>

        <button className="btn-primary w-fit">Save Changes</button>
      </div>
    </motion.div>
  )
}
