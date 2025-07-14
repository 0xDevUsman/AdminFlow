"use client"

import { motion } from "framer-motion"
import { Download, Eye, Calendar, TrendingUp, TrendingDown } from "lucide-react"

const summaryCards = [
  {
    title: "Revenue Report",
    description: "Monthly revenue breakdown and analysis",
    lastGenerated: "2 hours ago",
    trend: "up",
    change: "+12.5%",
    downloads: 247,
    color: "border-green-500/30 bg-green-500/5",
  },
  {
    title: "User Analytics",
    description: "User behavior and engagement metrics",
    lastGenerated: "5 hours ago",
    trend: "up",
    change: "+8.2%",
    downloads: 189,
    color: "border-blue-500/30 bg-blue-500/5",
  },
  {
    title: "Sales Performance",
    description: "Sales team performance and targets",
    lastGenerated: "1 day ago",
    trend: "down",
    change: "-2.1%",
    downloads: 156,
    color: "border-red-500/30 bg-red-500/5",
  },
  {
    title: "Customer Insights",
    description: "Customer satisfaction and feedback analysis",
    lastGenerated: "2 days ago",
    trend: "up",
    change: "+15.3%",
    downloads: 203,
    color: "border-purple-500/30 bg-purple-500/5",
  },
]

export function ReportsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {summaryCards.map((card, index) => {
        const TrendIcon = card.trend === "up" ? TrendingUp : TrendingDown

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`card border ${card.color} group cursor-pointer`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-neutral-400 mb-4">{card.description}</p>

                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{card.lastGenerated}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{card.downloads} downloads</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                    card.trend === "up" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}
                >
                  <TrendIcon className="w-3 h-3" />
                  <span className="text-sm font-medium">{card.change}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2 flex-1"
              >
                <Eye className="w-4 h-4" />
                View Report
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </motion.button>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
