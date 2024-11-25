import {} from '@/config'
import { fetcher } from '@/lib/fetcher'
import { client } from '@/lib/rpc'
import type { InferResponseType } from 'hono'
import { redirect } from 'next/navigation'

type ResponseType = InferResponseType<
  (typeof client.api.workspaces)[':workspaceId']['$get']
>

const WorkspaceIdPage = async ({
  params,
}: { params: { workspaceId: string } }) => {
  const url = client.api.workspaces[':workspaceId'].$url({
    param: { workspaceId: params.workspaceId },
  })

  const res = await fetcher<ResponseType>(url, {
    next: { tags: [`workspaces/${params.workspaceId}`] },
    cache: 'no-store',
  })

  if (!res.isSuccess) {
    redirect('/sign-in')
  }

  const { workspace } = res.data

  if (!workspace) {
    redirect('/')
  }

  return <div className="text-2xl font-bold h-7">{workspace.name}</div>
}

export default WorkspaceIdPage
