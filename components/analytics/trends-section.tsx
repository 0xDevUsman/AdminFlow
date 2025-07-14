"use client"

import { motion } from "framer-motion"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  BarChart,
  Bar,
} from "recharts"

const trendsData = [
  { date: "Jan 1", organic: 1200, paid: 800, social: 400, email: 600, total: 3000 },
  { date: "Jan 8", organic: 1350, paid: 750, social: 450, email: 650, total: 3200 },
  { date: "Jan 15", organic: 1180, paid: 820, social: 380, email: 580, total: 2960 },
  { date: "Jan 22", organic: 1420, paid: 900, social: 520, email: 720, total: 3560 },
  { date: "Jan 29", organic: 1680, paid: 850, social: 480, email: 680, total: 3690 },
  { date: "Feb 5", organic: 1520, paid: 920, social: 550, email: 750, total: 3740 },
  { date: "Feb 12", organic: 1750, paid: 880, social: 600, email: 800, total: 4030 },
  { date: "Feb 19", organic: 1890, paid: 950, social: 580, email: 780, total: 4200 },
  { date: "Feb 26", organic: 2100, paid: 1020, social: 620, email: 850, total: 4590 },
  { date: "Mar 5", organic: 1980, paid: 980, social: 590, email: 820, total: 4370 },
  { date: "Mar 12", organic: 2200, paid: 1100, social: 650, email: 900, total: 4850 },
  { date: "Mar 19", organic: 2350, paid: 1150, social: 680, email: 920, total: 5100 },
]

const conversionData = [
  { channel: "Organic", visitors: 12500, conversions: 425, rate: 3.4 },
  { channel: "Paid", visitors: 8900, conversions: 380, rate: 4.3 },
  { channel: "Social", visitors: 6200, conversions: 186, rate: 3.0 },
  { channel: "Email", visitors: 4800, conversions: 240, rate: 5.0 },
  { channel: "Direct", visitors: 9800, conversions: 490, rate: 5.0 },
]

const engagementData = [
  { metric: "Page Views", value: 85, target: 80 },
  { metric: "Session Duration", value: 92, target: 85 },
  { metric: "Bounce Rate", value: 78, target: 75 },
  { metric: "Pages/Session", value: 88, target: 82 },
  { metric: "Return Visitors", value: 94, target: 90 },
]

export function TrendsSection() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="card"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">Traffic Trends</h3>
            <p className="text-neutral-400 text-sm mt-1">Multi-channel traffic analysis with total volume</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-neutral-400">Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-neutral-400">Paid</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-neutral-400">Social</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-neutral-400">Email</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-neutral-400">Total</span>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={trendsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
            <XAxis dataKey="date" stroke="#a3a3a3" fontSize={12} />
            <YAxis stroke="#a3a3a3" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#171717",
                border: "1px solid #404040",
                borderRadius: "12px",
                color: "#ffffff",
                fontSize: "14px",
              }}
            />
            <Area type="monotone" dataKey="organic" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
            <Area type="monotone" dataKey="paid" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
            <Area type="monotone" dataKey="social" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
            <Area type="monotone" dataKey="email" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#ffffff"
              strokeWidth={3}
              dot={{ fill: "#ffffff", strokeWidth: 2, r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Conversion Rates by Channel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card"
        >
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Conversion Rates by Channel</h3>
            <p className="text-neutral-400 text-sm mt-1">Visitors vs conversions performance</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
              <XAxis type="number" stroke="#a3a3a3" fontSize={12} />
              <YAxis dataKey="channel" type="category" stroke="#a3a3a3" fontSize={12} width={60} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#171717",
                  border: "1px solid #404040",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "14px",
                }}
                formatter={(value, name) => {
                  if (name === "rate") return [`${value}%`, "Conversion Rate"]
                  return [value, name === "visitors" ? "Visitors" : "Conversions"]
                }}
              />
              <Bar dataKey="visitors" fill="#737373" radius={[0, 4, 4, 0]} />
              <Bar dataKey="conversions" fill="#ffffff" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Engagement Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="card"
        >
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Engagement Metrics</h3>
            <p className="text-neutral-400 text-sm mt-1">Performance vs targets</p>
          </div>
          <div className="space-y-4">
            {engagementData.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-300">{item.metric}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{item.value}%</span>
                    <span className="text-xs text-neutral-500">/ {item.target}%</span>
                  </div>
                </div>
                <div className="relative h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(item.value / 100) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full rounded-full ${item.value >= item.target ? "bg-green-500" : "bg-yellow-500"}`}
                  />
                  <div className="absolute top-0 h-full w-0.5 bg-white/50" style={{ left: `${item.target}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
