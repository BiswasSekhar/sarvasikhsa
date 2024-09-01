'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/Sidebar';
import TextInputBox from './components/TextInputBox';
import LearningCircleTab from './components/LearningCircle';
import CommunityTab from './components/Community';
import QuizzesAndScoreboard from "./components/QuizzesAndScoreboard";
import Profile from "./components/profile";

const HomePage = () => {
  const [responses, setResponses] = useState<string[]>([]);
  const [showGreeting, setShowGreeting] = useState(true);
  const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'community' | 'learningCircle' | 'quizzes'>('home');

  const handleTextSubmit = async (inputText: string) => {
    if (showGreeting) setShowGreeting(false);
    setResponses([...responses, `You: ${inputText}`]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputText }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      if (data.response) {
        setResponses([...responses, `You: ${inputText}`, `Kutty: ${data.response}`]);
      } else {
        setResponses([...responses, `You: ${inputText}`, `Kutty: No response`]);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponses([...responses, `You: ${inputText}`, `Kutty: Error occurred`]);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col text-black">
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'home' && (
            <>
              {showGreeting && (
                <div className="mb-4 text-center">
                  <p>Welcome, student!</p>
                </div>
              )}
              {responses.map((response, index) => (
                <div
                  key={index}
                  className={`flex ${response.startsWith('You:') ? 'justify-end' : 'justify-start'} mb-4`}
                >
                  <div
                    className={`flex items-center max-w-xs p-3 rounded-t-lg rounded-${response.startsWith('You:') ? 'bl' : 'br'}-lg ${
                      response.startsWith('You:')
                        ? 'bg-gray-300 text-black'
                        : 'bg-blue-200 text-black'
                    }`}
                    style={{
                      borderRadius: response.startsWith('You:') ? '20px 20px 0px 20px' : 'none',
                      maxWidth: response.startsWith('Kutty:') ? '100%' : '60%',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={response.startsWith('You:') ? faUser : faRobot}
                      className="mr-2"
                    />
                    {response}
                  </div>
                </div>
              ))}
            </>
          )}
          {activeTab === 'profile' && <Profile />}
          {activeTab === 'community' && <CommunityTab />}
          {activeTab === 'learningCircle' && <LearningCircleTab />}
          {activeTab === 'quizzes' && <QuizzesAndScoreboard />}
        </div>

        {/* Render TextInputBox only on Home tab */}
        {activeTab === 'home' && (
          <div className="border-t border-gray-300 p-4 bg-white">
            <TextInputBox onSubmit={handleTextSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
