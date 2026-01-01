import { MainLayout } from '@/layouts'
import { ProfileInfo, ProfileOrders } from '@/widgets'

export function ProfilePage() {
  return (
    <MainLayout className='flex gap-4 px-4'>
      <ProfileInfo />
      <ProfileOrders />
    </MainLayout>
  )
}
