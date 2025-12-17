import { MainLayout } from "@/layouts";
import React from "react";

export function ProductsPage() {
  const [products, setProducts] = React.useState<{ id: number; title: string }[]>([])

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/products")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <MainLayout>
      <ul>
        {products.map((product) => <li key={product.id}>{product.title}</li>)}
      </ul>
    </MainLayout>
  )
}
