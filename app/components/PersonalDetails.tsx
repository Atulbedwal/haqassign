// app/components/PersonalDetails.tsx
import React, { useState } from 'react';

const PersonalDetails: React.FC<{ onComplete: (details: { name: string; gender: string; dob: string }) => void }> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const personalDetails = {
      name,
      gender,
      dob,
    };
    onComplete(personalDetails); // Call onComplete to proceed after entering personal details
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl">Personal Details</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full mb-2"
          placeholder="Enter your Name"
          required
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="p-2 border rounded w-full mb-2"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="p-2 border rounded w-full mb-2"
          required
        />
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

export default PersonalDetails;