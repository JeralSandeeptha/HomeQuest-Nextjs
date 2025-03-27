import React from 'react';
import './LoginPage.scss';
import { LoginForm } from '@/components/login-form/LoginForm';

const LoginPage = () => {
  return (
    <div className="be-default flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage;