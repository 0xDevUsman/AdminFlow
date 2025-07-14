import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { UsersHeader } from "@/components/users/users-header"
import { UsersTable } from "@/components/users/users-table"
import { UsersStats } from "@/components/users/users-stats"

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">User Management</h1>
          <p className="text-neutral-400 text-sm sm:text-base">Manage users, roles, and permissions</p>
        </div>

        <UsersStats />
        <UsersHeader />
        <UsersTable />
      </div>
    </DashboardLayout>
  )
}
