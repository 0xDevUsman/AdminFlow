"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin } from "lucide-react"

const accounts = [
  { id: "github", name: "GitHub", icon: Github, connected: true },
  { id: "twitter", name: "Twitter", icon: Twitter, connected: false },
  { id: "linkedin", name: "LinkedIn", icon: Linkedin, connected: false },
]

export function LinkedAccounts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card space-y-6"
    >
      <h3 className="text-xl font-semibold text-white">Linked Accounts</h3>

      <div className="space-y-4">
        {accounts.map((acc) => {
          const Icon = acc.icon
          return (
            <div key={acc.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-white" />
                <span className="text-neutral-300">{acc.name}</span>
              </div>
              {acc.connected ? (
                <button className="btn-secondary">Disconnect</button>
              ) : (
                <button className="btn-primary">Connect</button>
              )}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
