// app/pages/otp/page.tsx
"use client"; // This line is required for Client Components

import React, { useState } from 'react';

const OTPPage: React.FC = () => {
  const [otp, setOtp] = useState('');

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP submission
    console.log(otp);
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl">Enter OTP</h2>
      <form onSubmit={handleOTPSubmit} className="mt-4">
        <div>
          <label className="block">OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="p-2 border rounded w-full"
            required
            placeholder="Enter OTP"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OTPPage;