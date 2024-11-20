// https://zenn.dev/chot/articles/e109287414eb8c
type FetchArgs = Parameters<typeof fetch>

export const fetcher = async <T>(url: FetchArgs[0], args?: FetchArgs[1]) => {
  const res = await fetch(url, args)

  return res.json() as Promise<T>
}
