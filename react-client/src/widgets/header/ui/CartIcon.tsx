import { selectCart, toggleCart } from "@/features/cart"
import { useAppDispatch, useAppSelector } from "@/shared/lib"

export function CartIcon() {
  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()

  return (
    <i className='not-italic cursor-pointer' onClick={() => dispatch(toggleCart())}>Cart {cart.length}</i>
  )
}
