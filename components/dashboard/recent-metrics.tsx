"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"

const metrics = [
  { label: "Server Response", value: "245ms", status: "good", trend: "down", change: "-12ms" },
  { label: "Uptime", value: "99.9%", status: "excellent", trend: "up", change: "+0.1%" },
  { label: "Error Rate", value: "0.12%", status: "good", trend: "down", change: "-0.03%" },
  { label: "CPU Usage", value: "45%", status: "warning", trend: "up", change: "+5%" },
  { label: "Memory", value: "68%", status: "good", trend: "up", change: "+2%" },
  { label: "Disk Space", value: "23%", status: "excellent", trend: "up", change: "+1%" },
]

export function RecentMetrics() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-400"
      case "good":
        return "text-blue-400"
      case "warning":
        return "text-yellow-400"
      case "critical":
        return "text-red-400"
      default:
        return "text-neutral-400"
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-500/20"
      case "good":
        return "bg-blue-500/20"
      case "warning":
        return "bg-yellow-500/20"
      case "critical":
        return "bg-red-500/20"
      default:
        return "bg-neutral-500/20"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="card"
    >
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">System Metrics</h3>

      <div className="space-y-3 sm:space-y-4">
        {metrics.map((metric, index) => {
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown

          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-800/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${getStatusBg(metric.status)}`}>
                  <div
                    className={`w-full h-full rounded-full ${getStatusColor(metric.status).replace("text-", "bg-")}`}
                  />
                </div>
                <span className="text-xs sm:text-sm text-neutral-300">{metric.label}</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm font-medium text-white">{metric.value}</span>
                <div
                  className={`flex items-center gap-1 text-xs ${
                    metric.trend === "up" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  <TrendIcon className="w-3 h-3" />
                  <span>{metric.change}</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
