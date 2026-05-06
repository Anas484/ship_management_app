import {z} from 'zod' 

//  taskName       String     @map("task_name")
//   taskDescription String    @map("task_description")
//   status         TaskStatus
//   commentByCrew  String?    @map("comment_by_crew")
//   createdAt      DateTime   @default(now()) @map("created_at")
//   updatedAt      DateTime   @updatedAt @map("updated_at")

//   assignedShip   Ship    @relation(fields: [assignedShipId], references: [id])
//   assignedShipId Int     @map("assigned_ship")

//   assignedBy     User    @relation("AssignedBy", fields: [assignedById], references: [id])
//   assignedById   Int     @map("assigned_by")

//   assignedTo     User    @relation("AssignedTo", fields: [assignedToId], references: [id])
//   assignedToId   Int     @map("assigned_to")


export const taskRequest = z.object({
    taskName: z.string(),
    taskDescription: z.string(),
    status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']).default('PENDING'),
    commentByCrew: z.string().nullable().optional(),
    assignedShipId: z.number(),
    assignedById: z.number().nullable().optional(),
    assignedToId: z.number(),
    dueDate: z.date()
})