import type { Product } from "@/shared/api";
import { Button, Table } from "@/shared/ui";
import { useClearCartMutation, useRemoveFromCartMutation } from "../api";

interface CartProps {
  items: Product[];
  totalPrice: number;
  refetch: () => void;
}

export function Cart(props: CartProps) {
  const { items, totalPrice, refetch } = props

  const [clearTrigger] = useClearCartMutation()
  const [removeTrigger] = useRemoveFromCartMutation()

  const clearCart = async () => {
    await clearTrigger()
    refetch()
  }

  const removeProduct = async (product: Product) => {
    await removeTrigger({ item: product })
    refetch()
  }

  if (!items.length) return <p className="text-2xl">Your cart is empty</p>

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <h2 className="font-semibold text-2xl">Cart</h2>
        <Button onClick={clearCart}>Clear cart</Button>
      </div>
      <h3 className="text-xl"><strong>Total price:</strong> {totalPrice}</h3>
      <Table
        data={items}
        renderHeader={() => (
          <tr className="text-left">
            <Table.Th>Image</Table.Th>
            <Table.Th>ID</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th></Table.Th>
          </tr>
        )}
        renderRow={(row) => (
          <tr key={row.id}>
            <Table.Td>
              <img src={row.image} alt={row.title} className="object-cover max-w-28 max-h-28" />
            </Table.Td>
            <Table.Td>{row.id}</Table.Td>
            <Table.Td>{row.title}</Table.Td>
            <Table.Td>{row.price}</Table.Td>
            <Table.Td>
              <Button onClick={() => removeProduct(row)}>Remove</Button>
            </Table.Td>
          </tr>
        )}
      />
    </div>
  )
}
