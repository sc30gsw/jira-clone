import {
  DATABASE_ID,
  IMAGES_BUCKET_ID,
  MEMBERS_ID,
  WORKSPACES_ID,
} from '@/config'
import { sessionMiddleware } from '@/lib/session-middleware'
import { generateInviteCode } from '@/lib/utils'
import { MemberRole } from '@/types/member-role'
import { createWorkspaceSchema } from '@/types/schemas/workspaces/craete-workspaces-schema'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { ID, Query } from 'node-appwrite'

const app = new Hono()
  .get('/', sessionMiddleware, async (c) => {
    const user = c.get('user')
    const databases = c.get('databases')

    const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
      Query.equal('userId', user.$id),
    ])

    if (members.total === 0) {
      return c.json({ workspaces: { documents: [], total: 0 } })
    }

    const workspaceIds = members.documents.map((member) => member.workspaceId)

    const workspaces = await databases.listDocuments(
      DATABASE_ID,
      WORKSPACES_ID,
      [Query.orderDesc('$createdAt'), Query.contains('$id', workspaceIds)],
    )

    return c.json({ workspaces })
  })
  .post(
    '/',
    zValidator('form', createWorkspaceSchema),
    sessionMiddleware,
    async (c) => {
      const databases = c.get('databases')
      const storage = c.get('storage')
      const user = c.get('user')

      const { name, image } = c.req.valid('form')

      let uploadedImageUrl: string | undefined

      // https://github.com/honojs/hono/issues/3513
      if (image instanceof Blob) {
        const fileId = ID.unique()
        // ファイル拡張子取得
        const extStr = image.type.split('/')[1]

        // ファイル作成
        const uploadFile = new File(
          [image],
          // 拡張子にsvgが含まれている場合はsvgにする
          `${fileId}.${extStr.indexOf('svg') !== -1 ? 'svg' : extStr}`,
          { type: image.type },
        )

        const file = await storage.createFile(
          IMAGES_BUCKET_ID,
          fileId,
          uploadFile,
        )

        const arrayBuffer = await storage.getFilePreview(
          IMAGES_BUCKET_ID,
          file.$id,
        )

        uploadedImageUrl = `data:${file.mimeType};base64,${Buffer.from(
          arrayBuffer,
        ).toString('base64')}`
      }

      const workspace = await databases.createDocument(
        DATABASE_ID,
        WORKSPACES_ID,
        ID.unique(),
        {
          name,
          userId: user.$id,
          imageUrl: uploadedImageUrl,
          inviteCode: generateInviteCode(6),
        },
      )

      await databases.createDocument(DATABASE_ID, MEMBERS_ID, ID.unique(), {
        userId: user.$id,
        workspaceId: workspace.$id,
        role: MemberRole.Admin,
      })

      return c.json({ workspace })
    },
  )

export default app
