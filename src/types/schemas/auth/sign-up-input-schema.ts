import { z } from 'zod'

export const signUpInputSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().min(1).email(),
  password: z
    .string()
    .trim()
    .min(8)
    .max(256)
    .regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/, {
      message: 'Password must contain both letters and numbers',
    }),
})

export type SignUpInput = z.infer<typeof signUpInputSchema>
