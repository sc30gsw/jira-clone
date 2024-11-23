'use client'

import '@/zod-error-map-utils'
import { DottedSeparator } from '@/components/dotted-esparator'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRegister } from '@/features/auth/api/use-register'
import { OauthButtons } from '@/features/auth/components/oauth-buttons'
import { useSafeForm } from '@/hooks/use-safe-form'
import {
  type SignUpInput,
  signUpInputSchema,
} from '@/types/schemas/sign-up-input-schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignUpForm = () => {
  const { mutate, isPending } = useRegister()

  const form = useSafeForm<SignUpInput>({
    resolver: zodResolver(signUpInputSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: SignUpInput) => {
    mutate({ json: data })
  }

  return (
    <>
      <CardContent className="p-7">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter name"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter email address"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isPending}
              size={'lg'}
              className="w-full"
            >
              Sign up
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <OauthButtons disabled={isPending} />
      </CardContent>
    </>
  )
}
