import { db } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Trash2 } from "lucide-react"

export async function StudyMaterialsList() {
  // Fetch study materials from the database
  const materials = await db.studyMaterial.findMany()

  // Sort by creation date (newest first)
  const sortedMaterials = materials.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

  if (sortedMaterials.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No study materials uploaded yet. Click "Upload New Material" to add your first resource.
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Grade/Stream</TableHead>
          <TableHead>Uploaded On</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedMaterials.map((material) => (
          <TableRow key={material.id}>
            <TableCell className="font-medium">{material.title}</TableCell>
            <TableCell>
              <Badge variant="outline" className="capitalize">
                {material.subject.replace("_", " ")}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span>Class {material.grade}</span>
                {material.stream && <span className="text-xs text-gray-500 capitalize">{material.stream}</span>}
              </div>
            </TableCell>
            <TableCell>{material.createdAt.toLocaleDateString()}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="text-red-500 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

