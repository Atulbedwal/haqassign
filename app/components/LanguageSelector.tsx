// app/components/LanguageSelector.tsx
"use client"
import React from 'react';

interface LanguageSelectorProps {
  onChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mt-4">
      <label className="block">Select Language</label>
      <select onChange={handleChange} className="p-2 border rounded w-full">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Kannada">Kannada</option>
      </select>
    </div>
  );
};

export default LanguageSelector;