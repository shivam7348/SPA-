import React from 'react';
import { DataHospitalManagemant } from '../../../data/DataHospitalManagemant';

function HospitalBanner() {
  return (
    <div className='mt-8'>
      <div className='flex justify-center flex-wrap'>
        {DataHospitalManagemant.map((system, index) => (
          <div key={index} className='mr-4 mb-4 p-4 w-60 bg-white border rounded shadow'>
            <img src={system.img} alt={system.name} className='w-full h-32 object-cover mb-4 rounded' />
            <h3 className='text-lg font-semibold text-green-600'>{system.name}</h3>
            <p className='text-sm text-gray-700'>{system.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HospitalBanner;
