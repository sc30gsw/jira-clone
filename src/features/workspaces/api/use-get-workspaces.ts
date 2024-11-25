import { client } from '@/lib/rpc'
import { useQuery } from '@tanstack/react-query'

export const useGetWorkspaces = () => {
  const query = useQuery({
    queryKey: ['workspaces'],
    queryFn: async () => {
      const res = await client.api.workspaces.$get()

      if (!res.ok) {
        return null
      }

      const { workspaces } = await res.json()

      return workspaces
    },
  })

  return query
}
