import React from 'react';

function SmallBanner() {
  return (
    <div className="container mx-auto">
      
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://www.zohowebstatic.com/sites/zweb/images/crm/crm-banner-bg.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold">Welcome to RS Top Coder</h1>
        </div>
      </div>
    </div>
  );
}

export default SmallBanner;
