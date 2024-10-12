// app/components/Register.tsx
import React, { useState } from 'react';

const Register: React.FC<{ onNext: (location: { state: string; district: string; pincode: string }) => void }> = ({ onNext }) => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ state, district, pincode });
  };

  const handleUseCurrentLocation = () => {
    // This is where you would integrate location fetching logic.
    // For now, let's simulate this with placeholder data.
    setState('Sample State');
    setDistrict('Sample District');
    setPincode('123456');
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl">Register as a New User</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label className="block">State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="p-2 border rounded w-full"
            required
            placeholder="Enter your state"
          />
        </div>
        <div className="mt-2">
          <label className="block">District</label>
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="p-2 border rounded w-full"
            required
            placeholder="Enter your district"
          />
        </div>
        <div className="mt-2">
          <label className="block">Pincode</label>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="p-2 border rounded w-full"
            required
            placeholder="Enter your pincode"
          />
        </div>
        <button
          type="button"
          onClick={handleUseCurrentLocation}
          className="bg-gray-500 text-white rounded p-2 hover:bg-gray-600 mt-2"
        >
          Use My Current Location
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 mt-2 ml-2"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Register;