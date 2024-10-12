// app/page.tsx
"use client"
import React, { useState, useEffect } from 'react';
import LanguageSelector from './components/LanguageSelector';
import Register from './components/Register';
import Login from './components/Login';
import YojnaCard from './components/YojnaCard';
import IntroPageOne from './components/IntroPageOne';
import IntroPageTwo from './components/IntroPageTwo';
import LoginOptions from './components/LoginOptions';

const Page: React.FC = () => {
  const [currentStep, setCurrentStep] = useState('intro1');

  useEffect(() => {
    // Automatically transition to the next step after 5 seconds
    const timer = setTimeout(() => {
      if (currentStep === 'intro1') {
        setCurrentStep('intro2');
      } else if (currentStep === 'intro2') {
        setCurrentStep('language');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleLanguageChange = () => {
    setCurrentStep('loginOptions'); // Move to login options after language selection
  };

  const handleRegister = () => {
    setCurrentStep('register');
  };

  const handlePhoneLogin = () => {
    setCurrentStep('login');
  };

  const handleYojnaCardLogin = () => {
    setCurrentStep('yojna');
  };

  const handleLogin = (phoneNumber: string) => {
    console.log('Logging in with phone number:', phoneNumber);
  };

  const handleYojnaCardLoginComplete = (phoneNumber: string) => {
    console.log('Logging in with Yojna card phone number:', phoneNumber);
  };

  return (
    <div className="container mx-auto p-4">
      {currentStep === 'intro1' && <IntroPageOne />}
      {currentStep === 'intro2' && <IntroPageTwo />}
      {currentStep === 'language' && <LanguageSelector onChange={handleLanguageChange} />}
      {currentStep === 'loginOptions' && (
        <LoginOptions 
          onRegister={handleRegister} 
          onPhoneLogin={handlePhoneLogin} 
          onYojnaCardLogin={handleYojnaCardLogin} 
        />
      )}
      {currentStep === 'register' && <Register onNext={() => setCurrentStep('login')} />}
      {currentStep === 'login' && <Login onLogin={handleLogin} />}
      {currentStep === 'yojna' && <YojnaCard onLogin={handleYojnaCardLoginComplete} />}
    </div>
  );
};

export default Page;