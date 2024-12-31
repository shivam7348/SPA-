import React, { useState, useEffect } from "react";

const CmsBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative pt-40 pb-96 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
     
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/src/assets/video/easy_communication.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div
        className={`relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8 lg:px-16 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        
       
      
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white bg-opacity-10 rounded-full -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 md:w-48 md:h-48 bg-white bg-opacity-10 rounded-full translate-x-16 translate-y-16"></div>
    </div>
  );
};

export default CmsBanner;
