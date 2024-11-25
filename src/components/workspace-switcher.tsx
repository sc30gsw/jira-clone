'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetWorkspaces } from '@/features/workspaces/api/use-get-workspaces'
import { CreateWorkspaceButton } from '@/features/workspaces/components/create-workspace-button'
import { WorkspaceSelect } from '@/features/workspaces/components/workspace-select'

export const WorkspaceSwitcher = () => {
  const { data: workspaces, isLoading } = useGetWorkspaces()

  if (isLoading) {
    return (
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <Skeleton className="size-10 rounded-md" />
          <Skeleton className="w-3/4 h-10" />
        </div>
      </div>
    )
  }

  if (!workspaces) {
    return null
  }

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <CreateWorkspaceButton />
      </div>
      <WorkspaceSelect workspaces={workspaces.documents} />
    </div>
  )
}
