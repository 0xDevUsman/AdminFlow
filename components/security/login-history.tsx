"use client"

import { motion } from "framer-motion"
import { Monitor, Smartphone, Tablet, MapPin, Clock, AlertTriangle, CheckCircle } from "lucide-react"

const loginHistory = [
  {
    id: 1,
    user: "John Doe",
    device: "Desktop",
    location: "New York, US",
    ip: "192.168.1.1",
    time: "2 hours ago",
    status: "success",
    icon: Monitor,
  },
  {
    id: 2,
    user: "Sarah Johnson",
    device: "Mobile",
    location: "London, UK",
    ip: "10.0.0.1",
    time: "4 hours ago",
    status: "success",
    icon: Smartphone,
  },
  {
    id: 3,
    user: "Mike Chen",
    device: "Tablet",
    location: "Tokyo, JP",
    ip: "172.16.0.1",
    time: "6 hours ago",
    status: "failed",
    icon: Tablet,
  },
  {
    id: 4,
    user: "Emily Davis",
    device: "Desktop",
    location: "Sydney, AU",
    ip: "203.0.113.1",
    time: "8 hours ago",
    status: "success",
    icon: Monitor,
  },
  {
    id: 5,
    user: "Alex Rodriguez",
    device: "Mobile",
    location: "Toronto, CA",
    ip: "198.51.100.1",
    time: "12 hours ago",
    status: "suspicious",
    icon: Smartphone,
  },
]

export function LoginHistory() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case "failed":
        return <AlertTriangle className="w-4 h-4 text-red-400" />
      case "suspicious":
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />
      default:
        return <CheckCircle className="w-4 h-4 text-neutral-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-500/20 text-green-400 border border-green-500/30"
      case "failed":
        return "bg-red-500/20 text-red-400 border border-red-500/30"
      case "suspicious":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
      default:
        return "bg-neutral-500/20 text-neutral-400 border border-neutral-500/30"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="card p-0 overflow-hidden"
    >
      <div className="p-6 border-b border-neutral-800">
        <h3 className="text-xl font-semibold text-white">Login History</h3>
        <p className="text-sm text-neutral-400 mt-1">Recent login attempts and security events</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-800/50 border-b border-neutral-700">
            <tr>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">User</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Device</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Location</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">IP Address</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Time</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {loginHistory.map((login, index) => {
              const DeviceIcon = login.icon

              return (
                <motion.tr
                  key={login.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(38, 38, 38, 0.5)" }}
                  className="table-row"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-medium">
                        {login.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="font-medium text-white">{login.user}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <DeviceIcon className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-300">{login.device}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-300">{login.location}</span>
                    </div>
                  </td>
                  <td className="p-6 text-sm text-neutral-400 font-mono">{login.ip}</td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-400">{login.time}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(login.status)}
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(login.status)}`}
                      >
                        {login.status}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
