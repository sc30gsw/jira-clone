import auth from '@/features/auth/server/route'
import workspaces from '@/features/workspaces/server/route'

import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

const routes = app.route('/auth', auth).route('/workspaces', workspaces)

export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes
