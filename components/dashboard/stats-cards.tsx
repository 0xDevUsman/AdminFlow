"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-400",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%",
    trend: "up",
    icon: Users,
    color: "text-blue-400",
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19%",
    trend: "up",
    icon: ShoppingCart,
    color: "text-purple-400",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-2.1%",
    trend: "down",
    icon: Activity,
    color: "text-orange-400",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown

        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="stat-card group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-100 mt-2">{stat.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendIcon className={`w-4 h-4 ${stat.trend === "up" ? "text-green-400" : "text-red-400"}`} />
                  <span className={`text-sm ${stat.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-slate-400">from last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-slate-800 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
