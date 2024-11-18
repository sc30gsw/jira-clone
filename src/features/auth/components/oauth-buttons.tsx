'use client'

import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export const OauthButtons = () => {
  return (
    <>
      <Button variant={'secondary'} size={'lg'} className="w-full">
        <FcGoogle className="mr-2 size-5" />
        Login With Google
      </Button>
      <Button variant={'secondary'} size={'lg'} className="w-full">
        <FaGithub className="mr-2 size-5" />
        Login With Github
      </Button>
    </>
  )
}
