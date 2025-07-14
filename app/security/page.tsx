import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { SecurityOverview } from "@/components/security/security-overview"
import { TwoFactorStatus } from "@/components/security/two-factor-status"
import { LoginHistory } from "@/components/security/login-history"
import { ThreatAlerts } from "@/components/security/threat-alerts"

export default function SecurityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Security</h1>
          <p className="text-neutral-400 text-sm sm:text-base">Monitor security status and manage access</p>
        </div>

        <SecurityOverview />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          <TwoFactorStatus />
          <ThreatAlerts />
        </div>

        <LoginHistory />
      </div>
    </DashboardLayout>
  )
}
