// app/components/OTPVerification.tsx
import React, { useState } from 'react';

const OTPVerification: React.FC<{ onVerify: () => void }> = ({ onVerify }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would usually send the OTP to the server for verification
    console.log("Verifying OTP:", otp);
    onVerify(); // Call onVerify to proceed to the next step after successful verification
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl">Enter Your OTP</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="p-2 border rounded w-full"
          placeholder="Enter OTP"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 mt-2"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;