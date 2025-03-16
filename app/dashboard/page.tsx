import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { db } from "@/lib/db"
import { BookOpen, FileText, Calendar, MessageSquare } from "lucide-react"

export default async function DashboardPage() {
  // Check if user is authenticated
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/login")
  }

  // Fetch user details
  const user = await db.user.findUnique({
    where: { id: session.user.id },
  })

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Student Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, {user.firstName} {user.lastName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Enrolled Courses",
                value: "3",
                icon: BookOpen,
                iconColor: "text-blue-600",
                iconBg: "bg-blue-100",
              },
              {
                title: "Study Materials",
                value: "24",
                icon: FileText,
                iconColor: "text-green-600",
                iconBg: "bg-green-100",
              },
              {
                title: "Upcoming Classes",
                value: "2",
                icon: Calendar,
                iconColor: "text-purple-600",
                iconBg: "bg-purple-100",
              },
              {
                title: "Messages",
                value: "5",
                icon: MessageSquare,
                iconColor: "text-red-600",
                iconBg: "bg-red-100",
              },
            ].map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <div className={`p-2 rounded-full ${stat.iconBg}`}>
                    <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Your Courses</CardTitle>
                  <CardDescription>Courses you are currently enrolled in</CardDescription>
                </CardHeader>
                <CardContent>
                  {user.grade && (
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold">
                          Class {user.grade}{" "}
                          {user.stream ? `- ${user.stream.charAt(0).toUpperCase() + user.stream.slice(1)}` : ""}
                        </h3>
                        <p className="text-sm text-gray-600">Regular academic curriculum</p>
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold">Foundation Course</h3>
                        <p className="text-sm text-gray-600">Building strong fundamentals</p>
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold">Competitive Exam Preparation</h3>
                        <p className="text-sm text-gray-600">Special coaching for competitive exams</p>
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Schedule</CardTitle>
                  <CardDescription>Your classes for the next few days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <p className="text-sm text-gray-500">Today, 4:00 PM - 6:00 PM</p>
                      <p className="font-medium">Mathematics</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <p className="text-sm text-gray-500">Today, 6:30 PM - 8:30 PM</p>
                      <p className="font-medium">Science</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <p className="text-sm text-gray-500">Tomorrow, 4:00 PM - 6:00 PM</p>
                      <p className="font-medium">English</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4 py-2">
                      <p className="text-sm text-gray-500">Tomorrow, 6:30 PM - 8:30 PM</p>
                      <p className="font-medium">Social Studies</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      View Full Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

