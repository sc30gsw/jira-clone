'use client'

import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // biome-ignore lint/correctness/useExhaustiveDependencies: we don't want to close the sidebar when the pathname changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild={true}>
        <Button variant={'secondary'} className="lg:hidden">
          <MenuIcon className="size-4 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
