import { signInInputSchema } from '@/types/schemas/sign-in-input-schema'
import { signUpInputSchema } from '@/types/schemas/sign-up-input-schema'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'

const app = new Hono()
  .post('/login', zValidator('json', signInInputSchema), (c) => {
    const { email, password } = c.req.valid('json')

    return c.json({
      email,
      password,
    })
  })
  .post('/register', zValidator('json', signUpInputSchema), (c) => {
    const { name, email, password } = c.req.valid('json')

    return c.json({
      name,
      email,
      password,
    })
  })

export default app
