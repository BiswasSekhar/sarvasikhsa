// app/components/TextInputBox.tsx

import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Import the send icon

interface TextInputBoxProps {
  onSubmit: (inputText: string) => void;
}

export default function TextInputBox({ onSubmit }: TextInputBoxProps) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 border border-gray-300 rounded-full text-black" // Rectangle with 50% radius, no background color
      />
      <button
        type="submit"
        className="p-3 bg-blue-500 text-white rounded-full flex items-center justify-center ml-2"
      >
        <FaPaperPlane /> {/* Send icon */}
      </button>
    </form>
  );
}
