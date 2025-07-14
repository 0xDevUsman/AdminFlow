"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function AppearanceSettings() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card space-y-6"
    >
      <h2 className="text-2xl font-semibold text-white">Appearance Settings</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as "dark" | "light")}
            className="input-field w-full"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        <button className="btn-primary w-fit">Save Changes</button>
      </div>
    </motion.div>
  )
}
