import type { Product } from "@/shared/api";

interface ProductCardProps extends Product {
  actions?: React.ReactNode
}

export function ProductCard(props: ProductCardProps) {
  const { image, title, price, actions } = props

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      {actions ? actions : null}
    </div>
  )
}
