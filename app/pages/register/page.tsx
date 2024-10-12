// app/pages/register/page.tsx
"use client";

import React, { useState } from 'react';
import LanguageSelector from '../../components/LanguageSelector';
import Register from '../../components/Register';

const RegisterPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    console.log(`Selected language: ${language}`);
  };

  return (
    <div>
      {/* Pass the onChange prop to LanguageSelector */}
      <LanguageSelector onChange={handleLanguageChange} />
      <Register onNext={(location: { state: string; district: string; pincode: string; }) => {
        console.log('Next location:', location);
      }} />
    </div>
  );
};

export default RegisterPage;