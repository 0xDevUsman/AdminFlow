"use client"

import { type ReactNode, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sidebar } from "./sidebar"
import { Navbar } from "./navbar"
import { MobileSidebar } from "./mobile-sidebar"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
        setMobileMenuOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Desktop Sidebar */}
      {!isMobile && <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />}

      {/* Mobile Sidebar */}
      {isMobile && <MobileSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />}

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar
          onMenuClick={() => {
            if (isMobile) {
              setMobileMenuOpen(!mobileMenuOpen)
            } else {
              setSidebarOpen(!sidebarOpen)
            }
          }}
        />

        <main className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={typeof window !== "undefined" ? window.location.pathname : "page"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="p-4 sm:p-6 lg:p-8 min-h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
