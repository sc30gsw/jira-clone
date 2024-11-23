import { getLoggedInUser } from '@/features/auth/action'
import { redirect } from 'next/navigation'

const Home = async () => {
  const user = await getLoggedInUser()

  if (!user) {
    redirect('/sign-in')
  }

  return <div>This is a home page</div>
}

export default Home
