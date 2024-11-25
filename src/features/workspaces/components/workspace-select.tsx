import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { WorkspaceAvatar } from '@/features/workspaces/components/workspace-avatar'
import type { client } from '@/lib/rpc'
import type { InferResponseType } from 'hono'
import { useParams, useRouter } from 'next/navigation'

type WorkspaceSelectProps = {
  workspaces: InferResponseType<
    typeof client.api.workspaces.$get
  >['workspaces']['documents']
}

export const WorkspaceSelect = ({ workspaces }: WorkspaceSelectProps) => {
  const router = useRouter()
  const params = useParams()

  const onSelect = (id: string) => {
    router.push(`/workspaces/${id}`)
  }

  return (
    <Select onValueChange={onSelect} value={params.workspaceId as string}>
      <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
        <SelectValue placeholder="No workspace selected" />
      </SelectTrigger>
      <SelectContent>
        {workspaces.map((workspace) => (
          <SelectItem key={workspace.$id} value={workspace.$id}>
            <div className="flex justify-start items-center gap-3 font-medium">
              <WorkspaceAvatar
                name={workspace.name}
                image={workspace.imageUrl}
              />
              <span className="truncate">{workspace.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
