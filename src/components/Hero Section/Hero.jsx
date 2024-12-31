import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {



  return (
    <div className="relative w-full">
      <img
        src="https://topnotch.rstopcoder.com/images/banners/rstopcoder-1910-1688306156.jpg"
        alt="Banner"
        className="w-full h-[800px] object-fit"
      />
      <div className="absolute inset-0 flex   bg-black bg-opacity-50 text-white ">
          <h1 className='text-5xl font-sans md:font-serif 	ml-2 mt-9	'>"Building Your Digital Future with Precision and Passion"</h1>
      </div>
    </div>
  );
};  

export default Hero;
