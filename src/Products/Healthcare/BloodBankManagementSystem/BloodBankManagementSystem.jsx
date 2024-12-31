import React from 'react'
import HealthCardsList from '../../../HealthList/HealthCardsList'
import Banner from '../../../banner/Banner'



const content =  "BloodBank Management System" 
const img = "https://img.freepik.com/premium-photo/tray-blood-bottles-with-one-that-says-blood-it_1301236-68367.jpg?semt=ais_hybrid"
function BloodBankManagementSystem() {
  return (
    <>

<Banner data="BloodBank Management System" img={img}/>
      <HealthCardsList img={img} />

    </>
  )
}

export default BloodBankManagementSystem