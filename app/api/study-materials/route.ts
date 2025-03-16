import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"
import { put } from "@vercel/blob"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const materials = await db.studyMaterial.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(materials)
  } catch (error) {
    console.error("Error fetching study materials:", error)
    return NextResponse.json({ error: "An error occurred while fetching study materials" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const grade = formData.get("grade") as string
    const stream = formData.get("stream") as string
    const subject = formData.get("subject") as string
    const file = formData.get("file") as File

    if (!title || !description || !grade || !subject || !file) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Upload file to Vercel Blob
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`
    const blob = await put(filename, file, {
      access: "public",
    })

    // Save study material to database
    const material = await db.studyMaterial.create({
      data: {
        title,
        description,
        fileUrl: blob.url,
        fileType: file.type,
        grade,
        stream: stream || null,
        subject,
        uploadedBy: session.user.id,
      },
    })

    return NextResponse.json({ message: "Study material uploaded successfully", material }, { status: 201 })
  } catch (error) {
    console.error("Error uploading study material:", error)
    return NextResponse.json({ error: "An error occurred while uploading study material" }, { status: 500 })
  }
}

