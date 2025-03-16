"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createHash } from "crypto"
import { db } from "@/lib/db"

// Type definitions
type RegisterData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  grade: string
  stream: string | null
}

type LoginResult = {
  success: boolean
  isAdmin?: boolean
  error?: string
}

type RegisterResult = {
  success: boolean
  error?: string
}

type UserSession = {
  id: string
  email: string
  name: string
  role: string
  exp: number
}

// Helper functions
function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex")
}

function generateToken(user: any): string {
  // In a real app, use a proper JWT library
  const payload: UserSession = {
    id: user.id,
    email: user.email,
    name: `${user.firstName} ${user.lastName}`,
    role: user.role,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days
  }

  return Buffer.from(JSON.stringify(payload)).toString("base64")
}

// Auth actions
export async function login(email: string, password: string): Promise<LoginResult> {
  try {
    // In a real app, use a proper ORM like Prisma
    const user = await db.user.findUnique({
      where: { email },
    })

    if (!user) {
      return { success: false, error: "User not found" }
    }

    const hashedPassword = hashPassword(password)
    if (user.password !== hashedPassword) {
      return { success: false, error: "Invalid password" }
    }

    // Set auth cookie
    const token = generateToken(user)
    cookies().set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })

    return {
      success: true,
      isAdmin: user.role === "ADMIN",
    }
  } catch (error) {
    console.error("Login error:", error)
    return { success: false, error: "An error occurred during login" }
  }
}

export async function register(data: RegisterData): Promise<RegisterResult> {
  try {
    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email: data.email },
    })

    if (existingUser) {
      return { success: false, error: "Email already in use" }
    }

    // Create new user
    const hashedPassword = hashPassword(data.password)

    await db.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        grade: data.grade,
        stream: data.stream,
        role: "STUDENT", // Default role
      },
    })

    return { success: true }
  } catch (error) {
    console.error("Registration error:", error)
    return { success: false, error: "An error occurred during registration" }
  }
}

export async function logout() {
  cookies().delete("auth-token")
  redirect("/auth/login")
}

export async function getSession(): Promise<UserSession | null> {
  const token = cookies().get("auth-token")?.value

  if (!token) {
    return null
  }

  try {
    const payload = JSON.parse(Buffer.from(token, "base64").toString())

    // Check if token is expired
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      cookies().delete("auth-token")
      return null
    }

    return payload
  } catch (error) {
    console.error("Session parsing error:", error)
    return null
  }
}

export async function requireAuth() {
  const session = await getSession()

  if (!session) {
    redirect("/auth/login")
  }

  return session
}

export async function requireAdmin() {
  const session = await getSession()

  if (!session) {
    redirect("/auth/login")
  }

  if (session.role !== "ADMIN") {
    redirect("/dashboard")
  }

  return session
}

