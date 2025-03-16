import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { StudyMaterialsList } from "@/components/study-materials-list"
import { requireAdmin } from "@/lib/auth-actions"
import { Plus } from "lucide-react"

export default async function AdminStudyMaterialsPage() {
  // Check if user is admin
  const session = await requireAdmin()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <AdminHeader user={session} />

      <div className="flex-1 flex">
        <AdminSidebar />

        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Study Materials</h1>
              <p className="text-gray-600">Manage study materials for students</p>
            </div>

            <Link href="/admin/study-materials/upload">
              <Button className="bg-blue-900 hover:bg-blue-800">
                <Plus className="mr-2 h-4 w-4" /> Upload New Material
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Study Materials</CardTitle>
              <CardDescription>Browse and manage all uploaded study materials</CardDescription>
            </CardHeader>
            <CardContent>
              <StudyMaterialsList />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

