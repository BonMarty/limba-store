import { selectCart } from "@/features/cart"
import { useAppSelector } from "@/shared/lib"
import { routes } from "@/shared/routes"
import { Link } from "react-router"

export function CartIcon() {
  const cart = useAppSelector(selectCart)

  return (
    <Link to={routes.CART.to} className='not-italic cursor-pointer relative'>
      <svg className="transition-all duration-300 fill-white hover:fill-emerald-500" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16.5" cy="18.5" r="1.5" />
        <circle cx="9.5" cy="18.5" r="1.5" />
        <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
      </svg>
      {cart.length > 0 ? (
        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex justify-center items-center bg-emerald-500">{cart.length}</span>
      ) : null}
    </Link>
  )
}
