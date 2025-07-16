"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Bell,
  Search,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Moon,
  MessageSquare,
} from "lucide-react";
interface NavbarProps {
  onMenuClick: () => void;
}
import Link from "next/link";

export function Navbar({ onMenuClick }: NavbarProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const notifications = [
    {
      id: 1,
      title: "New user registered",
      message: "John Doe joined your platform",
      time: "2m ago",
      unread: true,
    },
    {
      id: 2,
      title: "Server maintenance",
      message: "Scheduled for tonight at 2 AM",
      time: "1h ago",
      unread: true,
    },
    {
      id: 3,
      title: "Payment received",
      message: "$2,500 from Enterprise plan",
      time: "3h ago",
      unread: false,
    },
    {
      id: 4,
      title: "Security alert",
      message: "New login from unknown device",
      time: "5h ago",
      unread: false,
    },
  ];

  return (
    <header className="bg-neutral-900/50 backdrop-blur-xl border-b border-neutral-800 px-4 sm:px-6 py-4 sticky top-0 z-20">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4 sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onMenuClick}
            className="p-2 rounded-xl lg:hidden hover:bg-neutral-800 transition-colors"
          >
            <Menu className="w-5 h-5 text-neutral-400" />
          </motion.button>

          <motion.div
            animate={{
              width: searchFocused ? 350 : 250,
            }}
            transition={{ duration: 0.3 }}
            className="relative hidden sm:block"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search anything..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full pl-12 pr-4 py-2 sm:py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-neutral-600 transition-all duration-300 text-sm sm:text-base"
            />
          </motion.div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <div className="hidden sm:flex relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 sm:p-3 rounded-xl hover:bg-neutral-800 transition-colors relative"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
            </motion.button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-10 mt-2 w-80 sm:w-96 bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl z-50"
                >
                  <div className="p-4 sm:p-6 border-b border-neutral-800">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        Notifications
                      </h3>
                      <span className="text-xs sm:text-sm text-neutral-400">
                        {notifications.filter((n) => n.unread).length} new
                      </span>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification, index) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`p-4 border-b border-neutral-800 last:border-b-0 hover:bg-neutral-800/50 transition-colors cursor-pointer ${
                          notification.unread ? "bg-neutral-800/30" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-white text-sm">
                              {notification.title}
                            </p>
                            <p className="text-neutral-400 text-sm mt-1">
                              {notification.message}
                            </p>
                            <p className="text-neutral-500 text-xs mt-2">
                              {notification.time}
                            </p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-neutral-800">
                    <button className="w-full text-center text-sm text-neutral-400 hover:text-white transition-colors">
                      View all notifications
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile Menu */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 sm:gap-3 p-2 rounded-xl hover:bg-neutral-800 transition-colors"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-neutral-400">Administrator</p>
              </div>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-400" />
            </motion.button>

            <AnimatePresence>
              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 sm:w-56 bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl z-50"
                >
                  <div className="p-2">
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-200"
                    >
                      <User className="w-4 h-4" />
                      View Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center gap-3 w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-200"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <hr className="my-2 border-neutral-700" />
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-red-400 hover:text-red-300 hover:bg-neutral-800 rounded-xl transition-all duration-200"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
