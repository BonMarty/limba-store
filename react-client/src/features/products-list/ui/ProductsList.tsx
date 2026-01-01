import { ProductCard } from "@/entities/product"
import { ToggleProduct } from "@/features/cart"
import { useGetProductsQuery } from "../api"

export function ProductsList() {
  const { isLoading, error, data } = useGetProductsQuery("")

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{JSON.stringify(error)}</div>

  if (!data) return <div>No data</div>

  return (
    <ul className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">{data.map((product) => (
      <li key={product.id}>
        <ProductCard {...product} actions={<ToggleProduct {...product} />} />
      </li>
    ))}</ul>
  )
}
