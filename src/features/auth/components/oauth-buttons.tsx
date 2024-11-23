'use client'

import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

type OauthButtonsProps = {
  disabled: boolean
}

export const OauthButtons = ({ disabled }: OauthButtonsProps) => {
  return (
    <>
      <Button
        variant={'secondary'}
        size={'lg'}
        className="w-full"
        disabled={disabled}
      >
        <FcGoogle className="mr-2 size-5" />
        Login With Google
      </Button>
      <Button
        variant={'secondary'}
        size={'lg'}
        className="w-full"
        disabled={disabled}
      >
        <FaGithub className="mr-2 size-5" />
        Login With Github
      </Button>
    </>
  )
}
