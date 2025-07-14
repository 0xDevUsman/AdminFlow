"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Target, Users, DollarSign, ShoppingCart, Eye, Clock } from "lucide-react"

const kpis = [
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+0.12%",
    trend: "up",
    icon: Target,
    description: "vs last period",
  },
  {
    title: "Customer Acquisition Cost",
    value: "$45.20",
    change: "-$2.30",
    trend: "down",
    icon: Users,
    description: "vs last period",
  },
  {
    title: "Average Order Value",
    value: "$127.50",
    change: "+$8.20",
    trend: "up",
    icon: DollarSign,
    description: "vs last period",
  },
  {
    title: "Customer Lifetime Value",
    value: "$1,247",
    change: "+$89",
    trend: "up",
    icon: ShoppingCart,
    description: "vs last period",
  },
  {
    title: "Page Views",
    value: "2.4M",
    change: "+180K",
    trend: "up",
    icon: Eye,
    description: "vs last period",
  },
  {
    title: "Session Duration",
    value: "4m 32s",
    change: "+23s",
    trend: "up",
    icon: Clock,
    description: "vs last period",
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon
        const TrendIcon = kpi.trend === "up" ? TrendingUp : TrendingDown

        return (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="card group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-neutral-800 rounded-xl group-hover:bg-neutral-700 transition-colors">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                  kpi.trend === "up" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                }`}
              >
                <TrendIcon className="w-3 h-3" />
                <span className="text-sm font-medium">{kpi.change}</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-400 mb-2">{kpi.title}</p>
              <p className="text-3xl font-bold text-white mb-2">{kpi.value}</p>
              <p className="text-sm text-neutral-500">{kpi.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
