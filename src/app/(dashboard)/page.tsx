import { getLoggedInUser } from '@/features/auth/action'
import { fetcher } from '@/lib/fetcher'
import { client } from '@/lib/rpc'
import type { InferResponseType } from 'hono'
import { redirect } from 'next/navigation'

const url = client.api.workspaces.$url()
type ResponseType = InferResponseType<typeof client.api.workspaces.$get>

const Home = async () => {
  const user = await getLoggedInUser()

  if (!user) {
    redirect('/sign-in')
  }

  const res = await fetcher<ResponseType>(url)

  if (!res.isSuccess) {
    redirect('/workspaces/create')
  }

  const { workspaces } = res.data

  if (workspaces.total === 0) {
    redirect('/workspaces/create')
  } else {
    redirect(`/workspaces/${workspaces.documents[0].$id}`)
  }
}

export default Home
