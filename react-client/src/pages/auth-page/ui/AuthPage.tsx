import { AuthLayout } from '@/layouts'
import React from 'react'

export function AuthPage() {
  const [isLogin, setIsLogin] = React.useState(true)

  return (
    <AuthLayout>
      <div className='flex flex-col gap-4'>
        <div>
          {isLogin ? "login" : "register"}
        </div>
        <p onClick={() => setIsLogin(prev => !prev)}>{isLogin ? "Do not have an accout yet? Register" : "Already got an account? Login"}</p>
      </div>
    </AuthLayout >
  )
}
