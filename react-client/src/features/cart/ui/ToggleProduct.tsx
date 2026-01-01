import type { Product } from '@/shared/api'
import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { Button } from '@/shared/ui'
import { addToCart, removeFromCart, selectCart } from '../model'

export function ToggleProduct(props: Product) {
  const { id } = props

  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()

  const isAlreadyInCart = !!cart.find((item) => item.id === id)

  const onClick = () => {
    if (isAlreadyInCart) {
      dispatch(removeFromCart(id))
    } else {
      dispatch(addToCart(props))
    }
  }

  return (
    <Button onClick={onClick}>{isAlreadyInCart ? "Remove from cart" : "Add to cart"}</Button>
  )
}
