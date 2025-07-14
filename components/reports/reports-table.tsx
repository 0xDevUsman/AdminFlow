"use client"

import { motion } from "framer-motion"
import { Download, Eye, FileText, MoreHorizontal } from "lucide-react"

const reports = [
  {
    id: "RPT-001",
    name: "Monthly Revenue Analysis",
    type: "Financial",
    category: "Revenue",
    createdDate: "2024-03-15",
    size: "2.4 MB",
    downloads: 47,
    status: "Ready",
  },
  {
    id: "RPT-002",
    name: "User Engagement Metrics",
    type: "Analytics",
    category: "Users",
    createdDate: "2024-03-14",
    size: "1.8 MB",
    downloads: 32,
    status: "Processing",
  },
  {
    id: "RPT-003",
    name: "Sales Performance Q1",
    type: "Sales",
    category: "Performance",
    createdDate: "2024-03-13",
    size: "3.1 MB",
    downloads: 89,
    status: "Ready",
  },
  {
    id: "RPT-004",
    name: "Customer Satisfaction Survey",
    type: "Survey",
    category: "Customers",
    createdDate: "2024-03-12",
    size: "1.2 MB",
    downloads: 23,
    status: "Ready",
  },
  {
    id: "RPT-005",
    name: "Product Performance Analysis",
    type: "Analytics",
    category: "Products",
    createdDate: "2024-03-11",
    size: "2.7 MB",
    downloads: 56,
    status: "Failed",
  },
]

export function ReportsTable() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-green-500/20 text-green-400 border border-green-500/30"
      case "Processing":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
      case "Failed":
        return "bg-red-500/20 text-red-400 border border-red-500/30"
      default:
        return "bg-neutral-500/20 text-neutral-400 border border-neutral-500/30"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="card p-0 overflow-hidden"
    >
      <div className="p-6 border-b border-neutral-800">
        <h3 className="text-xl font-semibold text-white">Recent Reports</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-800/50 border-b border-neutral-700">
            <tr>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Report</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Type</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Category</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Created</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Size</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Downloads</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Status</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <motion.tr
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ backgroundColor: "rgba(38, 38, 38, 0.5)" }}
                className="table-row"
              >
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-neutral-800 rounded-lg">
                      <FileText className="w-4 h-4 text-neutral-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{report.name}</p>
                      <p className="text-sm text-neutral-400">{report.id}</p>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-sm text-neutral-300">{report.type}</td>
                <td className="p-6 text-sm text-neutral-300">{report.category}</td>
                <td className="p-6 text-sm text-neutral-400">{report.createdDate}</td>
                <td className="p-6 text-sm text-neutral-400">{report.size}</td>
                <td className="p-6 text-sm text-neutral-400">{report.downloads}</td>
                <td className="p-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-neutral-700 transition-colors"
                      disabled={report.status !== "Ready"}
                    >
                      <Eye className="w-4 h-4 text-neutral-400" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-neutral-700 transition-colors"
                      disabled={report.status !== "Ready"}
                    >
                      <Download className="w-4 h-4 text-neutral-400" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-neutral-700 transition-colors"
                    >
                      <MoreHorizontal className="w-4 h-4 text-neutral-400" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
