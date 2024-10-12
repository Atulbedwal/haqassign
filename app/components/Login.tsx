// app/components/Login.tsx
import React, { useState } from 'react';

const Login: React.FC<{ onLogin: (phoneNumber: string) => void }> = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(phoneNumber);
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl">Login with Phone Number</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label className="block">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-2 border rounded w-full"
            required
            placeholder="Enter your phone number"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 mt-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;