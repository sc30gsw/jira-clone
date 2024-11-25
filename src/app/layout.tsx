import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/components/query-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="ja">
      <body className={cn(inter.className, 'antialiased min-h-screen')}>
        <QueryProvider>
          <Toaster />
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
