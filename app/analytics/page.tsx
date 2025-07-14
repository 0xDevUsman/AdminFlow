import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { KPICards } from "@/components/analytics/kpi-cards"
import { ComparisonCharts } from "@/components/analytics/comparison-charts"
import { TrendsSection } from "@/components/analytics/trends-section"
import { ConversionFunnel } from "@/components/analytics/conversion-funnel"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-neutral-400 text-sm sm:text-base">Deep insights into your business performance</p>
        </div>

        <KPICards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          <ComparisonCharts />
          <ConversionFunnel />
        </div>

        <TrendsSection />
      </div>
    </DashboardLayout>
  )
}
