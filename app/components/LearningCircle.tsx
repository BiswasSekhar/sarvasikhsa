import React from "react";

const LearningCircleTab: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl mb-4">Learning Circle</h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Horizontal Video */}
        <div className="relative w-full h-64">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Sul37_e3pxE" // Fixed URL
            title="Horizontal Video"
            allowFullScreen
          />
        </div>

        {/* Vertical Video */}
        <div className="relative w-full h-96 md:h-auto">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/--dKzquting" // Fixed URL
            title="Vertical Video"
            allowFullScreen
          />
        </div>
      </div>

      {/* More Videos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="relative w-full h-48">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/P5ZJmu93mC0" // Fixed URL
            title="Video 1"
            allowFullScreen
          />
        </div>
        <div className="relative w-full h-48">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/pY7MSS66mfU" // Fixed URL
            title="Video 2"
            allowFullScreen
          />
        </div>
        <div className="relative w-full h-48">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/m-T2gHcKAIU" // Fixed URL
            title="Video 3"
            allowFullScreen
          />
        </div>
      </div>

      {/* Upload Your Video Section */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
        <h3 className="font-bold text-xl mb-2">Upload Your Video</h3>
        <p className="text-gray-700 mb-4">Share your learning with the community!</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Upload Now
        </button>
      </div>

      {/* Call to Action */}
      <div className="mt-8 p-4 bg-blue-100 rounded-lg text-center">
        <h3 className="font-bold text-xl mb-2">Reach Out to Us</h3>
        <p className="text-gray-700 mb-4">Have questions or want to collaborate? Get in touch!</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default LearningCircleTab;
