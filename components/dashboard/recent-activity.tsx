"use client"

import { motion } from "framer-motion"
import { User, ShoppingCart, DollarSign, Settings } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "user",
    title: "New user registered",
    description: "John Smith joined the platform",
    time: "2 minutes ago",
    icon: User,
    color: "text-blue-400",
  },
  {
    id: 2,
    type: "sale",
    title: "New sale completed",
    description: "Order #1234 for $299.99",
    time: "15 minutes ago",
    icon: ShoppingCart,
    color: "text-green-400",
  },
  {
    id: 3,
    type: "payment",
    title: "Payment received",
    description: "Invoice #INV-001 paid",
    time: "1 hour ago",
    icon: DollarSign,
    color: "text-yellow-400",
  },
  {
    id: 4,
    type: "system",
    title: "System update",
    description: "Security patch applied",
    time: "2 hours ago",
    icon: Settings,
    color: "text-purple-400",
  },
]

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-effect rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-slate-100 mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-800/30 transition-colors"
            >
              <div className={`p-2 rounded-lg bg-slate-800`}>
                <Icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-100">{activity.title}</p>
                <p className="text-sm text-slate-400 truncate">{activity.description}</p>
                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
