"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 45000, orders: 120 },
  { month: "Feb", revenue: 52000, orders: 140 },
  { month: "Mar", revenue: 48000, orders: 130 },
  { month: "Apr", revenue: 61000, orders: 165 },
  { month: "May", revenue: 55000, orders: 150 },
  { month: "Jun", revenue: 67000, orders: 180 },
  { month: "Jul", revenue: 72000, orders: 195 },
  { month: "Aug", revenue: 69000, orders: 185 },
];

const trafficData = [
  { name: "Direct", value: 4500, color: "#ffffff" },
  { name: "Social", value: 3200, color: "#a3a3a3" },
  { name: "Email", value: 2800, color: "#737373" },
  { name: "Search", value: 1900, color: "#525252" },
];

const userGrowthData = [
  { week: "W1", users: 1200 },
  { week: "W2", users: 1350 },
  { week: "W3", users: 1180 },
  { week: "W4", users: 1420 },
  { week: "W5", users: 1680 },
  { week: "W6", users: 1520 },
  { week: "W7", users: 1750 },
  { week: "W8", users: 1890 },
];

export function ChartsSection() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Revenue Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Revenue Overview
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              Monthly revenue and order trends
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-neutral-400">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-neutral-500 rounded-full"></div>
              <span className="text-neutral-400">Orders</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={revenueData}
            style={{ backgroundColor: "transparent" }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
            <XAxis dataKey="month" stroke="#a3a3a3" fontSize={12} />
            <YAxis stroke="#a3a3a3" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#000000",
                border: "1px solid #000000",
                borderRadius: "12px",
                color: "#ffffff",
                fontSize: "14px",
              }}
            />
            <Bar
              dataKey="revenue"
              fill="#ffffff"
              radius={[4, 4, 0, 0]}
              activeBar={{
                fill: "#f0f0f0",
                stroke: "transparent",
              }}
            />
            <Bar
              dataKey="orders"
              fill="#737373"
              radius={[4, 4, 0, 0]}
              activeBar={{
                fill: "#f0f0f0",
                stroke: "transparent",
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Traffic Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
            Traffic Sources
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={trafficData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => (
                  <text
                    style={{ fontSize: "12px", fill: "#ffffff" }}
                  >{`${name} ${((percent ?? 0) * 100).toFixed(0)}%`}</text>
                )}
              >
                {trafficData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#171717",
                  border: "1px solid #404040",
                  borderRadius: "12px",
                  fontSize: "14px",
                }}
                itemStyle={{
                  color: "#ffffff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* User Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
            User Growth
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
              <XAxis dataKey="week" stroke="#a3a3a3" fontSize={12} />
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
              <Area
                type="monotone"
                dataKey="users"
                stroke="#ffffff"
                fill="url(#colorUsers)"
                strokeWidth={2}
              />
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
