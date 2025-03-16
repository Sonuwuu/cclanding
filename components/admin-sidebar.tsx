"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, FileText, Calendar, Settings, MessageSquare, BarChart } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Students",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "Study Materials",
      href: "/admin/study-materials",
      icon: FileText,
    },
    {
      name: "Schedule",
      href: "/admin/schedule",
      icon: Calendar,
    },
    {
      name: "Messages",
      href: "/admin/messages",
      icon: MessageSquare,
    },
    {
      name: "Reports",
      href: "/admin/reports",
      icon: BarChart,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="h-full py-6 px-3">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                pathname === item.href
                  ? "bg-blue-50 text-blue-900"
                  : "text-gray-700 hover:text-blue-900 hover:bg-gray-50",
              )}
            >
              <item.icon className={cn("mr-3 h-5 w-5", pathname === item.href ? "text-blue-900" : "text-gray-500")} />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

