"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MoreHorizontal, Edit, Trash2, Eye, Mail, Shield, ChevronLeft, ChevronRight } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  role: "Admin" | "Manager" | "User"
  status: "Active" | "Inactive" | "Pending"
  lastActive: string
  joinDate: string
  avatar: string
}

const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
    joinDate: "Jan 15, 2024",
    avatar: "JD",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "Manager",
    status: "Active",
    lastActive: "1 day ago",
    joinDate: "Feb 3, 2024",
    avatar: "SJ",
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike.chen@example.com",
    role: "User",
    status: "Inactive",
    lastActive: "1 week ago",
    joinDate: "Mar 12, 2024",
    avatar: "MC",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.d@example.com",
    role: "User",
    status: "Pending",
    lastActive: "Never",
    joinDate: "Mar 20, 2024",
    avatar: "ED",
  },
  {
    id: "5",
    name: "Alex Rodriguez",
    email: "alex.r@example.com",
    role: "Manager",
    status: "Active",
    lastActive: "3 hours ago",
    joinDate: "Jan 8, 2024",
    avatar: "AR",
  },
]

export function UsersTable() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [showActions, setShowActions] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 5

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-red-500/20 text-red-400 border border-red-500/30"
      case "Manager":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30"
      case "User":
        return "bg-green-500/20 text-green-400 border border-green-500/30"
      default:
        return "bg-neutral-500/20 text-neutral-400 border border-neutral-500/30"
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border border-green-500/30"
      case "Inactive":
        return "bg-red-500/20 text-red-400 border border-red-500/30"
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
      default:
        return "bg-neutral-500/20 text-neutral-400 border border-neutral-500/30"
    }
  }

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  const toggleSelectAll = () => {
    setSelectedUsers((prev) => (prev.length === users.length ? [] : users.map((user) => user.id)))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-0 overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-800/50 border-b border-neutral-700">
            <tr>
              <th className="text-left p-6">
                <input
                  type="checkbox"
                  checked={selectedUsers.length === users.length}
                  onChange={toggleSelectAll}
                  className="rounded border-neutral-600 bg-neutral-800 text-white focus:ring-white/20"
                />
              </th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">User</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Role</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Status</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Last Active</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Join Date</th>
              <th className="text-left p-6 text-sm font-semibold text-neutral-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ backgroundColor: "rgba(38, 38, 38, 0.5)" }}
                className="table-row"
              >
                <td className="p-6">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleUserSelection(user.id)}
                    className="rounded border-neutral-600 bg-neutral-800 text-white focus:ring-white/20"
                  />
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-semibold">
                      {user.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{user.name}</p>
                      <p className="text-sm text-neutral-400">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="p-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(user.status)}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-6 text-sm text-neutral-400">{user.lastActive}</td>
                <td className="p-6 text-sm text-neutral-400">{user.joinDate}</td>
                <td className="p-6">
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowActions(showActions === user.id ? null : user.id)}
                      className="p-2 rounded-xl hover:bg-neutral-700 transition-colors"
                    >
                      <MoreHorizontal className="w-4 h-4 text-neutral-400" />
                    </motion.button>

                    <AnimatePresence>
                      {showActions === user.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 mt-2 w-56 bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl z-50"
                        >
                          <div className="p-2">
                            <motion.button
                              whileHover={{ x: 4 }}
                              className="flex items-center gap-3 w-full px-4 py-3 text-left text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-200"
                            >
                              <Eye className="w-4 h-4" />
                              View Details
                            </motion.button>
                            <motion.button
                              whileHover={{ x: 4 }}
                              className="flex items-center gap-3 w-full px-4 py-3 text-left text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-200"
                            >
                              <Edit className="w-4 h-4" />
                              Edit User
                            </motion.button>
                            <motion.button
                              whileHover={{ x: 4 }}
                              className="flex items-center gap-3 w-full px-4 py-3 text-left text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-200"
                            >
                              <Mail className="w-4 h-4" />
                              Send Email
                            </motion.button>
                            <motion.button
                              whileHover={{ x: 4 }}
                              className="flex items-center gap-3 w-full px-4 py-3 text-left text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-200"
                            >
                              <Shield className="w-4 h-4" />
                              Reset Password
                            </motion.button>
                            <hr className="my-2 border-neutral-700" />
                            <motion.button
                              whileHover={{ x: 4 }}
                              className="flex items-center gap-3 w-full px-4 py-3 text-left text-red-400 hover:text-red-300 hover:bg-neutral-800 rounded-xl transition-all duration-200"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete User
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-6 border-t border-neutral-800">
        <div className="flex items-center gap-2">
          <p className="text-sm text-neutral-400">
            Showing {(currentPage - 1) * usersPerPage + 1} to {Math.min(currentPage * usersPerPage, users.length)} of{" "}
            {users.length} results
          </p>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed text-neutral-300 rounded-xl transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </motion.button>

          <div className="flex items-center gap-1">
            {[1, 2, 3].map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-xl font-medium transition-colors ${
                  currentPage === page ? "bg-white text-black" : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                }`}
              >
                {page}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
