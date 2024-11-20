'use client'

import { Button } from '@/components/ui/button'
import { useLogout } from '@/features/auth/api/use-logout'

const Home = () => {
  const { mutate } = useLogout()

  // const router = useRouter()
  // const { data, isLoading } = useCurrent()

  // useEffect(() => {
  //   if (!(data || isLoading)) {
  //     router.push('/sign-in')
  //   }
  // }, [data, isLoading, router])

  return (
    <div className="flex gap-4">
      <Button onClick={() => mutate()}>Logout</Button>
      <Button variant={'secondary'}>Secondary</Button>
      <Button variant={'destructive'}>Destructive</Button>
      <Button variant={'ghost'}>Ghost</Button>
      <Button variant={'muted'}>Muted</Button>
      <Button variant={'outline'}>Outline</Button>
      <Button variant={'tertiary'}>Tertiary</Button>
    </div>
  )
}

export default Home
