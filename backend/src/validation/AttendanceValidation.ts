import {z } from 'zod'

// model Attendance {
//   id       Int              @id @default(autoincrement())
//   status   AttendanceStatus
//   markedOn DateTime         @default(now()) @map("marked_on")

//   drill   Drill @relation(fields: [drillId], references: [id])
//   drillId Int   @map("drill_id")

//   crew   User @relation(fields: [crewId], references: [id])
//   crewId Int  @map("crew_id")

//   @@unique([drillId, crewId]) // prevent duplicate attendance per drill
//   @@map("attendance")
// }


export const attendanceRequest = z.object({
    status: z.enum(['PRESENT', 'ABSENT']).default('ABSENT'),
    drillId: z.number(),
    crewId: z.number()
})