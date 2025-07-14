import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { SettingsTabs } from "@/components/settings/settings-tabs"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Settings</h1>
          <p className="text-neutral-400 text-sm sm:text-base">Customize your dashboard preferences</p>
        </div>

        <SettingsTabs />
      </div>
    </DashboardLayout>
  )
}
