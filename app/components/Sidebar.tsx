'use client';

import React from 'react';
import { FaHome, FaUser, FaComments, FaPlayCircle, FaBook } from 'react-icons/fa';

interface SidebarProps {
  activeTab: 'home' | 'profile' | 'community' | 'learningCircle' | 'quizzes';
  setActiveTab: (tab: 'home' | 'profile' | 'community' | 'learningCircle' | 'quizzes') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-black text-white shadow-md h-full">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li
            className={`flex items-center p-2 rounded-lg cursor-pointer ${activeTab === 'home' ? 'bg-gray-800' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <FaHome className="mr-3" />
            <span>Home</span>
          </li>
          <li
            className={`flex items-center p-2 rounded-lg cursor-pointer ${activeTab === 'profile' ? 'bg-gray-800' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser className="mr-3" />
            <span>Profile</span>
          </li>
          <li
            className={`flex items-center p-2 rounded-lg cursor-pointer ${activeTab === 'community' ? 'bg-gray-800' : ''}`}
            onClick={() => setActiveTab('community')}
          >
            <FaComments className="mr-3" />
            <span>Community</span>
          </li>
          <li
            className={`flex items-center p-2 rounded-lg cursor-pointer ${activeTab === 'learningCircle' ? 'bg-gray-800' : ''}`}
            onClick={() => setActiveTab('learningCircle')}
          >
            <FaBook className="mr-3" />
            <span>Learning Circle</span>
          </li>
          <li
            className={`flex items-center p-2 rounded-lg cursor-pointer ${activeTab === 'quizzes' ? 'bg-gray-800' : ''}`}
            onClick={() => setActiveTab('quizzes')}
          >
            <FaPlayCircle className="mr-3" />
            <span>Quizzes</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
