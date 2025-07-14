import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileForm } from "@/components/profile/profile-form"
import { LinkedAccounts } from "@/components/profile/linked-accounts"
import { ProfilePreferences } from "@/components/profile/profile-preferences"

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        <ProfileHeader />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          <div className="xl:col-span-2">
            <ProfileForm />
          </div>
          <div className="space-y-6 sm:space-y-8">
            <LinkedAccounts />
            <ProfilePreferences />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
