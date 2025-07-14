"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, XCircle } from "lucide-react"

const twoFactorUsers = [
  { name: "John Doe", email: "john@example.com", enabled: true, method: "SMS", lastUsed: "2 hours ago" },
  { name: "Sarah Johnson", email: "sarah@example.com", enabled: true, method: "App", lastUsed: "1 day ago" },
  { name: "Mike Chen", email: "mike@example.com", enabled: false, method: "None", lastUsed: "Never" },
  { name: "Emily Davis", email: "emily@example.com", enabled: true, method: "Email", lastUsed: "3 hours ago" },
]

export function TwoFactorStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="card"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <Shield className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Two-Factor Authentication</h3>
          <p className="text-sm text-neutral-400">User 2FA status and methods</p>
        </div>
      </div>

      <div className="space-y-4">
        {twoFactorUsers.map((user, index) => (
          <motion.div
            key={user.email}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-800/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-medium">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-medium text-white">{user.name}</p>
                <p className="text-sm text-neutral-400">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-neutral-300">{user.method}</p>
                <p className="text-xs text-neutral-500">{user.lastUsed}</p>
              </div>

              <div className="flex items-center gap-2">
                {user.enabled ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span className={`text-sm font-medium ${user.enabled ? "text-green-400" : "text-red-400"}`}>
                  {user.enabled ? "Enabled" : "Disabled"}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-neutral-800/50 rounded-xl">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-400">2FA Adoption Rate</span>
          <span className="text-lg font-bold text-white">75%</span>
        </div>
        <div className="mt-2 h-2 bg-neutral-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-green-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}
