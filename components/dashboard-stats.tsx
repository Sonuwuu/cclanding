import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, BookOpen, TrendingUp } from "lucide-react"

export function DashboardStats() {
  // In a real app, these would be fetched from the database
  const stats = [
    {
      title: "Total Students",
      value: "156",
      change: "+12% from last month",
      icon: Users,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      title: "Study Materials",
      value: "32",
      change: "+4 new uploads",
      icon: FileText,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
    },
    {
      title: "Active Courses",
      value: "8",
      change: "2 starting next week",
      icon: BookOpen,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
    },
    {
      title: "Success Rate",
      value: "94%",
      change: "+2% from last year",
      icon: TrendingUp,
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className={`p-2 rounded-full ${stat.iconBg}`}>
              <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

