'use client'

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { ReactNode } from 'react'

type WorkspaceSelectProps = {
  children: ReactNode
}

export const WorkspaceSelect = ({ children }: WorkspaceSelectProps) => {
  return (
    <Select>
      <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
        <SelectValue placeholder="No workspace selected" />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  )
}
