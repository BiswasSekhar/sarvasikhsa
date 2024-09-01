import React from 'react';
import { FaTrophy, FaVideo, FaLink, FaStar } from 'react-icons/fa';

const Profile: React.FC = () => {
  // Example student data
  const student = {
    name: 'John Doe',
    rank: {
      school: 1,
      district: 5,
      state: 20,
    },
    videos: [
      { title: 'Math Tutorial', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { title: 'Science Experiment', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0' },
    ],
    portfolio: 'https://www.johndoeportfolio.com',
    rewards: ['Top Performer Award', 'Best Science Project'],
  };

  return (
    <div className="p-6 bg-gray-100 text-black rounded-lg shadow-lg">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-2">{student.name}</h2>
        <p className="text-xl text-gray-600">Student Profile</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Student Information</h3>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0">
            <p className="text-lg"><strong>Rank in School:</strong> {student.rank.school}</p>
            <p className="text-lg"><strong>Rank in District:</strong> {student.rank.district}</p>
            <p className="text-lg"><strong>Rank in State:</strong> {student.rank.state}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Videos</h3>
        <ul className="list-disc pl-5">
          {student.videos.map((video, index) => (
            <li key={index} className="mb-2">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaVideo className="inline mr-2" size={20} /> {video.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Portfolio</h3>
        <a
          href={student.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          <FaLink className="inline mr-2" size={20} /> {student.portfolio}
        </a>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Rewards</h3>
        <ul className="list-disc pl-5">
          {student.rewards.map((reward, index) => (
            <li key={index} className="mb-2 flex items-center">
              <FaTrophy className="inline mr-2 text-yellow-500" size={20} /> {reward}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
