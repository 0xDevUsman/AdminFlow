"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity, Eye, Target } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$847,329",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs last month",
  },
  {
    title: "Active Users",
    value: "24,847",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "vs last month",
  },
  {
    title: "Total Orders",
    value: "12,483",
    change: "+23.1%",
    trend: "up",
    icon: ShoppingCart,
    description: "vs last month",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-2.1%",
    trend: "down",
    icon: Target,
    description: "vs last month",
  },
  {
    title: "Page Views",
    value: "1.2M",
    change: "+15.3%",
    trend: "up",
    icon: Eye,
    description: "vs last month",
  },
  {
    title: "Bounce Rate",
    value: "24.5%",
    change: "-5.2%",
    trend: "up",
    icon: Activity,
    description: "vs last month",
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown

        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="stat-card group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-neutral-800 rounded-xl group-hover:bg-neutral-700 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-neutral-400">{stat.title}</p>
                    <p className="text-xl sm:text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs sm:text-sm ${
                      stat.trend === "up" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    <TrendIcon className="w-3 h-3" />
                    <span className="font-medium">{stat.change}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-400">{stat.description}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
