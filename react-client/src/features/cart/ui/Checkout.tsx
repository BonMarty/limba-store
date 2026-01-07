import type { Product } from "@/shared/api";
import { Button } from "@/shared/ui";
import { useCheckoutMutation } from "../api";

interface CheckoutProps {
  items: Product[];
  refetch: () => void;
}

export function Checkout(props: CheckoutProps) {
  const { items, refetch } = props

  const [trigger] = useCheckoutMutation()

  const handleCheckout = async (items: Product[]) => {
    await trigger({ items })
    refetch()
  }

  if (!items.length) return null

  return (
    <div>
      <Button onClick={() => handleCheckout(items)}>Checkout</Button>
    </div>
  )
}
