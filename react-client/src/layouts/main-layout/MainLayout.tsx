import { Header } from '@/widgets';
import React from 'react';

interface MainLayoutProps extends React.PropsWithChildren {
  className?: string;
}

export function MainLayout(props: MainLayoutProps) {
  const { children, className } = props

  return (
    <div className='flex flex-col w-full min-h-svh bg-zinc-900 text-white'>
      <Header />
      <main className={className ? `flex-1 ${className}` : "flex-1"}>{children}</main>
    </div>
  )
}
