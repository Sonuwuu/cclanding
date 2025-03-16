import { db } from "@/lib/db"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type RecentRegistrationsProps = {
  limit?: number
}

export async function RecentRegistrations({ limit = 5 }: RecentRegistrationsProps) {
  // Fetch users from the database
  const users = await db.user.findMany()

  // Filter out admin users and limit the results
  const students = users
    .filter((user) => user.role === "STUDENT")
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit)

  if (students.length === 0) {
    return <div className="text-center py-8 text-gray-500">No student registrations yet</div>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead>Grade</TableHead>
          <TableHead>Stream</TableHead>
          <TableHead>Registered On</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback className="bg-blue-100 text-blue-900">
                  {student.firstName.charAt(0)}
                  {student.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">
                  {student.firstName} {student.lastName}
                </p>
                <p className="text-sm text-gray-500">{student.email}</p>
              </div>
            </TableCell>
            <TableCell>Class {student.grade}</TableCell>
            <TableCell>{student.stream || "-"}</TableCell>
            <TableCell>{student.createdAt.toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

