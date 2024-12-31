import React from 'react';

const MainBanner = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover"
      >
        <source src="/src/assets/video/1.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0" 
        style={{
          background: 'conic-gradient(from )',
          mixBlendMode: 'overlay',
          opacity: 0.8
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-gray-300">
          Welcome To RS TOP Coder
        </h1>
        <button className="text-[#535353] font-semibold text-left px-5 py-0 leading-[38px] rounded-[25px] border-2 border-[#ea3d41] uppercase">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default MainBanner;