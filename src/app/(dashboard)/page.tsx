import { getLoggedInUser } from '@/features/auth/action'
import { CreateWorkspaceForm } from '@/features/workspaces/components/create-workspace-form'
import { redirect } from 'next/navigation'

const Home = async () => {
  const user = await getLoggedInUser()

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div className="bg-neutral-500 p-4 h-full">
      <CreateWorkspaceForm />
    </div>
  )
}

export default Home
