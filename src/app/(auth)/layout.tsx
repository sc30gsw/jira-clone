'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname()
  const isSignUp = pathname === '/sign-up'

  return (
    <main className="bg-neutral-100 min-h-dvh">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src={'/logo.svg'} height={56} width={152} alt="Logo" />
          <Button asChild={true} variant={'secondary'}>
            <Link href={isSignUp ? '/sign-in' : '/sign-up'}>
              {isSignUp ? 'Login' : 'Sign up'}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
