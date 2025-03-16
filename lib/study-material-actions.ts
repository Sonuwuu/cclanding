"use server"

import { put } from "@vercel/blob"
import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { getSession } from "@/lib/auth-actions"

type StudyMaterialFormData = {
  title: string
  description: string
  grade: string
  stream: string
  subject: string
}

type UploadResult = {
  success: boolean
  error?: string
}

export async function uploadStudyMaterial(formData: StudyMaterialFormData, file: File): Promise<UploadResult> {
  try {
    // Check authentication
    const session = await getSession()
    if (!session) {
      return { success: false, error: "Authentication required" }
    }

    // Upload file to Vercel Blob
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`
    const blob = await put(filename, file, {
      access: "public",
    })

    // Save study material to database
    await db.studyMaterial.create({
      data: {
        title: formData.title,
        description: formData.description,
        fileUrl: blob.url,
        fileType: file.type,
        grade: formData.grade,
        stream: formData.stream || null,
        subject: formData.subject,
        uploadedBy: session.id,
      },
    })

    // Revalidate the study materials page
    revalidatePath("/admin/study-materials")
    revalidatePath("/study-material")

    return { success: true }
  } catch (error) {
    console.error("Error uploading study material:", error)
    return {
      success: false,
      error: "Failed to upload study material. Please try again.",
    }
  }
}

export async function deleteStudyMaterial(id: string): Promise<UploadResult> {
  try {
    // Check authentication
    const session = await getSession()
    if (!session) {
      return { success: false, error: "Authentication required" }
    }

    // Check if admin
    if (session.role !== "ADMIN") {
      return { success: false, error: "Admin privileges required" }
    }

    // Delete from database
    await db.studyMaterial.delete({
      where: { id },
    })

    // Revalidate the study materials page
    revalidatePath("/admin/study-materials")
    revalidatePath("/study-material")

    return { success: true }
  } catch (error) {
    console.error("Error deleting study material:", error)
    return {
      success: false,
      error: "Failed to delete study material. Please try again.",
    }
  }
}

