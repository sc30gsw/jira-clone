import { getLoggedInUser } from '@/features/auth/action'
import { UserButton } from '@/features/auth/components/user-button'
import { redirect } from 'next/navigation'

const Home = async () => {
  const user = await getLoggedInUser()

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div>
      <UserButton />
    </div>
  )
}

export default Home
