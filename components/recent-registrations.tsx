import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function RecentRegistrations() {
  const students = [
    {
      firstName: "Alice",
      lastName: "Smith",
      email: "alice.smith@example.com",
      grade: 11,
      stream: "Science",
      createdAt: new Date(),
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      grade: 10,
      stream: null,
      createdAt: new Date(),
    },
    {
      firstName: "Charlie",
      lastName: "Brown",
      email: "charlie.brown@example.com",
      grade: 12,
      stream: "Commerce",
      createdAt: new Date(),
    },
  ]

  if (!students || students.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No student registrations yet</div>
    )
  } else {
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
          {students.map((student, index) => (
            <TableRow key={index}>
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
}

