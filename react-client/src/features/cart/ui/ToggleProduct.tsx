import type { Product } from '@/shared/api'
import { Button } from '@/shared/ui'
import { useAddToCartMutation, useGetMyCartQuery, useRemoveFromCartMutation } from '../api'

export function ToggleProduct(props: Product) {
  const { id } = props

  const { isLoading, data, refetch } = useGetMyCartQuery("")
  const [addTrigger] = useAddToCartMutation()
  const [removeTrigger] = useRemoveFromCartMutation()

  const isAlreadyInCart = !!data?.items.find((item) => item.id === id)

  const onClick = async () => {
    if (isAlreadyInCart) {
      await removeTrigger({ item: props })
      await refetch()
    } else {
      await addTrigger({ item: props })
      await refetch()
    }
  }

  if (isLoading) {
    return (
      <Button disabled>Loading...</Button>
    )
  }

  return (
    <Button onClick={onClick}>{isAlreadyInCart ? "Remove from cart" : "Add to cart"}</Button>
  )
}
