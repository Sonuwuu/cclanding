import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/" ||
    path === "/auth/login" ||
    path === "/auth/register" ||
    path.startsWith("/courses") ||
    path.startsWith("/faculty") ||
    path.startsWith("/study-material") ||
    path.startsWith("/about") ||
    path.startsWith("/contact") ||
    path.startsWith("/success-stories") ||
    path.startsWith("/privacy-policy") ||
    path.startsWith("/terms-of-service")

  // Get the token from cookies
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // Redirect logic
  if (isPublicPath && token) {
    // If user is logged in and tries to access public path like login/register,
    // redirect to dashboard
    if (path === "/auth/login" || path === "/auth/register") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  // If user is not logged in and tries to access protected path,
  // redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  // If user tries to access admin paths without admin privileges,
  // redirect to dashboard
  if (path.startsWith("/admin") && token) {
    if (token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

// Configure the paths that should trigger this middleware
export const config = {
  matcher: ["/", "/dashboard/:path*", "/admin/:path*", "/auth/:path*"],
}

