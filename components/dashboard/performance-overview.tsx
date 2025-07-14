"use client"

import { motion } from "framer-motion"

const metrics = [
  { label: "Server Uptime", value: "99.9%", status: "good" },
  { label: "Response Time", value: "245ms", status: "good" },
  { label: "Error Rate", value: "0.1%", status: "good" },
  { label: "CPU Usage", value: "45%", status: "warning" },
  { label: "Memory Usage", value: "78%", status: "warning" },
  { label: "Disk Usage", value: "23%", status: "good" },
]

export function PerformanceOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="glass-effect rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-slate-100 mb-6">Performance Overview</h3>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center justify-between"
          >
            <span className="text-sm text-slate-400">{metric.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-100">{metric.value}</span>
              <div
                className={`w-2 h-2 rounded-full ${
                  metric.status === "good"
                    ? "bg-green-400"
                    : metric.status === "warning"
                      ? "bg-yellow-400"
                      : "bg-red-400"
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
