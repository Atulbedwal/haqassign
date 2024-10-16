// app/login/page.tsx
"use client"
import React from 'react';
import LanguageSelector from '../../components/LanguageSelector';
import Login from '../../components/Login';

const LoginPage = () => {
  return (
    <div>
      <LanguageSelector onChange={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Login onLogin={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
};

export default LoginPage;