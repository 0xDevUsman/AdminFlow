"use client"

import { motion } from "framer-motion"

export function ProfilePreferences() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card space-y-6"
    >
      <h3 className="text-xl font-semibold text-white">Preferences</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-neutral-300">Receive product updates</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:bg-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white peer-checked:after:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
          </label>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-neutral-300">Enable beta features</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:bg-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white peer-checked:after:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
          </label>
        </div>
      </div>
    </motion.div>
  )
}
