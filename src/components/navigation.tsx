import { cn } from '@/lib/utils'
import { type LucideProps, SettingsIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from 'react-icons/go'
import type { IconType } from 'react-icons/lib'

const routes = [
  { label: 'Home', href: '/', icon: GoHome, activeIcon: GoHomeFill },
  {
    label: 'My Tasks',
    href: '/tasks',
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: 'Members',
    href: '/members',
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
] as const satisfies Array<{
  label: string
  href: string
  icon:
    | IconType
    | ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
      >
  activeIcon:
    | IconType
    | ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
      >
}>

export const Navigation = () => {
  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const isActive = false
        const Icon = isActive ? item.activeIcon : item.icon

        return (
          <Link key={item.href} href={item.href}>
            <div
              className={cn(
                'flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500',
                isActive && 'bg-white shadow-sm hover:opacity-100 text-primary',
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        )
      })}
    </ul>
  )
}
