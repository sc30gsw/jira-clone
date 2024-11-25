import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="text-neutral-500 mt-2">Could not find requested resource</p>
      <Link href="/" className="text-blue-500">
        Return Home
      </Link>
    </div>
  )
}

export default NotFound
