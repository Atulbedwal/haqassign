// app/login/page.tsx
import React from 'react';
import LanguageSelector from '../../components/LanguageSelector';
import Login from '../../components/Login';

const LoginPage = () => {
  return (
    <div>
      <LanguageSelector onChange={function (language: string): void {
        throw new Error('Function not implemented.');
      } } />
      <Login onLogin={function (phoneNumber: string): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
};

export default LoginPage;