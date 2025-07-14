"use client"

import { motion } from "framer-motion"
import { User, ShoppingCart, DollarSign, Settings, AlertTriangle, CheckCircle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "user",
    title: "New user registration",
    description: "Sarah Johnson created an account",
    time: "2 minutes ago",
    icon: User,
    color: "bg-blue-500",
  },
  {
    id: 2,
    type: "order",
    title: "Order completed",
    description: "Order #12847 for $299.99 processed",
    time: "15 minutes ago",
    icon: ShoppingCart,
    color: "bg-green-500",
  },
  {
    id: 3,
    type: "payment",
    title: "Payment received",
    description: "Invoice #INV-2024-001 paid",
    time: "1 hour ago",
    icon: DollarSign,
    color: "bg-yellow-500",
  },
  {
    id: 4,
    type: "system",
    title: "System update",
    description: "Security patches applied successfully",
    time: "2 hours ago",
    icon: Settings,
    color: "bg-purple-500",
  },
  {
    id: 5,
    type: "alert",
    title: "Security alert",
    description: "Unusual login attempt detected",
    time: "3 hours ago",
    icon: AlertTriangle,
    color: "bg-red-500",
  },
  {
    id: 6,
    type: "success",
    title: "Backup completed",
    description: "Daily backup finished successfully",
    time: "4 hours ago",
    icon: CheckCircle,
    color: "bg-green-500",
  },
]

export function ActivityTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="card"
    >
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-white">Recent Activity</h3>
        <button className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">View all</button>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-neutral-800/50 transition-colors group"
            >
              <div className={`p-2 rounded-xl ${activity.color} flex-shrink-0`}>
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white group-hover:text-white transition-colors text-sm sm:text-base">
                  {activity.title}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 truncate">{activity.description}</p>
                <p className="text-xs text-neutral-500 mt-2">{activity.time}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
