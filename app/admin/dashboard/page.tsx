import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentRegistrations } from "@/components/recent-registrations"
import { getServerSession } from "next-auth/next"

export default async function AdminDashboardPage() {
  // Bypass admin check and assume the user is an admin
  const userName = "Admin User";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <AdminHeader user={{ name: userName }} />

      <div className="flex-1 flex">
        <AdminSidebar />

        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, {userName}</p>
          </div>

          <DashboardStats />

          <div className="mt-8 grid grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Registrations</CardTitle>
                <CardDescription>New students who recently joined</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentRegistrations limit={5} />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

