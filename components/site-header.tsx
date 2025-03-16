"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function SiteHeader() {
  return (
    <>
      {/* Announcement Banner */}
      <div className="w-full bg-[#1C1C1C] text-white text-center py-2 text-sm">
        <span>Create Pro-Quality Videos: </span>
        <Link href="#" className="text-purple-300 hover:text-purple-200">
          Meet New Animations
        </Link>
      </div>

      {/* Main Navigation */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="font-bold text-xl">
                CLAID.AI
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Industries */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              Online Marketplaces
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              Ecommerce
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              Print on Demand
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* API */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>API</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              Our APIs
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              Customers
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              API Pricing
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              API Documentation
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              Claid AI x Zapier
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* API Tools */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>API Tools</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                            >
                              Background Removal API
                              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">TOP SELLER</Badge>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              Shadow Generator API
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                            >
                              Generate Background API
                              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">POPULAR</Badge>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              Upscale API
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              Light AI API
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="block p-2 hover:bg-gray-50 rounded-md">
                              Smart Frame API
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center space-x-8">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Custom AI
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Business
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Resources
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Affiliate
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Button variant="secondary" className="bg-[#1C1C1C] text-white hover:bg-black">
                Studio
              </Button>
            </div>
          </div>
        </div>

        {/* Promo Card */}
        <div className="absolute right-4 top-24">
          <Card className="w-[300px] p-4">
            <h3 className="font-semibold mb-4">Learn how Claid can accelerate your business</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-100 rounded-lg aspect-square" />
              <div className="bg-gray-100 rounded-lg aspect-square" />
            </div>
            <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9]">Schedule demo</Button>
          </Card>
        </div>
      </header>
    </>
  )
}

