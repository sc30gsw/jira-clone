import { AUTH_COOKIE } from '@/features/auth/constants'
import { createAdminClient } from '@/lib/appwrite'
import { signInInputSchema } from '@/types/schemas/sign-in-input-schema'
import { signUpInputSchema } from '@/types/schemas/sign-up-input-schema'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { deleteCookie, setCookie } from 'hono/cookie'
import { ID } from 'node-appwrite'

const app = new Hono()
  .post('/login', zValidator('json', signInInputSchema), async (c) => {
    const { email, password } = c.req.valid('json')

    const { account } = await createAdminClient()
    const session = await account.createEmailPasswordSession(email, password)

    setCookie(c, AUTH_COOKIE, session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })

    return c.json({ success: true })
  })
  .post('/register', zValidator('json', signUpInputSchema), async (c) => {
    const { name, email, password } = c.req.valid('json')

    const { account } = await createAdminClient()
    await account.create(ID.unique(), email, password, name)
    const session = await account.createEmailPasswordSession(email, password)

    setCookie(c, AUTH_COOKIE, session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })

    return c.json({ success: true })
  })
  .post('/logout', (c) => {
    deleteCookie(c, AUTH_COOKIE)

    return c.json({ success: true })
  })

export default app
