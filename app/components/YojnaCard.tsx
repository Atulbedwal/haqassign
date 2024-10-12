// app/components/YojnaCard.tsx
"use client"
import React, { useState } from 'react';

interface YojnaCardProps {
  onLogin: (phoneNumber: string) => void; // Callback to handle login
}

const YojnaCard: React.FC<YojnaCardProps> = ({ onLogin }) => {
  const [qrCode, setQrCode] = useState<File | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleQrCodeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setQrCode(file);
      // Process the QR code here if needed (e.g., read the file, validate it, etc.)
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement logic to handle QR code submission
    if (qrCode) {
      // Logic to read the QR code and log in the user
      console.log('QR Code uploaded:', qrCode);
    }
  };

  const handlePhoneNumberSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(phoneNumber);
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Use My Yojna Card</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Upload QR Code Image</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleQrCodeUpload} 
            className="border rounded p-2 w-full" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          Submit QR Code
        </button>
      </form>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Or use phone number:</h3>
        <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
          <input 
            type="text" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            placeholder="Enter your phone number" 
            className="border rounded p-2 w-full" 
            required 
          />
          <button 
            type="submit" 
            className="bg-green-500 text-white rounded p-2 hover:bg-green-600"
          >
            Login with Phone Number
          </button>
        </form>
      </div>
    </div>
  );
};

export default YojnaCard;