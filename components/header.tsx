"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigationItems = [
    { name: "Home", href: "/" },
    {
      name: "Courses",
      href: "/courses",
      submenu: [
        { name: "Primary (Class 1-5)", href: "/courses/primary" },
        { name: "Middle (Class 6-10)", href: "/courses/middle" },
        { name: "Science (11-12)", href: "/courses/science" },
        { name: "Commerce (11-12)", href: "/courses/commerce" },
        { name: "Arts (11-12)", href: "/courses/arts" },
      ],
    },
    { name: "Our Faculty", href: "/faculty" },
    { name: "Study Material", href: "/study-material" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cc_logo-dlgbJgpumfJtD1naxae3u0e6oIrk5V.png"
                alt="Challenger Classes Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Challenger Classes</h1>
              <p className="text-xs text-red-600 italic">From Darkness to Brightness</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-800 hover:text-blue-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              Login
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">Register Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md text-gray-800" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-800 hover:text-blue-900 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white w-full"
                >
                  Login
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full">Register Now</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

