import { Cart, Checkout, useGetMyCartQuery } from '@/features/cart'
import { MainLayout } from '@/layouts'

export function CartPage() {
  const { isLoading, error, data, refetch } = useGetMyCartQuery("")

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{JSON.stringify(error)}</div>

  if (!data) return <div>No data</div>

  return (
    <MainLayout className='p-4 flex flex-wrap gap-8'>
      <Cart items={data.items} totalPrice={data.totalPrice} refetch={refetch} />
      <Checkout items={data.items} refetch={refetch} />
    </MainLayout>
  )
}
