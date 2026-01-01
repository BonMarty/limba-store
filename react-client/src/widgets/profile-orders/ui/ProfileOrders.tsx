import { useGetMyOrdersQuery } from "../api"

export function ProfileOrders() {
  const { isLoading, error, data } = useGetMyOrdersQuery("")

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{JSON.stringify(error)}</div>

  if (!data) return <div>No data</div>

  return (
    <ul className="p-4 h-fit space-y-8 bg-slate-700">
      {data.map((order) => (
        <li key={order.id}>
          <p><strong>User ID:</strong> {order.userId}</p>
          <ul>
            {order.items.map((item) => <li key={item.id}>{item.title}</li>)}
          </ul>
        </li>
      ))}
    </ul>
  )
}
