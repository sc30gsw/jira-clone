import { SelectItem } from '@/components/ui/select'
import { WorkspaceAvatar } from '@/features/workspaces/components/workspace-avatar'
import { fetcher } from '@/lib/fetcher'
import { client } from '@/lib/rpc'
import type { InferResponseType } from 'hono'
import { redirect } from 'next/navigation'

const url = client.api.workspaces.$url()
type ResponseType = InferResponseType<typeof client.api.workspaces.$get>

export const WorkspaceSelectContentItem = async () => {
  const res = await fetcher<ResponseType>(url, {
    cache: 'no-store',
    next: { tags: ['workspaces'] },
  })

  if (!res.isSuccess) {
    redirect('/sign-in')
  }

  const { workspaces } = res.data

  return workspaces.documents.map((workspace) => (
    <SelectItem key={workspace.$id} value={workspace.$id}>
      <div className="flex justify-start items-center gap-3 font-medium">
        <WorkspaceAvatar name={workspace.name} image={workspace.imageUrl} />
        <span className="truncate">{workspace.name}</span>
      </div>
    </SelectItem>
  ))
}
