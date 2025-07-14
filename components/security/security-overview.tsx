"use client"

import { motion } from "framer-motion"
import { Shield, ShieldCheck, ShieldAlert, ShieldX } from "lucide-react"

const securityMetrics = [
  {
    title: "Security Score",
    value: "94/100",
    status: "excellent",
    icon: ShieldCheck,
    description: "Overall security rating",
  },
  {
    title: "Active Threats",
    value: "2",
    status: "warning",
    icon: ShieldAlert,
    description: "Threats detected today",
  },
  {
    title: "Blocked Attacks",
    value: "1,247",
    status: "good",
    icon: Shield,
    description: "Attacks blocked this month",
  },
  {
    title: "Vulnerabilities",
    value: "0",
    status: "excellent",
    icon: ShieldX,
    description: "Critical vulnerabilities",
  },
]

export function SecurityOverview() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-400 bg-green-500/20"
      case "good":
        return "text-blue-400 bg-blue-500/20"
      case "warning":
        return "text-yellow-400 bg-yellow-500/20"
      case "critical":
        return "text-red-400 bg-red-500/20"
      default:
        return "text-neutral-400 bg-neutral-500/20"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {securityMetrics.map((metric, index) => {
        const Icon = metric.icon

        return (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="card group cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`p-3 rounded-xl ${getStatusColor(metric.status)} group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-400">{metric.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
              </div>
            </div>
            <p className="text-sm text-neutral-500">{metric.description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
