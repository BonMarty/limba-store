import { Cart, Checkout } from '@/features/cart'
import { MainLayout } from '@/layouts'

export function CartPage() {
  return (
    <MainLayout className='p-4 flex gap-4'>
      <Cart />
      <Checkout />
    </MainLayout>
  )
}
