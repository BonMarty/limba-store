import { ProductCard } from "@/entities"
import { useGetProductsQuery } from "../api"

export function ProductsList() {
  const { isLoading, isError, data } = useGetProductsQuery("")

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error!</div>

  if (!data) return <div>No data</div>

  return (
    <ul className="grid grid-cols-4 gap-4">{data.map((product) => <ProductCard key={product.id} {...product} />)}</ul>
  )
}
