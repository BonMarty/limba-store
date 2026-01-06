import { Button } from "@/shared/ui";
import { useCheckoutMutation, useGetMyCartQuery } from "../api";

export function Checkout() {
  const { isLoading, error, data } = useGetMyCartQuery("")
  const [trigger] = useCheckoutMutation()

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{JSON.stringify(error)}</div>

  if (!data) return <div>No data</div>

  return (
    <div>
      <Button onClick={() => trigger({ items: data.items })}>Checkout</Button>
    </div>
  )
}
