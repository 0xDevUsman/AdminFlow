"use client"

import { motion } from "framer-motion"

const funnelData = [
  { stage: "Visitors", count: 10000, percentage: 100, color: "bg-blue-500" },
  { stage: "Leads", count: 3500, percentage: 35, color: "bg-green-500" },
  { stage: "Prospects", count: 1200, percentage: 12, color: "bg-yellow-500" },
  { stage: "Customers", count: 324, percentage: 3.24, color: "bg-purple-500" },
]

export function ConversionFunnel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="card"
    >
      <h3 className="text-xl font-semibold text-white mb-6">Conversion Funnel</h3>

      <div className="space-y-4">
        {funnelData.map((stage, index) => (
          <motion.div
            key={stage.stage}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-white">{stage.stage}</span>
              <div className="text-right">
                <span className="text-sm font-bold text-white">{stage.count.toLocaleString()}</span>
                <span className="text-xs text-neutral-400 ml-2">({stage.percentage}%)</span>
              </div>
            </div>

            <div className="relative h-8 bg-neutral-800 rounded-xl overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${stage.percentage}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className={`h-full ${stage.color} rounded-xl`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-neutral-800/50 rounded-xl">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-400">Overall Conversion Rate</span>
          <span className="text-lg font-bold text-white">3.24%</span>
        </div>
      </div>
    </motion.div>
  )
}
