// app/components/Location.tsx
import React, { useState } from 'react';

const Location: React.FC<{ onLocationSubmit: (location: { state: string; district: string; pincode: string }) => void }> = ({ onLocationSubmit }) => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLocationSubmit({ state, district, pincode });
  };

  const useCurrentLocation = () => {
    // Logic to fetch current location
    // For demo, let's assume we set some dummy data
    setState('Dummy State');
    setDistrict('Dummy District');
    setPincode('123456');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div>
        <label className="block">State</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block">District</label>
        <input
          type="text"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block">Pincode</label>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <button
        type="button"
        onClick={useCurrentLocation}
        className="bg-green-500 text-white rounded p-2 hover:bg-green-600 mt-2"
      >
        Use My Current Location
      </button>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 mt-2"
      >
        Submit Location
      </button>
    </form>
  );
};

export default Location;