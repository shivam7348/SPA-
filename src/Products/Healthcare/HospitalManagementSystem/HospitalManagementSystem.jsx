import React from 'react'
import HealthCardsList from '../../../HealthList/HealthCardsList'
import Banner from '../../../banner/Banner'

const img = "https://img.freepik.com/premium-photo/surgical-room-hospital-with-robotic-technology-equipment-machine-arm-surgeon-futuristic-operation-room-minimal-invasive-surgical-innovation-medical-robot-surgery-with-endoscopy_116317-7233.jpg?semt=ais_hybrid"



function HospitalManagementSystem() {
  return (
    <>
        <Banner data="Hospital Management System " img={img}/>
         <HealthCardsList img={img}/>
      
     
    </>
  )
}

export default HospitalManagementSystem