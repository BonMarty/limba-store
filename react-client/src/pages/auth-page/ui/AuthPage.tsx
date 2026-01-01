import { LoginForm } from '@/features/login-form'
import { RegisterForm } from '@/features/register-form'
import { AuthLayout } from '@/layouts'
import React from 'react'

export function AuthPage() {
  const [isLogin, setIsLogin] = React.useState(true)

  return (
    <AuthLayout>
      <div className='flex flex-col gap-4'>
        <div>
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
        <p className='text-center'>
          <span>{isLogin ? "Do not have an account?" : "Already got an account?"}</span>
          {' '}
          <span onClick={() => setIsLogin(prev => !prev)} className='cursor-pointer text-emerald-500'>{isLogin ? "Register" : "Login"}</span>
        </p>
      </div>
    </AuthLayout>
  )
}
