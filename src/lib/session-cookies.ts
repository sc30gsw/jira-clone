'use server'

import { AUTH_COOKIE } from '@/features/auth/constants'
import { cookies } from 'next/headers'

// biome-ignore lint/suspicious/useAwait: Need to be async to use server actions
export const getSessionCookie = async () => {
  const cookieManager = cookies()

  return cookieManager.get(AUTH_COOKIE)
}
