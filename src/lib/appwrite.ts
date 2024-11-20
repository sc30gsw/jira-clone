// https://appwrite.io/docs/tutorials/nextjs-ssr-auth/step-3
'use server'

import { Account, Client } from 'node-appwrite'

// biome-ignore lint/suspicious/useAwait: Need to be async to use server actions
export const createAdminClient = async () => {
  if (
    !(
      process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT &&
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT &&
      process.env.NEXT_APPWRITE_KEY
    )
  ) {
    throw new Error('NEXT_PUBLIC_APPWRITE_ENDPOINT is not set')
  }

  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY)

  return {
    get account() {
      return new Account(client)
    },
  }
}
