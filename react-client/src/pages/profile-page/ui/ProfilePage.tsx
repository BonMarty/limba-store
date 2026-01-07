import { MainLayout } from '@/layouts'
import { ProfileInfo, ProfileOrders } from '@/widgets'

export function ProfilePage() {
  return (
    <MainLayout className='flex gap-4 p-4'>
      <ProfileInfo />
      <ProfileOrders />
    </MainLayout>
  )
}
