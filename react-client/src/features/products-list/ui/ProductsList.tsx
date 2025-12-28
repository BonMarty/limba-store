import { ProductCard } from "@/entities/product"
import { useGetProductsQuery } from "../api"
import { useGetMeQuery } from "../api/api"

export function ProductsList() {
  const { isLoading, isError, data } = useGetProductsQuery("")

  const { data: meData } = useGetMeQuery("")

  console.log("me", meData)

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error!</div>

  if (!data) return <div>No data</div>

  return (
    <ul className="grid grid-cols-4 gap-4">{data.map((product) => <ProductCard key={product.id} {...product} />)}</ul>
  )
}
