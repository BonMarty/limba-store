import { useGetMyCartQuery } from "../api"

export function Cart() {
  const { data } = useGetMyCartQuery("")

  console.log("data", data)

  return (
    <div>Cart</div>
  )
}
