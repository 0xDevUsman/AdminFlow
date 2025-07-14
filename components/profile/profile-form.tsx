"use client"

import { motion } from "framer-motion"

export function ProfileForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card space-y-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 className="text-2xl font-semibold text-white">Edit Profile</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">First Name</label>
          <input type="text" defaultValue="John" className="input-field w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">Last Name</label>
          <input type="text" defaultValue="Doe" className="input-field w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">Email Address</label>
          <input type="email" defaultValue="john.doe@example.com" className="input-field w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">Phone Number</label>
          <input type="tel" defaultValue="+1 (555) 123-4567" className="input-field w-full" />
        </div>
      </div>

      <button type="submit" className="btn-primary w-fit">
        Save Changes
      </button>
    </motion.form>
  )
}
