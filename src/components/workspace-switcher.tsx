import { WorkspaceSelect } from '@/features/workspaces/components/workspace-select'
import { WorkspaceSelectContentItem } from '@/features/workspaces/components/workspace-select-content-item'
import { RiAddCircleFill } from 'react-icons/ri'

export const WorkspaceSwitcher = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <RiAddCircleFill className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition" />
      </div>
      <WorkspaceSelect>
        <WorkspaceSelectContentItem />
      </WorkspaceSelect>
    </div>
  )
}
