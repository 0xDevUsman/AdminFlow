"use client"

import { motion } from "framer-motion"
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  ComposedChart,
} from "recharts"

const comparisonData = [
  { month: "Jan", thisYear: 4500, lastYear: 3200, growth: 40.6 },
  { month: "Feb", thisYear: 5200, lastYear: 4100, growth: 26.8 },
  { month: "Mar", thisYear: 4800, lastYear: 3800, growth: 26.3 },
  { month: "Apr", thisYear: 6100, lastYear: 4500, growth: 35.6 },
  { month: "May", thisYear: 5500, lastYear: 4200, growth: 31.0 },
  { month: "Jun", thisYear: 6700, lastYear: 5100, growth: 31.4 },
  { month: "Jul", thisYear: 7200, lastYear: 5800, growth: 24.1 },
  { month: "Aug", thisYear: 6900, lastYear: 5500, growth: 25.5 },
  { month: "Sep", thisYear: 7500, lastYear: 6200, growth: 21.0 },
  { month: "Oct", thisYear: 8100, lastYear: 6800, growth: 19.1 },
  { month: "Nov", thisYear: 7800, lastYear: 6500, growth: 20.0 },
  { month: "Dec", thisYear: 8500, lastYear: 7000, growth: 21.4 },
]

const performanceData = [
  { week: "W1", performance: 85, target: 80, efficiency: 78 },
  { week: "W2", performance: 88, target: 82, efficiency: 85 },
  { week: "W3", performance: 82, target: 84, efficiency: 80 },
  { week: "W4", performance: 91, target: 86, efficiency: 88 },
  { week: "W5", performance: 89, target: 88, efficiency: 92 },
  { week: "W6", performance: 94, target: 90, efficiency: 89 },
  { week: "W7", performance: 96, target: 92, efficiency: 94 },
  { week: "W8", performance: 93, target: 94, efficiency: 91 },
]

export function ComparisonCharts() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">Year-over-Year Comparison</h3>
            <p className="text-neutral-400 text-sm mt-1">Revenue comparison with growth percentage</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-neutral-400">This Year</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-neutral-500 rounded-full"></div>
              <span className="text-neutral-400">Last Year</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-neutral-400">Growth %</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
            <XAxis dataKey="month" stroke="#a3a3a3" fontSize={12} />
            <YAxis yAxisId="left" stroke="#a3a3a3" fontSize={12} />
            <YAxis yAxisId="right" orientation="right" stroke="#10b981" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#171717",
                border: "1px solid #404040",
                borderRadius: "12px",
                color: "#ffffff",
                fontSize: "14px",
              }}
              formatter={(value, name) => {
                if (name === "growth") return [`${value}%`, "Growth"]
                return [value, name === "thisYear" ? "This Year" : "Last Year"]
              }}
            />
            <Bar yAxisId="left" dataKey="thisYear" fill="#ffffff" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="left" dataKey="lastYear" fill="#737373" radius={[4, 4, 0, 0]} />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="growth"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">Performance Trend</h3>
            <p className="text-neutral-400 text-sm mt-1">Performance vs targets and efficiency metrics</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-neutral-400">Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-neutral-400">Target</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-neutral-400">Efficiency</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
            <XAxis dataKey="week" stroke="#a3a3a3" fontSize={12} />
            <YAxis stroke="#a3a3a3" fontSize={12} domain={[70, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#171717",
                border: "1px solid #404040",
                borderRadius: "12px",
                color: "#ffffff",
                fontSize: "14px",
              }}
            />
            <Line
              type="monotone"
              dataKey="performance"
              stroke="#ffffff"
              strokeWidth={3}
              dot={{ fill: "#ffffff", strokeWidth: 2, r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#3b82f6"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="efficiency"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}
