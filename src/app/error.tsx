'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

const RootError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    // biome-ignore lint/suspicious/noConsole: needed for debugging
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh gap-y-2">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <Button type="button" variant={'outline'} onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}

export default RootError
