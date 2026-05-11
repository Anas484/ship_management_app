import {z} from 'zod'

// model Drill {
//   id        Int      @id @default(autoincrement())
//   drillName String   @map("drill_name")
//   drillType String
//   drillDate DateTime @map("drill_date")
//   location  String
//   createdAt DateTime @default(now()) @map("created_at")

//   ship   Ship @relation(fields: [shipId], references: [id])
//   shipId Int  @map("ship_id")

//   attendance Attendance[]

//   @@map("drills")
// }

export const drillRequest = z.object({
    drillName: z.string(),
    drillType: z.string(),
    drillDate: z.date(),
    location: z.string(),
    shipId: z.number()
})