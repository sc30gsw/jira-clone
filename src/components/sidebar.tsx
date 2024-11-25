import { DottedSeparator } from '@/components/dotted-esparator'
import { Navigation } from '@/components/navigation'
import { WorkspaceSwitcher } from '@/components/workspace-switcher'
import Image from 'next/image'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href={'/'}>
        <Image src={'/logo.svg'} alt="logo" width={164} height={48} />
      </Link>
      <DottedSeparator callFromServer={true} />
      <WorkspaceSwitcher />
      <DottedSeparator callFromServer={true} />
      <Navigation />
    </aside>
  )
}
