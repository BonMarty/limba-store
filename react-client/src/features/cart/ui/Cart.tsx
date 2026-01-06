import { Button } from "@/shared/ui"
import { useClearCartMutation, useGetMyCartQuery } from "../api"

export function Cart() {
  const { isLoading, error, data } = useGetMyCartQuery("")
  const [trigger] = useClearCartMutation()

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{JSON.stringify(error)}</div>

  if (!data) return <div>No data</div>

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <h2 className="font-semibold text-2xl">Cart</h2>
        <Button onClick={() => trigger()}>Clear cart</Button>
      </div>
      <p><strong>Total price:</strong> {data.totalPrice}</p>
      <ul className="space-y-4">
        {data.items.map((item) => (
          <li key={item.id} className="p-2 rounded bg-zinc-800">
            <p>{item.title}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
