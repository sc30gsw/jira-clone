import { DottedSeparator } from '@/components/dotted-esparator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { OauthButtons } from '@/features/auth/components/oauth-buttons'
import { SignInForm } from '@/features/auth/components/sign-in-form'
import Link from 'next/link'

export const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back!</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <SignInForm />
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <OauthButtons />
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>Don&apos;t have an account?</p>
        <Link href={'/sign-up'}>
          <span className="text-blue-700">&nbsp;Sign up</span>
        </Link>
      </CardContent>
    </Card>
  )
}
