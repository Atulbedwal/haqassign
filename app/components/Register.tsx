// app/components/Register.tsx
"use client";

import React, { useState } from 'react';

const Register: React.FC<{ onNext: (location: { state: string; district: string; pincode: string }) => void }> = ({ onNext }) => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = () => {
    onNext({ state, district, pincode });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
          required
        />
        <input
          type="text"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          placeholder="District"
          required
        />
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Pincode"
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Register;