import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"
import { db } from "@/lib/db"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = params.id

    // Check if material exists
    const material = await db.studyMaterial.findUnique({
      where: { id },
    })

    if (!material) {
      return NextResponse.json({ error: "Study material not found" }, { status: 404 })
    }

    // Check if user is admin or the uploader
    if (session.user.role !== "ADMIN" && material.uploadedBy !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Delete material
    await db.studyMaterial.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Study material deleted successfully" })
  } catch (error) {
    console.error("Error deleting study material:", error)
    return NextResponse.json({ error: "An error occurred while deleting study material" }, { status: 500 })
  }
}

