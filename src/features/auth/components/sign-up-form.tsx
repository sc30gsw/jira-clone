'use client'

import '@/zod-error-map-utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRegister } from '@/features/auth/api/use-register'
import { useSafeForm } from '@/hooks/use-safe-form'
import {
  type SignUpInput,
  signUpInputSchema,
} from '@/types/schemas/sign-up-input-schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignUpForm = () => {
  const { mutate } = useRegister()

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
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="text" placeholder="Enter name" />
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
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={false} size={'lg'} className="w-full">
          Sign up
        </Button>
      </form>
    </Form>
  )
}
