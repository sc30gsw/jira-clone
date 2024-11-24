import { z } from 'zod'

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(1),
  image: z
    .union([
      z.instanceof(Blob),
      z.string().transform((value) => (value === '' ? undefined : value)),
    ])
    .optional(),
})

export type CreateWorkspaceSchema = z.infer<typeof createWorkspaceSchema>
