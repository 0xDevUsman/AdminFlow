"use client"

import { motion } from "framer-motion"
import { Users, UserPlus, UserCheck, UserX } from "lucide-react"

const userStats = [
  {
    title: "Total Users",
    value: "24,847",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
  },
  {
    title: "New Users",
    value: "1,247",
    change: "+8.2%",
    icon: UserPlus,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
  {
    title: "Active Users",
    value: "18,392",
    change: "+5.1%",
    icon: UserCheck,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
  },
  {
    title: "Inactive Users",
    value: "6,455",
    change: "-2.3%",
    icon: UserX,
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
  },
]

export function UsersStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {userStats.map((stat, index) => {
        const Icon = stat.icon

        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="card group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-400">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                  {stat.change} from last month
                </p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
