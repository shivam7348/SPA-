import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HospitalData } from '../HealthData/HospitalData'
import { PharmacyData } from '../HealthData/PharmacyData'
import { Button } from '@/components/ui/Button'

function HealthCardsProducts({img}) {
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState('hospital')

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  // Determine the data to display based on selected category
  const dataToDisplay =
    selectedCategory === 'hospital' ? HospitalData : PharmacyData

  return (
    <div className='mb-10 ml-56'>
      <div className='flex justify-start'>
        <div className='mr-8 font-extralight flex-shrink-0'>
          <p className='text-green-600 h-5'>
            All Health Care Products
          </p>

          <div className='space-y-2'>
            <ul>
              <li>
                <Link to="/products/hospital">
                  <Button
                    className='p-2 m-2 bg-gray-500 text-white rounded w'
                    onClick={() => handleCategoryChange('hospital')}
                  >
                    Hospital Management System
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/products/pharmacy">
                  <Button
                    className='p-2 m-2 bg-gray-500 text-white rounded'
                    onClick={() => handleCategoryChange('pharmacy')}
                  >
                    Pharmacy Management System
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/products/Laboratory">
                  <Button className='p-2 m-2 bg-gray-500 text-white rounded'>
                    Laboratory Management System
                  </Button>
                </Link>
              </li>
              
              <li>
                <Link to="/products/bloodbank">
                  <Button className='p-2 m-2 bg-gray-500 text-white rounded'>
                    Blood Bank Management System
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Cards container */}
        <div className='flex-wrap justify-start'>
          {dataToDisplay.map((system, index) => (
            <div
              key={index}
              className='mr-4 mb-4 p-4 w-full h-full-screen bg-white border rounded shadow'
            >
              <img
                src={img}
                alt={system.name}
                className='min-w h-full object-cover mb-4 rounded m-2'
              />
              <h3 className='text-lg font-semibold text-green-600'>{system.name}</h3>
              <p className='text-base font-semibold text-left text-gray-700'>
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HealthCardsProducts
