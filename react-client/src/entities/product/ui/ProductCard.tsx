import type { Product } from "@/shared/api";
import { Button } from "@/shared/ui";

export function ProductCard(props: Product) {
  const { image, title, price } = props

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <Button className="px-4 py-1.5 rounded transition-colors duration-300 cursor-pointer text-white bg-emerald-500 hover:bg-teal-500">Buy</Button>
    </div>
  )
}
