import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ReportsHeader } from "@/components/reports/reports-header"
import { ReportsFilters } from "@/components/reports/reports-filters"
import { ReportsSummary } from "@/components/reports/reports-summary"
import { ReportsTable } from "@/components/reports/reports-table"

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Reports</h1>
          <p className="text-neutral-400 text-sm sm:text-base">Generate and export detailed reports</p>
        </div>

        <ReportsHeader />
        <ReportsFilters />
        <ReportsSummary />
        <ReportsTable />
      </div>
    </DashboardLayout>
  )
}
