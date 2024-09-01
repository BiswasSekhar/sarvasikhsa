'use client';

import React from "react";

const QuizzesAndScoreboard: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl">Scoreboard</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Play Quiz
        </button>
      </div>

      {/* Scoreboard */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-xl mb-2">Top Players</h3>
        <ul className="space-y-2">
          {["Player1", "Player2", "Player3", "Player4", "Player5"].map((player, index) => (
            <li key={index} className="flex justify-between">
              <span>{index + 1}. {player}</span>
              <span>{Math.floor(Math.random() * 100)} pts</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizzesAndScoreboard;
