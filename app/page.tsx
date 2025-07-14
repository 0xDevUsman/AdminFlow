import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsGrid } from "@/components/dashboard/stats-grid"
import { ChartsSection } from "@/components/dashboard/charts-section"
import { ActivityTimeline } from "@/components/dashboard/activity-timeline"
import { RecentMetrics } from "@/components/dashboard/recent-metrics"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-neutral-400 text-sm sm:text-base">Welcome back! Here's your business overview.</p>
        </div>

        <StatsGrid />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          <div className="xl:col-span-2 space-y-6 sm:space-y-8">
            <ChartsSection />
          </div>
          <div className="space-y-6 sm:space-y-8">
            <ActivityTimeline />
            <RecentMetrics />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
