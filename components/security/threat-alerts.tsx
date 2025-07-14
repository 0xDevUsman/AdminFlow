"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Shield, Eye, Clock } from "lucide-react"

const threats = [
  {
    id: 1,
    type: "Brute Force Attack",
    severity: "high",
    source: "192.168.1.100",
    time: "5 minutes ago",
    status: "blocked",
  },
  {
    id: 2,
    type: "Suspicious Login",
    severity: "medium",
    source: "Unknown Location",
    time: "1 hour ago",
    status: "investigating",
  },
  {
    id: 3,
    type: "DDoS Attempt",
    severity: "critical",
    source: "Multiple IPs",
    time: "2 hours ago",
    status: "mitigated",
  },
  {
    id: 4,
    type: "Malware Detection",
    severity: "high",
    source: "File Upload",
    time: "4 hours ago",
    status: "quarantined",
  },
]

export function ThreatAlerts() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500/20 text-red-400 border border-red-500/30"
      case "high":
        return "bg-orange-500/20 text-orange-400 border border-orange-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
      case "low":
        return "bg-green-500/20 text-green-400 border border-green-500/30"
      default:
        return "bg-neutral-500/20 text-neutral-400 border border-neutral-500/30"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "blocked":
      case "mitigated":
      case "quarantined":
        return "bg-green-500/20 text-green-400 border border-green-500/30"
      case "investigating":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
      case "active":
        return "bg-red-500/20 text-red-400 border border-red-500/30"
      default:
        return "bg-neutral-500/20 text-neutral-400 border border-neutral-500/30"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="card"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-500/20 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-red-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Threat Alerts</h3>
          <p className="text-sm text-neutral-400">Recent security threats and incidents</p>
        </div>
      </div>

      <div className="space-y-4">
        {threats.map((threat, index) => (
          <motion.div
            key={threat.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 rounded-xl border border-neutral-800 hover:bg-neutral-800/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-medium text-white">{threat.type}</h4>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize ${getSeverityColor(threat.severity)}`}
                  >
                    {threat.severity}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>{threat.source}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{threat.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(threat.status)}`}
                >
                  {threat.status}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg hover:bg-neutral-700 transition-colors"
                >
                  <Eye className="w-4 h-4 text-neutral-400" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-neutral-800/50 rounded-xl">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-400">Threats Blocked Today</span>
          <span className="text-lg font-bold text-white">247</span>
        </div>
      </div>
    </motion.div>
  )
}
