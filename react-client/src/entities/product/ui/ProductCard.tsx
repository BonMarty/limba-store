import type { Product } from "@/shared/api";

interface ProductCardProps extends Product {
  actions?: React.ReactNode
}

export function ProductCard(props: ProductCardProps) {
  const { image, title, price, actions } = props

  return (
    <div className="grid grid-rows-1 h-full space-y-2">
      <img src={image} alt={title} className="object-contain h-96" />
      <p className="text-lg">{title}</p>
      <p className="text-xl font-semibold">{price} &#x20BD;</p>
      {actions ? actions : null}
    </div>
  )
}
