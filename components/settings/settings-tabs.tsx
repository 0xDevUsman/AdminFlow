"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Settings, Bell, Shield, Palette } from "lucide-react"
import { GeneralSettings } from "./general-settings"
import { NotificationSettings } from "./notification-settings"
import { SecuritySettings } from "./security-settings"
import { AppearanceSettings } from "./appearance-settings"

const tabs = [
  { id: "general", label: "General", icon: Settings },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "appearance", label: "Appearance", icon: Palette },
]

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("general")

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings />
      case "notifications":
        return <NotificationSettings />
      case "security":
        return <SecuritySettings />
      case "appearance":
        return <AppearanceSettings />
      default:
        return <GeneralSettings />
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Tabs */}
      <div className="lg:col-span-1">
        <div className="card p-4">
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    isActive ? "bg-white text-black" : "text-neutral-300 hover:text-white hover:bg-neutral-800"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                  {isActive && <motion.div layoutId="activeTab" className="ml-auto w-2 h-2 bg-black rounded-full" />}
                </motion.button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-3">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </div>
  )
}
