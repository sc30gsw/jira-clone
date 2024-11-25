'use client'

import { useCreateWorkspaceModal } from '@/features/workspaces/hooks/use-create-workspace-modal'
import { RiAddCircleFill } from 'react-icons/ri'

export const CreateWorkspaceButton = () => {
  const { open } = useCreateWorkspaceModal()
  return (
    <RiAddCircleFill
      className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
      onClick={open}
    />
  )
}
