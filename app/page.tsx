'use client';
// app/page.tsx

import React, { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [responses, setResponses] = useState<string[]>([]);
  const [showGreeting, setShowGreeting] = useState(true); // State to manage the greeting

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (showGreeting) setShowGreeting(false); // Remove the greeting after first message
    setResponses([...responses, `You: ${inputText}`]);
    
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputText }),
    });

    const data = await res.json();
    setResponses([...responses, `You: ${inputText}`, `Kutty: ${data.response}`]);
    setInputText('');
  };

  return (
    <div className="flex h-screen bg-gray-800"> {/* Changed background color to gray */}
      <div className="w-64 bg-gradient-to-r from-blue-400 to-blue-600 p-4"> {/* Sidebar with gradient */}
        <h2 className="text-lg font-bold mb-4 text-white">Menu</h2>
        <ul>
          <li className="mb-2 text-white">Home</li>
          <li className="mb-2 text-white">Subjects</li>
          <li className="mb-2 text-white">Settings</li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          {showGreeting && (
            <div className="mb-4 text-center text-white"> {/* Centered greeting */}
              <p>Welcome, student!</p>
            </div>
          )}
          {responses.map((response, index) => (
            <div
              key={index}
              className={`flex ${response.startsWith('You:') ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div
                className={`max-w-xs p-3 rounded-t-lg rounded-${response.startsWith('You:') ? 'bl' : 'br'}-lg ${response.startsWith('You:') ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}
                style={{ 
                  borderRadius: response.startsWith('You:') ? '20px 20px 0px 20px' : '20px 20px 20px 0px',
                  maxWidth: response.startsWith('Kutty:') ? '70%' : '60%', // Increased width for Kutty's bubble
                }}
              >
                {response}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center p-4 bg-gray-100">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-l-full text-black"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
