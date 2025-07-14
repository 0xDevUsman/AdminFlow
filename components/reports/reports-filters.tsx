"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Filter, Search } from "lucide-react"

export function ReportsFilters() {
  const [dateRange, setDateRange] = useState("last-30-days")
  const [reportType, setReportType] = useState("all")
  const [category, setCategory] = useState("all")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="card"
    >
      <div className="flex items-center gap-4 mb-6">
        <Filter className="w-5 h-5 text-neutral-400" />
        <h3 className="text-lg font-semibold text-white">Filter Reports</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Date Range
          </label>
          <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="input-field w-full">
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last-7-days">Last 7 days</option>
            <option value="last-30-days">Last 30 days</option>
            <option value="last-90-days">Last 90 days</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">Report Type</label>
          <select value={reportType} onChange={(e) => setReportType(e.target.value)} className="input-field w-full">
            <option value="all">All Types</option>
            <option value="sales">Sales Reports</option>
            <option value="analytics">Analytics Reports</option>
            <option value="user">User Reports</option>
            <option value="financial">Financial Reports</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field w-full">
            <option value="all">All Categories</option>
            <option value="performance">Performance</option>
            <option value="revenue">Revenue</option>
            <option value="customers">Customers</option>
            <option value="products">Products</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            <Search className="w-4 h-4 inline mr-2" />
            Search
          </label>
          <input type="text" placeholder="Search reports..." className="input-field w-full" />
        </div>
      </div>
    </motion.div>
  )
}
