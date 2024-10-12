// app/register/page.tsx
import React from 'react';
import LanguageSelector from '../../components/LanguageSelector';
import Register from '../../components/Register';

const RegisterPage = () => {
  return (
    <div>
      <LanguageSelector />
      <Register />
    </div>
  );
};

export default RegisterPage;