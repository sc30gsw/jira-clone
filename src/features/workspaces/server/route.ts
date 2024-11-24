import { DATABASE_ID, WORKSPACES_ID } from '@/config'
import { createWorkspaceSchema } from '@/features/workspaces/schema'
import { sessionMiddleware } from '@/lib/session-middleware'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { ID } from 'node-appwrite'

const app = new Hono().post(
  '/',
  zValidator('json', createWorkspaceSchema),
  sessionMiddleware,
  async (c) => {
    const databases = c.get('databases')
    const user = c.get('user')

    const { name } = c.req.valid('json')

    const workspace = await databases.createDocument(
      DATABASE_ID,
      WORKSPACES_ID,
      ID.unique(),
      {
        name,
        userId: user.$id,
      },
    )

    return c.json({ workspace })
  },
)

export default app
