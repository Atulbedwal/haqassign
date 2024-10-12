// app/components/LoginOptions.tsx
"use client"
import React from 'react';

interface LoginOptionsProps {
  onRegister: () => void;
  onPhoneLogin: () => void;
  onYojnaCardLogin: () => void;
}

const LoginOptions: React.FC<LoginOptionsProps> = ({ onRegister, onPhoneLogin, onYojnaCardLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">How do you want to login?</h2>
      <button onClick={onRegister} className="mb-2 px-4 py-2 bg-blue-500 text-white rounded">
        Register me as a new user
      </button>
      <button onClick={onPhoneLogin} className="mb-2 px-4 py-2 bg-green-500 text-white rounded">
        Use my phone number
      </button>
      <button onClick={onYojnaCardLogin} className="px-4 py-2 bg-yellow-500 text-white rounded">
        Use my Yojna card
      </button>
    </div>
  );
};

export default LoginOptions;