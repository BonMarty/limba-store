import { useGetMeQuery } from "../api"

export function ProfileInfo() {
  const { isLoading, error, data } = useGetMeQuery("")

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{JSON.stringify(error)}</div>

  if (!data) return <div>No data</div>

  return (
    <div className="p-4 h-fit space-y-2 bg-zinc-700">
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Name:</strong> {data.name}</p>
    </div>
  )
}
